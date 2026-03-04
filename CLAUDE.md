# Zorya Tech Studio — Website

## Project
Landing page for Zorya Tech Studio — independent mobile app studio.
Deployed to GitHub Pages at https://zorya-tech-studio.github.io/

## Tech Stack
- Vite + Vue 3 (Composition API, `<script setup>`)
- Pure CSS — no UI frameworks (no Tailwind, no Bootstrap)
- Google Fonts: Cormorant Garamond (headings, italic) + Rajdhani (UI text)

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build locally

## Structure
```
src/
├── App.vue                ← root component, imports all sections
├── main.js                ← app entry point
├── style.css              ← global CSS variables, resets, fonts
└── components/
    ├── NavBar.vue          ← fixed nav, blur on scroll
    ├── HeroSection.vue     ← canvas starfield + title
    ├── AboutSection.vue    ← studio description
    ├── AppsSection.vue     ← app cards grid
    └── ContactSection.vue  ← email + github links
```

## Design Tokens (CSS Variables)
All colors and fonts are defined in `src/style.css` via `:root` CSS variables.
- Background: `--bg: #07090e`
- Gold accent: `--gold: #e8b84b`
- Text: `--text: #e0ddd5`, dim: `--text-dim: #8a8780`

## Deployment
GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers on push to `main`.
Uses `actions/deploy-pages` to deploy `dist/` to GitHub Pages.

## Conventions
- Ukrainian language for UI text
- Mobile-first responsive design
- Minimal animations — only starfield canvas and subtle hover transitions
- `vite.config.js` base: `'/'` (org repo, served from root)
