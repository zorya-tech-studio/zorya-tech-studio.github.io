/**
 * Post-build script: copies dist/index.html into each SPA route directory
 * so GitHub Pages serves them with HTTP 200 instead of 404.
 * Also copies to dist/404.html as a catch-all fallback.
 *
 * Single source of truth: routes are parsed directly from src/router.js
 * (every `path: '/:locale/...'` entry), so adding a route there is enough —
 * no need to keep a duplicate list in sync here.
 */
import { copyFileSync, mkdirSync, readFileSync } from 'fs'
import { termsAliasPaths, termsPath, termsSlugs } from '../src/data/termsRoutes.js'

const src = 'dist/index.html'

// Keep in sync with LOCALES in src/router.js
const LOCALES = ['uk', 'en']

// Extract every localized path (`path: '/:locale...'`) from the router.
const routerSrc = readFileSync('src/router.js', 'utf8')
const localePaths = [...routerSrc.matchAll(/path:\s*'(\/:locale[^']*)'/g)].map((m) => m[1])

if (localePaths.length === 0) {
  throw new Error('spa-routes: no `/:locale` paths found in src/router.js — aborting')
}

// '/:locale/foo/bar' -> 'foo/bar' ; '/:locale' -> '' (home)
// Segments with route params (e.g. 'terms/:slug') are not real folders; they are expanded below.
const segments = [...new Set(localePaths.map((p) => p.replace(/^\/:locale\/?/, '')))].filter(
  (seg) => !seg.includes(':'),
)

// Terms of Use routes are generated in router.js from termsRoutes.js: the canonical
// /:locale/<slug>/terms-of-use and the old URLs that redirect to it all need a real file.
segments.push(...termsSlugs().flatMap((slug) => [termsPath(slug), ...termsAliasPaths(slug)]))

const routes = []
for (const locale of LOCALES) {
  for (const seg of segments) {
    routes.push(seg ? `${locale}/${seg}` : locale)
  }
}

// Локалізовані маршрути мають у router.js «дзеркальні» редіректи без префікса
// локалі (напр. `/ytaudit/privacy-policy` -> `/:locale/ytaudit/privacy-policy`).
// Ці редіректи спрацьовують ЛИШЕ в SPA на клієнті — на GitHub Pages прямий
// захід на не-локалізований URL віддавав 404.html (HTTP 404), тому валідатори
// (Google Play тощо) бачили «сторінку не знайдено». Генеруємо статичний 200 і
// для них: сторінка завантажить SPA, а вже роутер зробить редирект на локаль.
// Short store/app URLs that only redirect (Play Console, AdMob and the Kings Corner app use them).
const SHORT_REDIRECT_ROUTES = [
  'kings-corner/privacy',
  'kings-corner/terms',
  'kalimba_tuner/privacy',
  'kalimba_tuner/terms',
  'kalimba-tuner/privacy',
  'kalimba-tuner/terms',
  'survival-guide/privacy',
  'survival-guide/terms',
  'survival_guide/privacy',
  'survival_guide/terms',
  'crochet-row-counter/privacy',
  'crochet-row-counter/terms',
  'crochet_row_counter/privacy',
  'crochet_row_counter/terms',
  'row-counter/privacy',
  'row-counter/terms',
  'vocal-range-test/privacy',
  'vocal-range-test/terms',
  'vocal_range_test/privacy',
  'vocal_range_test/terms',
  'recorder-fingering/privacy',
  'recorder-fingering/terms',
  'recorder_fingering/privacy',
  'recorder_fingering/terms',
  'cube-solver-3d/privacy',
  'cube-solver-3d/terms',
  'cube_solver_3d/privacy',
  'cube_solver_3d/terms',
]
for (const seg of SHORT_REDIRECT_ROUTES) routes.push(seg)

// Every literal path without a locale in router.js (short redirects such as /kalimba_tuner/privacy-policy)
// also needs a real file, otherwise GitHub Pages answers 404 before the SPA can redirect.
const barePaths = [...routerSrc.matchAll(/path:\s*'\/([^':']+)'/g)].map((m) => m[1])
routes.push(...barePaths)

for (const seg of segments) {
  if (seg) routes.push(seg)
}

for (const route of new Set(routes)) {
  const dir = `dist/${route}`
  mkdirSync(dir, { recursive: true })
  copyFileSync(src, `${dir}/index.html`)
}

// Catch-all fallback for any unmatched route
copyFileSync(src, 'dist/404.html')

console.log(`Created index.html for ${routes.length} routes + 404.html`)
