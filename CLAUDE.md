# Zorya Tech Studio — Website

## Project

Landing page for Zorya Tech Studio — independent mobile app studio.
Deployed to GitHub Pages at https://zorya-tech-studio.github.io/

## Tech Stack

- Vite + Vue 3 (Composition API, `<script setup>`)
- Pure CSS — no UI frameworks (no Tailwind, no Bootstrap)
- Google Fonts: Cinzel (headings) + Space Grotesk (UI text)

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint
- `npm run lint:fix` — run ESLint with auto-fix
- `npm run format` — format with Prettier

## Structure

```
src/
├── App.vue                ← root component, skip-link + router-view
├── main.js                ← app entry point
├── router.js              ← vue-router config, locale handling
├── style.css              ← global CSS variables, resets, fonts
├── i18n/
│   ├── index.js           ← vue-i18n setup, locale detection
│   ├── uk.json            ← Ukrainian translations
│   └── en.json            ← English translations
├── components/
│   ├── NavBar.vue          ← fixed nav, blur on scroll, lang toggle
│   ├── HeroSection.vue     ← canvas starfield + title
│   ├── AboutSection.vue    ← studio description
│   ├── AppsSection.vue     ← app cards grid
│   └── ContactSection.vue  ← email + github links + footer
└── pages/
    ├── HomePage.vue        ← main landing page (all sections)
    ├── PrivacyPage.vue     ← privacy policy
    └── ProjectsPage.vue    ← projects listing
```

## Design Tokens (CSS Variables)

All colors and fonts are defined in `src/style.css` via `:root` CSS variables.

- Background: `--bg: #07090e`
- Accent (cyan): `--accent: #00f0ff`
- Glitch (pink): `--glitch: #ff2d6b`
- Text: `--text: #e0e4ea`, dim: `--text-dim: #9ca3af`

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers on push to `main`.
Uses `actions/deploy-pages` to deploy `dist/` to GitHub Pages.

## Code Quality

- ESLint + Prettier with pre-commit hook (husky + lint-staged)
- Pre-commit runs `eslint --fix` + `prettier --write` on staged files

## Conventions

- Bilingual: Ukrainian (default) + English, via vue-i18n
- Mobile-first responsive design
- Minimal animations — starfield canvas, scroll fade-in, subtle hover transitions
- `vite.config.js` base: `'/'` (org repo, served from root)

## Routes & HTTP 200 — privacy/legal URLs (IMPORTANT)

GitHub Pages is a **static** host: a URL returns HTTP 200 only if a real file
exists at that path. The SPA's client-side redirects (`/foo` → `/:locale/foo`
in `router.js`) do **not** help here — a direct hit on an un-prerendered path
serves `404.html` with **HTTP status 404**, even though the page visually loads
after the JS boots. External validators (Google Play privacy-policy checker,
crawlers) read the **status code**, so they report "page not found".

- `scripts/spa-routes.js` (runs after `vite build`) prerenders a static
  `index.html` for **every** route so they all return 200 — both the
  locale-prefixed paths (`/en/...`, `/uk/...`) **and** the bare redirect paths
  (`/ytaudit/privacy-policy`). It parses `router.js` directly; adding a
  `path: '/:locale/...'` route there is enough — no list to keep in sync.
- **Rule:** any externally-referenced URL (privacy policy, terms, store
  listings, Play Console declarations) must point at a path that
  `spa-routes.js` prerenders. Verify after build: `ls dist/<path>/index.html`.
- When giving a URL to an external service, the locale-prefixed form
  (`/en/<app>/privacy-policy`) is safest — it maps to a fully prerendered page.

## i18n — special characters (IMPORTANT)

vue-i18n treats certain characters in message strings (`src/i18n/*.json`) as
**syntax**, not literal text. If a translation contains one unescaped, the
**production** build throws at runtime and **every page renders blank** (the
error appears minified as `SyntaxError: 10` = `INVALID_LINKED_FORMAT`).

- `@` → linked-message syntax (`@:key`). Escape a literal `@` as `{'@'}`.
  Example: `@handle` must be written `{'@'}handle` (renders identically).
- `{ }` → interpolation. For literal braces use `{'{'}` / `{'}'}`.
- `|` → plural separator. Avoid bare `|` in plain messages.

**This will NOT be caught locally:** `npm run build` succeeds (messages compile
at runtime, JIT), and the dev-mode compiler in `node_modules` is lenient — it
only crashes in the deployed prod build. So **manually scan new/edited strings
for `@`, `{`, `}`, `|`** before pushing. If you add such a character, escape it.
