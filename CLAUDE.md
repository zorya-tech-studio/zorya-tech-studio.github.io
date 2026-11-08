# Zorya Tech Studio — Website

## Project

Landing page for Zorya Tech Studio — independent mobile app studio.
Deployed to GitHub Pages at https://zorya-tech-studio.github.io/

## Tech Stack

- Vite + Vue 3 (Composition API, `<script setup>`)
- Pure CSS — no UI frameworks (no Tailwind, no Bootstrap)
- Google Fonts: Space Grotesk (headings) + Manrope (body text)

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
    ├── ProjectsPage.vue    ← projects listing
    └── apps/               ← per-app privacy policy & terms pages
```

## Design Tokens (CSS Variables)

All colors and fonts are defined in `src/style.css` via `:root` CSS variables.

Visual theme is **night → dawn**: dark navy sky, warm gold accent, soft realistic
shadows. **No neon, no glitch, no cyan** — those belong to an earlier design.

- Background (night): `--bg: #0a0d14`; surfaces `--surface-1: #111520`, `--surface-2: #181d2a`
- Accent (dawn gold): `--accent: #f2b65a`, hover `--accent-hover: #f6c87e`
- Secondary (dawn sky): `--accent-2: #8fa3d8`
- Text: `--text: #edeff4`, muted `--text-muted: #a6adbd`, faint `--text-faint: #6e7686`
- Hairlines: `--hairline: #242a38`

See `docs/youtube-banner-prompts.md` for the brand look described in prose.

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

## App status badge — one wording for everyone (IMPORTANT)

Every app on the site is presented as **released**, in every locale, even if it is not on Google Play yet. No "Незабаром", "Coming soon", "Реліз", "Опубліковано", "beta", "в розробці" — a visitor must never see one app labelled differently from another.

- The badge text is **not** per-app. It comes from the shared `app_status.<status>` key in `src/i18n/*.json`, rendered from `app.status` in `AppsSection.vue` and `ProjectsPage.vue`.
- A new entry in `src/data/apps.js` sets `status: 'released'` and **nothing else** — there is no `statusKey` field any more, so there is no per-app string to get out of sync. Do not reintroduce one.
- uk: `Випущено`. en: `Released`. `app_status` deliberately holds that one key and nothing else. If a different status ever becomes necessary, add it once for both locales and apply it to the whole set — never to a single app.

## New apps go FIRST in the registry (IMPORTANT)

`src/data/apps.js` is rendered in array order, and the homepage renders only the first `HOMEPAGE_APPS_LIMIT` entries (`apps.slice(0, HOMEPAGE_APPS_LIMIT)` in `AppsSection.vue`). There is no sort by date, no `featured` flag, no `order` field — position in the array **is** the ordering.

- A newly released app is added at the **top** of the array, above every existing entry. Never append it at the bottom: appended, it is buried at the end of the Projects page and never appears on the homepage at all, which is the opposite of what a fresh release needs.
- The newest app therefore leads both the homepage grid and the Projects list, and the array reads newest → oldest.
- Do not introduce a sort field to express this. The array order is the single mechanism; adding a second one guarantees the two drift apart.

## One shared privacy policy + apps pages list every released app (IMPORTANT)

- The studio privacy policy `/:locale/privacy` (`src/pages/PrivacyPage.vue`, `privacy.*` keys) is the single policy shared by ALL apps: phone apps, games, tools and Wear OS watch faces. External URL: https://zorya-tech-studio.github.io/en/privacy
- When adding an app, UPDATE this policy (scope, data, third-party services, "Last updated" date) instead of creating a new general policy. Never duplicate it. Existing per-app pages (`/:locale/<app>/privacy-policy`) are app-specific supplements that are already referenced from Play Console; keep them, but a new app that collects nothing special uses the shared URL.
- Wear OS watch faces always use the shared URL, never a per-face page. Their privacy, support and terms live in `/:locale/privacy#watch-faces` and `/:locale/watch-faces` (`#support`, `#terms`).
- Apps pages list every released app: phone apps in `src/data/apps.js` (Projects page), watch faces in `src/data/watchfaces.js` (`/:locale/watch-faces`, newest first). Add the entry when the app goes live on Google Play.
- `/:locale/watch-faces` shows an "in development" message only while `watchFaces` is empty; it is a page-level message, not an app status badge, so it does not conflict with the single-wording badge rule above. Do not use brand names (other than Google Play / Wear OS) on that page.

