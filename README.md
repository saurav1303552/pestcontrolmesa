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
npm run dev      # http://localhost:3000
npm run build    # static prerender
npm run start    # serve the production build
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
| `components/PriceSearch.tsx` | The search widget and price table |
| `components/Schema.tsx` | JSON-LD graph (LocalBusiness, WebSite, WebPage, Breadcrumb, FAQPage) |

## The price finder

`components/PriceSearch.tsx` renders every one of the 254 rows into the server HTML, so the
full price list is crawlable whether or not JavaScript runs. On top of that it adds:

- a large search field that asks *"What service are you looking for?"* and filters the table live
- a typeahead listbox with full keyboard support (arrow keys, Enter, Escape)
- quick-pick chips and a category select
- token scoring with plural stripping, stop words and a synonym map, so `roaches in my kitchen`,
  `how much for rats` and `termight` all resolve to the right rows
- a mobile layout that swaps the table for compact cards, keeps the search bar pinned under the
  header, collapses the chip rail once pinned, and scrolls to the results after a search
- a no-results state that falls back to a call CTA

## Editing prices

All pricing lives in `PRICES` in `lib/pricing.ts`. Each row is:

```ts
{ service: "Scorpion control", price: "$100–$400", category: "scorpions", aliases: ["scorpions"] }
```

`aliases` are extra search terms only — they are never displayed. Categories are declared in
`CATEGORIES` in the same file; adding a row to a new category requires adding that category first.
The JSON-LD offer catalog and the "N services priced" counters derive from this array, so no other
file needs touching.

## Business details

NAP lives in `lib/site.ts` and is rendered in the header strip, hero, contact section, footer and
JSON-LD from that one object. Update it there and every surface follows.
