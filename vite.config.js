import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

const HOSTNAME = 'https://zorya-tech-studio.github.io'
const LOCALES = ['uk', 'en']
const PAGES = [
  { path: '', changefreq: 'monthly', priority: 1.0 },
  { path: '/privacy', changefreq: 'yearly', priority: 0.3 },
  { path: '/projects', changefreq: 'monthly', priority: 0.7 },
]

function sitemapPlugin() {
  return {
    name: 'generate-sitemap',
    closeBundle() {
      const today = new Date().toISOString().split('T')[0]
      const urls = PAGES.flatMap((page) =>
        LOCALES.map(
          (locale) => `  <url>
    <loc>${HOSTNAME}/${locale}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
        ),
      )

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