## App legal URLs — one structure for every app (IMPORTANT)

- Every app: `/:locale/<slug>/privacy-policy` (per-app page) and `/:locale/<slug>/terms-of-use` (universal Terms, `src/pages/AppTermsPage.vue`, text in `src/data/appTerms.js`). Watch faces: `/:locale/<slug>/terms-of-use` + the shared `/:locale/privacy#watch-faces`.
- Terms routes are generated in `router.js` from `src/data/termsRoutes.js` for every slug in `apps.js` and `watchfaces.js`. Never add a per-app Terms page or a hand-written terms route. Old URLs (`/<slug>/terms`, `/<slug>/offer`, `/terms/<slug>`) redirect to `terms-of-use` and are prerendered, so links already in Play Console keep working.
- The shared header (`src/components/LegalTabs.vue`, mounted in `App.vue`) shows app icon + name, then the Privacy | Terms tabs, on any route with `meta.app`. A new app's privacy route must set `meta: { app: '<slug>' }`.
- If a new app belongs to a risk group (health, electrical, vehicles…), add its slug to `PROFILES` in `appTerms.js`.

## Adding a new app — checklist (IMPORTANT)

Every app must look and work the same: card with Privacy · Terms links, `/:locale/<slug>/privacy-policy` + `/:locale/<slug>/terms-of-use`, the shared header (icon, name, Privacy | Terms tabs). Copy an existing recent app (e.g. `survival-guide`) and follow these steps; `npm run check` enforces most of them.

1. **Registry** — add the entry at the TOP of `src/data/apps.js`: `slug` (kebab-case, same as the folder), `nameKey`, `subtitleKey`, `descKey`, `platform`, `status: 'released'`, an existing `category`, `tags`, `icon: '/apps/<slug>/icon.png'`, `privacyRoute: (locale) => \`/${locale}/<slug>/privacy-policy\``, `offerRoute: (locale) => \`/${locale}/<slug>/terms-of-use\``.
2. **Icons** — `public/apps/<slug>/icon.png` and `public/apps/<slug>/icon-128.webp`.
3. **Texts** — in BOTH `uk.json` and `en.json` under one namespace (`<camelName>`): `name`, `subtitle`, `desc_short`, and `privacy.*` (title, updated, intro, sections…). Escape `@` as `{'@'}`; no bare `|` or braces.
4. **Privacy page** — `src/pages/apps/<slug>/<Name>PrivacyPage.vue` (copy one; root `<div class="privacy-page">` with the usual breadcrumbs/page-header/app-label — the shared header hides them). In `router.js` add `path: '/:locale/<slug>/privacy-policy'` with `meta: { titleKey: '<camelName>.privacy.title', app: '<slug>' }` and the short redirect `path: '/<slug>/privacy-policy'`. `meta.app` is what shows the Privacy | Terms header.
5. **Terms** — nothing to create: `/:locale/<slug>/terms-of-use` and its old-style aliases are generated from `apps.js`. Never add a per-app Terms page or route. If the app has a risk (health, physical activity, electrical, construction/chemicals, money, vehicles, emergencies, animals, religion, esoteric) add its slug to the matching `PROFILES` list in `src/data/appTerms.js`. App-specific points (what it does, ads, purchases, accuracy, age) go to `<camelName>.terms.<id>_title` / `<id>_text` in both locales and are listed under the slug in `src/data/appTermsExtras.js`.
6. **Shared privacy policy** — update `/:locale/privacy` (scope, third-party services, "Last updated") as described below.
7. **Verify** — `npm test` (lint, build, `check`, `check:urls`). Then give Play Console the locale-prefixed URLs: `https://zorya-tech-studio.github.io/en/<slug>/privacy-policy` and `https://zorya-tech-studio.github.io/en/<slug>/terms-of-use`.

