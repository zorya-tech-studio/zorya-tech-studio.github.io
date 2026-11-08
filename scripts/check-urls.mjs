/* global console, process, URL */
/**
 * Browser test of every URL, served exactly like GitHub Pages. Run after `npm run build`:  npm run check:urls
 *
 * `vite dev` / `vite preview` answer every path with index.html, which hides 404s. This script serves dist/
 * the way GitHub Pages does (real files only, /dir -> 301 /dir/, missing -> 404.html with status 404), then
 * opens every URL in headless Chromium and checks:
 *  - first response is HTTP 200 (Google Play's policy checker reads the status code)
 *  - no JavaScript errors, the page renders a non-empty <h1>, not a "not found" page, not the home page
 *  - old Terms URLs (/terms, /offer, /terms/<slug>) end on /<slug>/terms-of-use
 *  - app legal pages show the Privacy | Terms header
 * URLs: scripts/legacy-urls.json (every URL the site ever served) + all current routes + all Terms URLs.
 *
 * Chromium: uses Playwright's browser; set CHROME=<path to chrome.exe> to use another one.
 */
import http from 'http'
import { existsSync, readFileSync, readdirSync, statSync } from 'fs'
import { extname, join } from 'path'
import { homedir } from 'os'
import { chromium } from 'playwright'
import { termsAliasPaths, termsPath, termsSlugs } from '../src/data/termsRoutes.js'
import { apps } from '../src/data/apps.js'

const LOCALES = ['uk', 'en']

if (!existsSync('dist/index.html')) {
  console.error('check-urls: dist/ not built — run `npm run build` first')
  process.exit(1)
}

// --- GitHub Pages-like static server ---
const TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.jpg': 'image/jpeg',
}
const server = http
  .createServer((req, res) => {
    const u = decodeURIComponent(new URL(req.url, 'http://x').pathname)
    let f = join('dist', u)
    if (existsSync(f) && statSync(f).isDirectory()) {
      if (!u.endsWith('/')) {
        res.writeHead(301, { Location: u + '/' })
        return res.end()
      }
      f = join(f, 'index.html')
    }
    if (existsSync(f) && statSync(f).isFile()) {
      res.writeHead(200, { 'Content-Type': TYPES[extname(f)] || 'application/octet-stream' })
      return res.end(readFileSync(f))
    }
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end(readFileSync('dist/404.html'))
  })
  .listen(0, '127.0.0.1')
await new Promise((r) => server.once('listening', r))
const BASE = `http://127.0.0.1:${server.address().port}`

// --- URL list ---
const urls = new Set(JSON.parse(readFileSync('scripts/legacy-urls.json', 'utf8')).urls)
for (const m of readFileSync('src/router.js', 'utf8').matchAll(/path:\s*'([^']+)'/g)) {
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
const list = [...urls]
const appSlugs = new Set(apps.map((a) => a.slug))

// --- Browser ---
function findChrome() {
  if (process.env.CHROME) return process.env.CHROME
  const dir = join(homedir(), 'AppData/Local/ms-playwright')
  if (!existsSync(dir)) return undefined
  for (const d of readdirSync(dir)
    .filter((n) => n.startsWith('chromium-'))
    .sort()
    .reverse()) {
    for (const sub of ['chrome-win64/chrome.exe', 'chrome-win/chrome.exe']) {
      const p = join(dir, d, sub)
      if (existsSync(p)) return p
    }
  }
  return undefined
}
let browser
try {
  browser = await chromium.launch()
} catch {
  const exe = findChrome()
  if (!exe) {
    console.error(
      'check-urls: no Chromium found. Run `npx playwright install chromium` or set CHROME=<path>.',
    )
    server.close()
    process.exit(1)
  }
  browser = await chromium.launch({ executablePath: exe })
}
const ctx = await browser.newContext({ locale: 'en-US' })
await ctx.route(/googletagmanager|google-analytics|fonts\.(googleapis|gstatic)/, (r) => r.abort())

const failures = []
let next = 0
async function worker() {
  const page = await ctx.newPage()
  while (next < list.length) {
    const from = list[next++]
    const errors = []
    const onError = (e) => errors.push(e.message)
    page.on('pageerror', onError)
    let status = 0
    try {
      const resp = await page.goto(BASE + from, { waitUntil: 'domcontentloaded' })
      status = resp.status()
      await page.locator('h1:visible').first().waitFor({ timeout: 10000 })
    } catch {
      errors.push('page did not render an <h1> within 10 s')
    }
    page.off('pageerror', onError)
    const to = new URL(page.url()).pathname.replace(/\/$/, '')
    const h1 = (
      await page
        .locator('h1:visible')
        .first()
        .innerText()
        .catch(() => '')
    ).trim()
    const segs = from.split('/').filter(Boolean)
    const slug = LOCALES.includes(segs[0]) ? segs[1] : segs[0]
    const oldTerms =
      /\/(terms|offer|terms-of-use)$/.test(from) || /^\/((en|uk)\/)?terms\/[^/]+$/.test(from)
    const p = []
    if (status !== 200) p.push(`HTTP ${status}`)
    if (errors.length) p.push(errors.join('; '))
    if (!h1) p.push('empty <h1>')
    if (/not found|не знайдено/i.test(h1)) p.push('"not found" page')
    if (/^\/(en|uk)?$/.test(to) && !/^\/(en|uk)?$/.test(from)) p.push('fell back to the home page')
    if (oldTerms && segs.length >= 2 && !to.endsWith('/terms-of-use'))
      p.push('Terms URL did not end on /terms-of-use')
    if (appSlugs.has(slug) && /\/(privacy-policy|terms-of-use)$/.test(to)) {
      if ((await page.locator('.legal-head__tab').count()) !== 2)
        p.push('Privacy | Terms header missing')
    }
    if (p.length) failures.push(`${from} -> ${to}  [${h1.replace(/\s+/g, ' ')}]  ${p.join(' | ')}`)
  }
  await page.close()
}
const started = Date.now()
await Promise.all(Array.from({ length: 8 }, worker))
await browser.close()
server.close()

if (failures.length) {
  console.error(
    `\ncheck-urls: ${failures.length} of ${list.length} URLs failed\n` +
      failures.map((f) => '  ' + f).join('\n'),
  )
  process.exit(1)
}
console.log(
  `check-urls: OK — ${list.length} URLs return 200 and render (${Math.round((Date.now() - started) / 1000)} s)`,
)
