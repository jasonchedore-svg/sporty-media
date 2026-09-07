# Sporty Media

Educational sports betting analytics for an **Ontario, Canada** audience. We explain markets — closing line value (CLV), juice, line moves, and board notes.

**Not a tipster service.** No picks, locks, or guaranteed winners. Sports betting involves a risk of loss. You must be **19 or older** to bet in Ontario. Play responsibly ([ConnexOntario](https://www.connexontario.ca/) · 1-866-531-2600).

## Local development

Requires Node.js 22+.

```bash
npm install
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321/sporty-media/`). The `/sporty-media/` prefix matches GitHub Pages project hosting.

```bash
npm run build
npm run preview
```

`build` writes a static site to `dist/`. That folder is what GitHub Pages serves.

## GitHub Pages deploy

This repo is set up as a **project site**: `https://jasonchedore-svg.github.io/sporty-media/`.

1. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Merge to `main` (or run the **Deploy to GitHub Pages** workflow manually).
3. The workflow in `.github/workflows/deploy.yml` builds with `npm run build` and uploads `dist/`.

### If you use a custom domain or a user site (`username.github.io`)

Edit `src/config.ts` and `astro.config.mjs` (they read from that config):

- `siteUrl` — origin, no trailing slash (e.g. `https://sportymedia.example`).
- `basePath` — `"/"` for a user/org site or custom domain at root; `"/sporty-media"` for this project site.

Then rebuild. Internal links use `import.meta.env.BASE_URL`.

### Substack

Set `substackUrl` in `src/config.ts` (currently `TODO_SUBSTACK_URL`). The newsletter CTA on every layout reads that value.

## Content

Markdown lives in `src/content/posts/`. Front matter:

```yaml
title: "..."
description: "..."
pubDate: 2026-09-01
category: Education   # Education | Board notes | Style
tags: [CLV]
heroKicker: "Lesson · CLV"  # optional
```

Shipped posts:

- [What is CLV?](src/content/posts/what-is-clv.md)
- [How juice works](src/content/posts/how-juice-works.md)
- [Reading a line move](src/content/posts/reading-a-line-move.md)
- [Board notes template (MLB and NFL)](src/content/posts/board-notes-mlb-nfl-template.md)

House voice: [src/pages/style-guide.astro](src/pages/style-guide.astro). RSS: `/rss.xml`.

Every page includes the Ontario gambling disclaimer (risk of loss, 19+, responsible play).

## Stack

Static [Astro](https://astro.build) site. No server. Markdown in-repo. Mobile-first layout. GitHub Actions → GitHub Pages.
