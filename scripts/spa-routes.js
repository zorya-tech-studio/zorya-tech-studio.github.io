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
const segments = [...new Set(localePaths.map((p) => p.replace(/^\/:locale\/?/, '')))]

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
for (const seg of segments) {
  if (seg) routes.push(seg)
}

for (const route of routes) {
  const dir = `dist/${route}`
  mkdirSync(dir, { recursive: true })
  copyFileSync(src, `${dir}/index.html`)
}

// Catch-all fallback for any unmatched route
copyFileSync(src, 'dist/404.html')

console.log(`Created index.html for ${routes.length} routes + 404.html`)