New watch face: add it to the top of `src/data/watchfaces.js` (slug, name, image, desc uk/en, playUrl) — its Terms page `/:locale/<slug>/terms-of-use` is generated, privacy is the shared `/:locale/privacy#watch-faces`.

## Tests before push (IMPORTANT)

Run `npm test` locally before every push to `main` (a push to `main` deploys to production). It runs: `npm run lint` → `npm run build` → `npm run check` → `npm run check:urls`. The husky `pre-push` hook runs it automatically when the push targets `main` and aborts the push on failure. Never skip it with `--no-verify` unless the user explicitly asks.

- `npm run check` (`scripts/check-site.mjs`, static, ~2 s; also runs in the GitHub Actions deploy, which stops on failure): compiles every i18n string with the real vue-i18n compiler (catches `@`, `|`, braces that blank the prod site), uk/en key parity, `app_status` = only `released`, every app `status: 'released'`, category in `CATEGORY_ORDER` + `projects.filter.*` in both locales, name/desc/subtitle keys in both locales, icon + `icon-128.webp` exist, privacy route exists with `meta.app`, `offerRoute` = `/<slug>/terms-of-use`, watch face image/playUrl, Terms text for every app in both languages, `appTermsExtras.js` keys exist, a `dist/<path>/index.html` for every URL, sitemap has every Terms page and no redirect URLs.
- `npm run check:urls` (`scripts/check-urls.mjs`, browser, ~1 min): serves `dist/` exactly like GitHub Pages (real files only, `404.html` with status 404) and opens every URL in headless Chromium: HTTP 200, no JS errors, real `<h1>`, not the home page or "not found", old Terms URLs end on `/<slug>/terms-of-use`, app legal pages show the Privacy | Terms header. `vite dev` / `vite preview` cannot be used for this: they answer every path with index.html and hide 404s.
- If a check fails, fix the cause; do not weaken or delete the check. When you add a new kind of page or rule, add a check for it in one of these scripts.

## Old URLs must keep working (IMPORTANT)

`scripts/legacy-urls.json` lists every URL the site served before the 2026-11-08 URL unification (453 paths: privacy pages, old `/terms`, `/offer`, `/terms-of-use`, short and underscore aliases such as `/kalimba_tuner/privacy-policy`). They may still be referenced from Play Console, AdMob, store listings or inside the apps, so both checks test every one of them for HTTP 200 and a real page.

- Never remove a route, redirect or alias that serves one of these URLs. If a page moves, add a redirect and keep the old path.
- `scripts/spa-routes.js` prerenders a file for every literal path in `router.js` (with and without locale) and for every generated Terms URL, so a redirect route in `router.js` is enough to get HTTP 200.
- Remove an entry from `legacy-urls.json` only when the user confirms that URL is no longer used anywhere.

## App categories

`category` in `src/data/apps.js` drives the filter tabs on the Projects page. The tab list is built dynamically from the categories actually present, so adding a category means three things and no more:

1. Set `category: '<key>'` on the app entries.
2. Add the key to `CATEGORY_ORDER` in `src/pages/ProjectsPage.vue` (display order; a key missing here never renders a tab).
3. Add `projects.filter.<key>` to **both** `uk.json` and `en.json`.

Current keys: `games`, `quiz`, `tools`, `calculators`, `reference`, `pets`, `lifestyle`, `esoteric`. Keep buckets meaningful — a category with a single app is noise; fold it into a neighbour instead.

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
