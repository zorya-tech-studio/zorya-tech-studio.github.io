/**
 * URL scheme for app legal pages — one structure for every app and watch face:
 *   /:locale/<slug>/privacy-policy   (per-app privacy page; watch faces use the shared /:locale/privacy)
 *   /:locale/<slug>/terms-of-use     (universal Terms of Use, src/pages/AppTermsPage.vue)
 *
 * Older Terms URLs keep working and redirect to /:locale/<slug>/terms-of-use:
 *   /:locale/<slug>/terms, /:locale/<slug>/offer, /:locale/terms/<slug>, and the same without the locale.
 *
 * Used by src/router.js (route generation), scripts/spa-routes.js (prerendered index.html = HTTP 200)
 * and vite.config.js (sitemap). Kept free of the terms text so the router bundle stays small.
 */
import { apps } from './apps.js'
import { watchFaces } from './watchfaces.js'

export function termsSlugs() {
  return [...apps.map((a) => a.slug), ...watchFaces.map((w) => w.slug)]
}

export function findTermsTarget(slug) {
  const app = apps.find((a) => a.slug === slug)
  if (app) return { kind: 'app', app }
  const face = watchFaces.find((w) => w.slug === slug)
  if (face) return { kind: 'watchface', face }
  return null
}

/** Path segment (without locale) of the canonical Terms page. */
export const termsPath = (slug) => `${slug}/terms-of-use`

/** Old path segments (without locale) that redirect to termsPath(slug). */
export const termsAliasPaths = (slug) => [`${slug}/terms`, `${slug}/offer`, `terms/${slug}`]
