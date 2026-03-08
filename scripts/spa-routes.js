/**
 * Post-build script: copies dist/index.html into each SPA route directory
 * so GitHub Pages serves them with HTTP 200 instead of 404.
 * Also copies to dist/404.html as a catch-all fallback.
 */
import { copyFileSync, mkdirSync } from 'fs'

const src = 'dist/index.html'

const routes = ['en', 'uk', 'en/privacy', 'uk/privacy', 'en/projects', 'uk/projects']

for (const route of routes) {
  const dir = `dist/${route}`
  mkdirSync(dir, { recursive: true })
  copyFileSync(src, `${dir}/index.html`)
}

// Catch-all fallback for any unmatched route
copyFileSync(src, 'dist/404.html')

console.log(`Created index.html for ${routes.length} routes + 404.html`)
