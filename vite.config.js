import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { writeFileSync, readFileSync } from 'fs'
import { resolve } from 'path'

const HOSTNAME = 'https://zorya-tech-studio.github.io'
const LOCALES = ['uk', 'en']

// Single source of truth: derive the sitemap directly from src/router.js
// (every `path: '/:locale/...'` entry), the same way scripts/spa-routes.js
// prerenders routes — so adding a route to the router is enough, no manual
// list to keep in sync here.
function routeSegments() {
  const routerSrc = readFileSync(resolve(import.meta.dirname, 'src/router.js'), 'utf8')
  const localePaths = [...routerSrc.matchAll(/path:\s*'(\/:locale[^']*)'/g)].map((m) => m[1])
  if (localePaths.length === 0) {
    throw new Error('sitemap: no `/:locale` paths found in src/router.js — aborting')
  }
  // '/:locale/foo/bar' -> 'foo/bar' ; '/:locale' -> '' (home)
  return [...new Set(localePaths.map((p) => p.replace(/^\/:locale\/?/, '')))]
}

// changefreq/priority heuristics by page type.
function sitemapMeta(seg) {
  if (seg === '') return { changefreq: 'monthly', priority: 1.0 } // home
  if (seg === 'projects') return { changefreq: 'monthly', priority: 0.7 }
  return { changefreq: 'yearly', priority: 0.3 } // privacy / terms / offer / disclaimer
}

function sitemapPlugin() {
  return {
    name: 'generate-sitemap',
    closeBundle() {
      const today = new Date().toISOString().split('T')[0]
      const urls = routeSegments().flatMap((seg) => {
        const { changefreq, priority } = sitemapMeta(seg)
        const path = seg ? `/${seg}` : ''
        return LOCALES.map(
          (locale) => `  <url>
    <loc>${HOSTNAME}/${locale}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
        )
      })

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`
      const robots = `User-agent: *
Allow: /

Sitemap: ${HOSTNAME}/sitemap.xml
`
      const outDir = resolve(import.meta.dirname, 'dist')
      writeFileSync(resolve(outDir, 'sitemap.xml'), sitemap)
      writeFileSync(resolve(outDir, 'robots.txt'), robots)
    },
  }
}

export default defineConfig({
  plugins: [vue(), sitemapPlugin()],
  base: '/',
  server: {
    port: 5174,
    open: true,
  },
})
