# United Properties — Whitepaper

The United Properties whitepaper, built with [Docusaurus](https://docusaurus.io/).

United Properties is a protocol for tokenizing real-world real estate, making
property ownership fractional, liquid, and transparent. This repo contains the
whitepaper site.

## Structure

- `docs/` — the whitepaper content (one Markdown file per section)
- `sidebars.js` — section order
- `docusaurus.config.js` — site config, branding, navigation
- `src/` — homepage and React components
- `static/` — images and static assets

The whitepaper is served at `/whitepaper` (e.g. `/whitepaper/abstract`).

## Develop

```bash
npm install      # install dependencies
npm start        # local dev server with hot reload
npm run build    # production build into build/
npm run serve    # preview the production build
```

## Editing the whitepaper

Edit the Markdown files in `docs/`. Sections are ordered in `sidebars.js`.
Placeholders marked `{/* ... */}` indicate content to fill in.

## Deploy

`npm run build` produces a static site in `build/` that can be hosted anywhere
(GitHub Pages, Netlify, Vercel, etc.). Update `url`/`baseUrl` in
`docusaurus.config.js` for your host.
