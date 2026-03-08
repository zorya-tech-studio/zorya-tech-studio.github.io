# Audit Changes — 2026-03-08

## Lighthouse Score Comparison

| Category       | Before | After   | Change |
| -------------- | ------ | ------- | ------ |
| Performance    | 63     | 63      | —      |
| Accessibility  | 95     | **100** | +5     |
| Best Practices | 100    | 100     | —      |
| SEO            | 91     | **100** | +9     |

> Performance score (63) is limited by dev server overhead (unminified JS, no gzip).
> Production build + GitHub Pages with compression will score significantly higher.

## Changes Made

### 1. Screenshots folder + .gitignore

- Created `screenshots/` directory for Playwright screenshots
- Added `screenshots/` to `.gitignore`

### 2. Hero title animated gradient

- **File**: `src/components/HeroSection.vue`
- Replaced static cyan color with a flowing gradient animation (cyan → purple → pink → gold → cyan)
- 6s infinite linear animation via `background-clip: text`

### 3. Preconnect to Google Fonts

- **File**: `index.html`
- Added `<link rel="preconnect">` for `fonts.googleapis.com` and `fonts.gstatic.com`

### 4. Color contrast fix (Accessibility)

- **File**: `src/style.css`
- Changed `--text-dim` from `#6b7280` (contrast 3.91:1) to `#9ca3af` (contrast 5.5:1)
- Fixes contrast issues on `.app-desc` and `.privacy-link`

### 5. Open Graph meta tags

- **File**: `index.html`
- Added `og:type`, `og:title`, `og:description`, `og:url`, `og:site_name`, `og:locale`
- Added Twitter Card meta tags

### 6. Canonical URL

- **File**: `index.html`
- Added `<link rel="canonical" href="https://zorya-tech-studio.github.io/">`

### 7. Structured Data (JSON-LD)

- **File**: `index.html`
- Added Organization schema with name, URL, description, email, sameAs (GitHub)

### 8. robots.txt

- **File**: `public/robots.txt`
- Created valid robots.txt with `Allow: /` and sitemap reference

### 9. Dynamic `lang` attribute

- **File**: `src/router.js`
- `document.documentElement.lang` now updates on every route change to match current locale

### 10. Footer with copyright

- **File**: `src/components/ContactSection.vue`
- Added `© 2026 Zorya Tech Studio` below privacy link

### 11. Scroll fade-in animations

- **File**: `src/style.css` — added `.fade-section` / `.is-visible` classes
- **File**: `src/pages/HomePage.vue` — wrapped sections in `.fade-section` divs with IntersectionObserver

## Remaining Performance Issues (dev server only)

These are expected in dev mode and resolve with `npm run build`:

- Minify JavaScript (dev serves unminified)
- Unused JavaScript (tree-shaking happens at build)
- Text compression (GitHub Pages serves gzip/brotli)
- Legacy JavaScript (Vite handles in production)
