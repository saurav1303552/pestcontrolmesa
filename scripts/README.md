# scripts/

## price-card.html

Source for `public/images/mesa-pest-control-prices.webp` — the branded price
card that leads the cost-factors section, and for `public/og.jpg`, the social
preview image.

It is plain HTML/CSS using the site's own palette and Poppins, so the card
stays in sync with the design by editing this file rather than a binary.

### Re-rendering after an edit

Needs a headless Chromium and ImageMagick (`convert`).

```bash
# 1. Screenshot at 1600x900
node -e '
const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 1600, height: 900 } })).newPage();
  await p.goto("file://" + process.cwd() + "/scripts/price-card.html", { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: "/tmp/price-card.png" });
  await b.close();
})();'

# 2. On-page image (WebP, ~40 KB)
convert /tmp/price-card.png -quality 86 -define webp:method=6 \
  public/images/mesa-pest-control-prices.webp

# 3. Social image (JPEG at 1200x630 — scrapers do not render SVG or WebP reliably)
convert /tmp/price-card.png -resize 1200x675 -gravity center -crop 1200x630+0+0 \
  +repage -quality 88 -strip public/og.jpg
```

If you change the card's dimensions, update `width`/`height` for the
`priceCard` slot in `lib/images.ts` to match, or the browser will reserve the
wrong space and the page will shift as it loads.
