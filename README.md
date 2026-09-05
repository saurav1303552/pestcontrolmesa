# pestcontrolmesaazprices.com

SEO-optimized single-page Next.js site for **Pest Control Mesa AZ Prices**, built around a
searchable price table of 254 pest control services in Mesa, Arizona.

## Stack

- Next.js 15 (App Router, React 19, TypeScript)
- Tailwind CSS v4
- No runtime dependencies beyond React/Next — fully static, prerendered at build time

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export -> ./out
npm run preview   # serve ./out locally
```

## Project layout

| Path | Purpose |
| --- | --- |
| `app/layout.tsx` | Metadata, Open Graph, Twitter card, geo tags, favicon, manifest |
| `app/page.tsx` | Homepage composition |
| `app/globals.css` | Design tokens (`@theme`) plus base/component layers |
| `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` | Generated `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` |
| `lib/site.ts` | Single source of truth for NAP, hours, geo and service areas |
| `lib/pricing.ts` | The 254 price rows, 22 categories and search synonyms |
| `components/PriceTable.tsx` | The grouped price table |
| `components/Schema.tsx` | JSON-LD graph (LocalBusiness, WebSite, WebPage, Breadcrumb, FAQPage) |
| `lib/images.ts` | The three photo slots — see `public/images/README.md` |

## The price table

`components/PriceTable.tsx` is a server component — it ships no JavaScript. All 254 rows render
into the HTML grouped under their 22 categories, so the whole price list is crawlable and readable
with scripting off. A "jump to a category" nav sits above the table.

Mobile and desktop render separate markup (stacked cards vs. a table), so each has its own anchor
ids — `#m-prices-<slug>` and `#d-prices-<slug>`. Do not collapse them to one shared id: the
browser resolves to the first match, which is the copy hidden at that breakpoint. Anchor offset
comes from `scroll-padding-top` on `html`; adding `scroll-margin` to the targets stacks with it.

## Editing prices

All pricing lives in `PRICES` in `lib/pricing.ts`. Each row is:

```ts
{ service: "Scorpion control", price: "$100–$400", category: "scorpions", aliases: ["scorpions"] }
```

`aliases` are extra search terms only — they are never displayed. Categories are declared in
`CATEGORIES` in the same file; adding a row to a new category requires adding that category first.
The JSON-LD offer catalog and the "N services priced" counters derive from this array, so no other
file needs touching.

## Photography

Three photo slots are declared in `lib/images.ts` and rendered by
`components/SectionPhoto.tsx`. Each slot renders **nothing** while its `src` is
`null`, so an unfilled slot leaves the layout untouched and a missing file can
never ship as a broken image. Alt text is already written for partial-match
keyword relevance. `public/images/README.md` lists the filename, aspect ratio
and subject matter each slot expects.

## Deploying to Cloudflare Pages

`next.config.mjs` sets `output: "export"`, so `npm run build` writes a plain static site to
`./out` — no adapter, no `@cloudflare/next-on-pages`, no Workers runtime. The site has no API
routes, dynamic routes or server actions, so nothing needs a server.

**Connect the repo** at Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | `22` (set env var `NODE_VERSION=22`) |

Or deploy from your machine without Git:

```bash
npm run build
npx wrangler pages deploy out --project-name=pestcontrolmesaazprices
```

`public/_headers` is copied into the export and applies Cloudflare's cache and security headers —
immutable caching for hashed assets, HSTS, and the usual `nosniff` / frame / referrer rules.

**Custom domain**: Pages project → Custom domains → add `pestcontrolmesaazprices.com` and `www`.
If the domain is on Cloudflare DNS, the records are created for you; otherwise point `CNAME www`
at `<project>.pages.dev` and use a `CNAME`/ALIAS at the apex.

Two caveats that come with a static export:

- `next/image` optimization is off (`images.unoptimized`), so commit photos at the size they are
  displayed. Enable Cloudflare Polish on the zone if you want edge re-encoding.
- After deploying, update `SITE.url` in `lib/site.ts` if the canonical host ever changes — it feeds
  the canonical tag, sitemap, robots and JSON-LD.

## Business details

NAP lives in `lib/site.ts` and is rendered in the header strip, hero, contact section, footer and
JSON-LD from that one object. Update it there and every surface follows.
