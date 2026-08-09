# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Production build
npm run preview   # Preview production build locally
npm run format    # Format with Prettier
npm run eslint    # Run ESLint checks
```

Node.js >=22 <23 is required.

## Architecture

This is a personal portfolio and blog site built with **Astro 5** (static site generation), **TailwindCSS 3**, and **TypeScript**.

**Routing**: File-based via `src/pages/`. Blog posts are dynamically routed through `src/pages/blog/[...slug].astro` using Astro Content Collections — Markdown files in `src/content/blog/` are auto-discovered.

**Data**: Content lives in `src/data/`, split by whether it is shared with the GitHub profile README:

- `profile.ts` — socials, projects, and skills, **fetched at build time** from `data/profile.json` in [bkeys818/bkeys818](https://github.com/bkeys818/bkeys818), which is the source of truth. Editing it there re-renders that README and pings a Netlify build hook to rebuild this site. Because the module fetches, it is build-time only — never import it from a client `<script>`.
- `site.json` — content this site owns alone: nav menu, typing-animation titles, and the about copy.
- `projects.json` — the richer cards for `/projects`, separate from the shared project list.

**Layouts**: `src/layouts/Layout.astro` wraps every page with the header and footer. `BlogPost.astro` extends it for blog content.

**Interactivity**: Minimal JavaScript. The mobile menu uses a native `<dialog>` element; the soft skills expand/collapse uses a CSS checkbox hack — no JS frameworks for UI state.

**TypeScript path aliases** (defined in `tsconfig.json`):

- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@styles/*` → `src/styles/*`
- `@data/*` → `src/data/*`

**Code style**: Prettier enforces no semicolons, single quotes, 2-space indent, trailing commas, and sorted Tailwind classes. ESLint uses the TypeScript, Astro, and JSX A11y plugins.
