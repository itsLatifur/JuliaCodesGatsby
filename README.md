### Latifur Rahman — Portfolio

Template by <a href="https://www.juliacodes.com">Julia</a>
Customized by <a href="https://www.latifur.dev">Latifur</a>

## Development

- Node 18+ recommended.
- Install deps: `npm install`
- Run dev server: `npm start`
- Build production: `npm run build`

## Tech stack

- React 18 (Create React App)
- React Router v6
- styled-components + Tailwind CSS (utility classes via `src/index.css`)

## SEO & Analytics

- SEO meta, OpenGraph, Twitter cards in `public/index.html`
- JSON-LD structured data included
- Robots and sitemap present in `/public`
- Google Analytics gtag included — replace the ID with your own in `public/index.html`

## Tailwind setup

- Ensure `tailwind.config.js` has correct content globs:
  - `./public/index.html`, `./src/**/*.{js,jsx,ts,tsx}`

## Deploy

1. Build: `npm run build`
2. Deploy the `build/` folder to your host (Netlify, Vercel, GitHub Pages, etc.)
3. If using Netlify, keep `_redirects` file at the site root for SPA routing
4. Set proper domain/canonical URL (currently https://www.latifur.dev)

### Netlify

- Drag-and-drop the `build/` folder or connect repo
- Ensure `_redirects` contains: `/*  /index.html  200`

### Vercel

- Import the repo
- Framework preset: Create React App

## PWA basics

- `public/manifest.json` provided with name/icons/colors
- Add service worker (optional) if you need offline support

## Notes

- Update contact email/links in `src/data.js`
- Keep resume file at `public/Latifur_Rahman_Resume.pdf` in sync
