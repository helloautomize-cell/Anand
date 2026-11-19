# Anand Heart Center Bhopal

Website for Dr. Anand Yadav, cardiothoracic and vascular surgeon in Janki
Nagar, Bhopal. Booking is WhatsApp only; there is no backend, database or
email service.

## Stack

Next.js 16 (App Router, fully static), React 19, TypeScript, Tailwind CSS 4.
Site facts come from `data/site.json`; page copy and FAQs from
`content/*.md`.

## Commands

```bash
npm install          # install dependencies
npm run dev          # local dev server
npm run build        # production build (25 static routes)
npm run start        # serve the production build on :3000
npm run images       # regenerate public/img from assets/images
npm run lint         # eslint
npm run launch-check # launch gate: fails on [CONFIRM] markers / forbidden claims
npm run seo:check    # per-route SEO basics + JSON-LD + crawl text (needs :3000)
```

## Layout

```
app/                 routes, layout, sitemap, robots, llms.txt, styles
components/          shared chrome, page bodies (components/pages),
                     per-page client scripts (components/fx)
lib/                 site facts, WhatsApp links, content loader, schema, meta
content/             one Markdown file per route (frontmatter + copy)
data/                site.json, pages.json, treatments.json
assets/images/       master web images + alt-text.json (npm run images source)
assets/originals/    untouched full-resolution photo originals (not used by the build)
public/img/          generated AVIF/WebP, logos, og-card
scripts/             image processing, launch/SEO checks
```

## Conventions

- WhatsApp links only via `waLink()` / `WA_HOME` from `lib/whatsapp` —
  never hard-code the number.
- Facts (phones, hours, address) only via `lib/site` — single source is
  `data/site.json`.
- Unverified facts are `[CONFIRM]` markers: they render as yellow chips in
  development and are hidden in production; `npm run launch-check` fails
  while unresolved `[CONFIRM]` blockers remain.
- No em/en dashes, no superlatives, rankings, counts, testimonials or
  outcome claims — enforced by `launch-check` + `crawl-text-check`.
- Analytics (GA4) loads only after cookie consent; set `NEXT_PUBLIC_GA_ID`.
- Previews stay `noindex`; Vercel production indexes automatically via
  `VERCEL_ENV`, or force with `NEXT_PUBLIC_ALLOW_INDEXING=true`.

## Do not launch until

The `[CONFIRM]` items are resolved: doctor registration number, hospital
affiliation wording, canonical host (www vs apex), and legal review.
