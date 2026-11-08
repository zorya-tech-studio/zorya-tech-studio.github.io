/* global console, process */
/**
 * Static site checks (no browser). Run after `npm run build`:  npm run check
 *
 * Catches the problems that only show up in production on GitHub Pages:
 *  - i18n strings that vue-i18n cannot compile (@, |, braces) -> blank site in prod
 *  - uk/en translations out of sync, missing app names/descriptions
 *  - app registry mistakes (status, category, icons, privacy route, meta.app)
 *  - Terms of Use pages with missing app names, broken text or missing extras keys
 *  - URLs without a prerendered dist/<path>/index.html -> HTTP 404 for Google Play
 *  - sitemap listing redirects or missing pages
 * Exit code 1 on any problem.
 */
import { existsSync, readFileSync } from 'fs'
import { baseCompile } from '@intlify/message-compiler'
import { apps, iconThumb } from '../src/data/apps.js'
import { watchFaces } from '../src/data/watchfaces.js'
import { TERMS_TEXT, findTermsTarget, profilesFor } from '../src/data/appTerms.js'
import { APP_TERMS_EXTRAS } from '../src/data/appTermsExtras.js'
import { termsAliasPaths, termsPath, termsSlugs } from '../src/data/termsRoutes.js'

const LOCALES = ['uk', 'en']
const problems = []
const fail = (area, msg) => problems.push(`[${area}] ${msg}`)

const msgs = Object.fromEntries(
  LOCALES.map((l) => [l, JSON.parse(readFileSync(`src/i18n/${l}.json`, 'utf8'))]),
)
const get = (obj, key) => key.split('.').reduce((o, k) => o?.[k], obj)
const flat = (o, p = '') =>
  Object.entries(o).flatMap(([k, v]) =>
    v && typeof v === 'object' ? flat(v, `${p}${k}.`) : [[`${p}${k}`, v]],
  )

// 1. i18n: every message compiles exactly like production, and both locales have the same keys.
for (const l of LOCALES) {
  for (const [key, val] of flat(msgs[l])) {
    if (typeof val !== 'string') continue
    baseCompile(val, {
      onError: (e) =>
        fail('i18n', `${l}.json ${key}: vue-i18n syntax error ${e.code} in "${val.slice(0, 80)}"`),
    })
  }
}
const keysOf = (l) => new Set(flat(msgs[l]).map(([k]) => k))
const [ukKeys, enKeys] = LOCALES.map(keysOf)
for (const k of enKeys) if (!ukKeys.has(k)) fail('i18n', `key only in en.json: ${k}`)
for (const k of ukKeys) if (!enKeys.has(k)) fail('i18n', `key only in uk.json: ${k}`)

// 2. App status: one wording for every app (see CLAUDE.md).
const statusKeys = Object.keys(msgs.en.app_status || {})
if (statusKeys.join() !== 'released')
  fail('status', `app_status must hold only "released", has: ${statusKeys}`)

// 3. App registry.
const routerSrc = readFileSync('src/router.js', 'utf8')
const projectsSrc = readFileSync('src/pages/ProjectsPage.vue', 'utf8')
const categoryOrder = [
  ...(projectsSrc.match(/CATEGORY_ORDER = \[([^\]]*)\]/)?.[1] || '').matchAll(/'([^']+)'/g),
].map((m) => m[1])
const seen = new Set()
for (const a of apps) {
  const id = `app ${a.slug}`
  if (seen.has(a.slug)) fail(id, 'duplicate slug')
  seen.add(a.slug)
  if (a.status !== 'released') fail(id, `status must be 'released', is '${a.status}'`)
  if (!categoryOrder.includes(a.category))
    fail(id, `category '${a.category}' missing from CATEGORY_ORDER`)
  for (const l of LOCALES) {
    if (typeof get(msgs[l], `projects.filter.${a.category}`) !== 'string')
      fail(id, `projects.filter.${a.category} missing in ${l}.json`)
    for (const k of ['nameKey', 'descKey', 'subtitleKey'])
      if (a[k] && typeof get(msgs[l], a[k]) !== 'string') fail(id, `${a[k]} missing in ${l}.json`)
  }
  if (!existsSync(`public${a.icon}`)) fail(id, `icon not found: public${a.icon}`)
  if (!existsSync(`public${iconThumb(a)}`))
    fail(id, `icon thumbnail not found: public${iconThumb(a)}`)
  if (typeof a.privacyRoute !== 'function') fail(id, 'privacyRoute missing')
  else {
    const p = a.privacyRoute(':locale')
    const m = routerSrc.match(
      new RegExp(`path: '${p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'[\\s\\S]*?\\n  \\}`),
    )
    if (!m) fail(id, `no route for ${p} in router.js`)
    else if (!m[0].includes(`app: '${a.slug}'`))
      fail(id, `route ${p} must have meta.app '${a.slug}' (needed for the Privacy | Terms header)`)
  }
  if (!routerSrc.includes(`path: '/${a.slug}/privacy-policy'`))
    fail(id, `no short redirect route '/${a.slug}/privacy-policy' (without locale) in router.js`)
  if (a.offerRoute && a.offerRoute('en') !== `/en/${termsPath(a.slug)}`)
    fail(id, `offerRoute must be /:locale/${termsPath(a.slug)}`)
}
for (const w of watchFaces) {
  if (!existsSync(`public${w.image}`))
    fail(`watch face ${w.slug}`, `image not found: public${w.image}`)
  if (!/^https:\/\/play\.google\.com\/store\/apps\/details\?id=/.test(w.playUrl))
    fail(`watch face ${w.slug}`, 'playUrl must be a Google Play details URL')
  if (seen.has(w.slug)) fail(`watch face ${w.slug}`, 'slug clashes with an app slug')
}

