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
