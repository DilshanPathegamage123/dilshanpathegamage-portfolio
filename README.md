# Dilshan Pathegamage — Portfolio

Personal portfolio site, built as a React + TypeScript + Vite single-page
app. 
Live: https://dilshanpathegamage-portfolio.vercel.app

## Stack

- **React 18 + TypeScript** — components and content are fully typed (see `src/types.ts`)
- **Vite** — dev server and static build, deployed to Vercel as a static site
- **Plain CSS** with design tokens (`src/styles/global.css`) — no UI framework; light/dark
  theme is implemented with CSS custom properties swapped via a `data-theme` attribute
- **EmailJS** (`@emailjs/browser`) — the contact form sends mail client-side.
- **sharp** (dev-only) — one-off image optimization script, see below

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-checks then builds to dist/
npm run preview   # serve the production build locally
```

## Project structure

```
src/
  data/            content as typed data — profile, experience, skills, projects, achievements
  components/      one component per section, plus ProjectCard/ProjectModal and shared bits
  hooks/useTheme.ts     light/dark theme state, persisted to localStorage
  lib/emailjs.ts        EmailJS service/template/public key
  styles/global.css     design tokens + all styling
  assets/images/        optimized WebP images actually shipped to the browser
public/
  videos/          project demo videos (served as static files, loaded on demand)
  dilshan-pathegamage-cv.pdf   CV download served from the About section
scripts/optimize-images.mjs   re-run this after adding/changing source photos
```