// 4. Terms of Use content: every page, both languages.
const sectionIds = (l) => TERMS_TEXT[l].sections.map((s) => `${s.id}:${s.when || ''}`).join()
if (sectionIds('en') !== sectionIds('uk')) fail('terms', 'uk and en have different sections')
for (const slug of termsSlugs()) {
  const tg = findTermsTarget(slug)
  const prof = profilesFor(tg)
  for (const l of LOCALES) {
    const name = tg.kind === 'app' ? get(msgs[l], tg.app.nameKey) : tg.face.name
    if (!name) fail(`terms ${slug}`, `no app name in ${l}`)
    const text = TERMS_TEXT[l].sections
      .filter((s) => !s.when || prof.has(s.when))
      .flatMap((s) => [...(s.paras || []), ...(s.list || [])].map((f) => f(name)))
      .join(' ')
    if (/undefined|null|\$\{|\{\{/.test(text)) fail(`terms ${slug}`, `broken text in ${l}`)
    if (!text.includes(name)) fail(`terms ${slug}`, `app name not in ${l} text`)
  }
}
for (const [slug, blocks] of Object.entries(APP_TERMS_EXTRAS)) {
  if (!apps.some((a) => a.slug === slug)) fail(`terms extras ${slug}`, 'no such app in apps.js')
  for (const b of blocks)
    for (const k of [b.title, ...(b.paras || []), ...(b.list || [])].filter(Boolean))
      for (const l of LOCALES)
        if (typeof get(msgs[l], k) !== 'string')
          fail(`terms extras ${slug}`, `${k} missing in ${l}.json`)
}

// 5. Built output: every URL has a real file (GitHub Pages returns 404 otherwise).
if (!existsSync('dist/index.html')) {
  fail('dist', 'dist/ not built — run `npm run build` first')
} else {
  const urls = new Set(JSON.parse(readFileSync('scripts/legacy-urls.json', 'utf8')).urls)
  for (const m of routerSrc.matchAll(/path:\s*'([^']+)'/g)) {
    const p = m[1]
    if (p === '/') continue
    if (p.startsWith('/:locale')) {
      if (!/:(?!locale)/.test(p)) for (const l of LOCALES) urls.add(p.replace(':locale', l))
    } else if (!p.includes(':')) urls.add(p)
  }
  for (const slug of termsSlugs())
    for (const seg of [termsPath(slug), ...termsAliasPaths(slug)]) {
      urls.add(`/${seg}`)
      for (const l of LOCALES) urls.add(`/${l}/${seg}`)
    }
  for (const u of urls)
    if (!existsSync(`dist${u}/index.html`))
      fail('dist', `no dist${u}/index.html -> HTTP 404 on GitHub Pages`)
  if (!existsSync('dist/404.html')) fail('dist', 'dist/404.html missing')

  const sitemap = readFileSync('dist/sitemap.xml', 'utf8')
  const locs = [
    ...sitemap.matchAll(/<loc>https:\/\/zorya-tech-studio\.github\.io([^<]*)<\/loc>/g),
  ].map((m) => m[1])
  for (const p of locs) if (!existsSync(`dist${p}/index.html`)) fail('sitemap', `${p} has no page`)
  for (const slug of termsSlugs()) {
    for (const l of LOCALES)
      if (!locs.includes(`/${l}/${termsPath(slug)}`))
        fail('sitemap', `missing /${l}/${termsPath(slug)}`)
    for (const alias of termsAliasPaths(slug))
      if (locs.some((p) => p.endsWith(`/${alias}`))) fail('sitemap', `lists redirect URL ${alias}`)
  }
  console.log(
    `check-site: ${urls.size} URLs have prerendered pages, ${locs.length} sitemap entries`,
  )
}

if (problems.length) {
  console.error(
    `\ncheck-site: ${problems.length} problem(s)\n` + problems.map((p) => '  ' + p).join('\n'),
  )
  process.exit(1)
}
console.log(
  `check-site: OK (${apps.length} apps, ${watchFaces.length} watch faces, ${termsSlugs().length} Terms pages)`,
)
