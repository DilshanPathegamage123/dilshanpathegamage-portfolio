# Dilshan Pathegamage — Portfolio

Personal portfolio site, rebuilt as a React + TypeScript + Vite single-page
app. Replaces the previous static HTML/Bootstrap/jQuery template.

Live: https://dilshanpathegamage-portfolio.vercel.app

## Stack

- **React 18 + TypeScript** — components and content are fully typed (see `src/types.ts`)
- **Vite** — dev server and static build, deployed to Vercel as a static site (free tier)
- **Plain CSS** with design tokens (`src/styles/global.css`) — no UI framework; light/dark
  theme is implemented with CSS custom properties swapped via a `data-theme` attribute
- **EmailJS** (`@emailjs/browser`) — the contact form sends mail client-side, no backend needed
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

All page content — experience bullets, skills, project write-ups, achievements — lives in
`src/data/*.ts`, not scattered across JSX. Update content there rather than in components.

## Image pipeline (why the old site was slow)

The previous site linked directly to raw, unresized photos and screenshots — the `images/`
folder alone was **~150 MB**, some single PNGs were 10–19 MB, and the browser downloaded all
of it on first load regardless of what was actually visible.

`scripts/optimize-images.mjs` resizes and re-encodes every photo/screenshot used on the site
to WebP (quality ~74–82, capped at 900–1400px depending on where it's used) and writes the
result into `src/assets/images/`, which is what the app actually imports. That brought the
total image weight shipped to the browser down to **~1.7 MB across the entire site**.

On top of that:

- The hero photo is the only image marked `fetchPriority="high"`; everything else uses
  `loading="lazy"`, so a cover thumbnail only downloads once it scrolls near the viewport.
- Project gallery images and demo videos only exist in the DOM once a project card is
  clicked open — they are never fetched on initial page load.
- Demo videos (`public/videos/`) couldn't be re-encoded in this environment (no `ffmpeg`
  available), so they're served as-is with `preload="none"` inside the project modal. If you
  want to shrink them further, re-encode with e.g. `ffmpeg -i in.mp4 -vcodec libx264 -crf 28
  -preset slow out.mp4` and drop the result back into `public/videos/`.

If you add new photos to `my_images/`, new project screenshots to `images/`, or new
chart/report images, add an entry to the `manifest` array in
`scripts/optimize-images.mjs` and re-run `npm run optimize-images`.

## Content notes / things to finish

- **Final Year Research** and **Expert System — University Course Selection Advisor** are on
  the site with real descriptions from the CV, but no screenshots and no confirmed repo link
  yet (they currently link to the GitHub profile as a placeholder). Update
  `src/data/projects.ts` (`final-year-research` and `expert-system` entries) once those are
  finalized — add a `cover`/`gallery` and swap the link.
- The **Tourist Arrivals ML** project's charts come from `ml_project_images/` at the repo
  root; the GitHub link is also a profile-page placeholder pending the real repo URL.
- Source photo/screenshot folders (`images/`, `my_images/`, `ml_project_images/`, `Videos/`)
  are kept in the repo as the *source* for the optimization script — they are not imported by
  the app and are not part of the deployed `dist/` build, so they don't affect site
  performance, but they do add to clone size. They can be moved out of git history later if
  that becomes a problem; that wasn't done here to avoid touching your original files.

## Deploying

This branch (`redesign-slate-teal`) is a from-scratch rewrite and has **not** been merged to
`main`. To preview it on Vercel before merging:

1. Push the branch: `git push -u origin redesign-slate-teal`
2. If the Vercel project is connected to this GitHub repo, pushing the branch creates a
   preview deployment automatically — check the Vercel dashboard or the PR checks for the URL.
3. Once you're happy with the preview, merge `redesign-slate-teal` into `main` — the existing
   Vercel production deployment (same URL) will pick it up.

Vercel project settings should have the framework preset set to **Vite** (or rely on
`vercel.json`, which pins `buildCommand`/`outputDirectory` explicitly regardless of the
dashboard preset).

## Contact form

The contact form uses the same EmailJS service/template that was already configured for this
site (`src/lib/emailjs.ts`) — no new account setup needed. EmailJS's public key is meant to be
exposed client-side; the actual send is authorized server-side by EmailJS against the
service/template pair.
