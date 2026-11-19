# Anand Heart Center Bhopal — build notes

Next.js 16 (App Router, fully static) production site. Facts come from
`data/site.json` (via `lib/site.ts`), words from `content/*.md`.

## Commands

- `npm run dev` / `npm run build` / `npm run start` — standard Next.js
- `npm run images` — regenerate `public/img` from `assets/images`
  (AVIF/WebP 640/1024/1600 + og-card + icon)
- `npm run launch-check` — **launch gate; fails while [CONFIRM] markers or
  forbidden claims remain** (reports file:line)
- `npm run seo:check` — per-route SEO basics + JSON-LD validation + crawl text
  (needs `npm run start` on :3000; BASE env to override)
- `npm test` — Playwright suite (routes, overflow, nested interactives, mega
  menu, mobile menu, composer, map, consent, 404, links, alt text, tap targets)
- `npx prettier --write` / `npx eslint .` — format + lint

## Architecture

- `app/design.css` — the site stylesheet (design tokens, chrome, page styles)
- `components/pages/*.tsx` — static page bodies
- `components/fx/*.tsx` — page interaction scripts wrapped by `lib/fx.ts`
  (AbortController cleanup, rAF/observer/timeout tracking; `@ts-nocheck`
  on purpose — untyped scripts)
- `components/{header,mobile-menu,chrome,nav-fx}.tsx` — shared chrome plus
  keyboard/focus handling in `nav-fx`
- `lib/{site,whatsapp,content,schema,meta}.ts` — typed facts, WhatsApp links,
  Markdown loader, JSON-LD graph, route metadata
- Env: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID` (empty = analytics off),
  `NEXT_PUBLIC_ALLOW_INDEXING` (previews stay noindex; Vercel production
  indexes automatically via VERCEL_ENV)

## Conventions

- `[CONFIRM]`-style uncertainty shows as `.chip` spans (yellow); hidden in
  production builds via `html[data-env="prod"]`
- WhatsApp links: `waLink(message)` / `WA_HOME` from `lib/whatsapp` — never
  hard-code the number in new markup
- Internal links: `next/link`; keep `data-rv`, `data-hdr`, `.ln` markup idioms
- No em/en dashes, no superlatives/testimonials/counts — checked by
  `launch-check` + `crawl-text-check`
- Mega menu is desktop-only (nav hides ≤1100px, `.mtog` takes over)
