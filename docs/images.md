# Homepage imagery

Three slots are declared in `lib/images.ts` and rendered by
`components/SectionPhoto.tsx`. A slot renders **nothing** while its `src` is
`null`, so an unfilled slot leaves the layout untouched and a missing file can
never ship as a broken image.

| Slot | Status | What it is |
| --- | --- | --- |
| `priceCard` | **filled** | Branded price card built from the site's own type and palette — see `scripts/price-card.html` |
| `scorpionInspection` | empty | Photo wanted |
| `entryPointInspection` | empty | Photo wanted |

## Filling the two photo slots

1. Download the photo (Pexels, Unsplash — anything licensed for commercial use).
2. Crop to the aspect ratio below and save it into `public/images/`.
3. Set `src` in `lib/images.ts`, and fill in `credit` if you want to name the
   photographer.

| Slot | Save as | Aspect | What the frame should show |
| --- | --- | --- | --- |
| `scorpionInspection` | `scorpion-inspection.webp` | 16:9 (1600×900) | A bark scorpion on stone or block wall, or visible termite damage in wood |
| `entryPointInspection` | `entry-point-inspection.webp` | 4:3 (1200×900) | A technician inspecting a door seal, weep hole or foundation gap |

Example once the file is in place:

```ts
scorpionInspection: {
  src: "/images/scorpion-inspection.webp",
  credit: { photographer: "Name", url: "https://www.pexels.com/@handle/" },
  // alt, width, height and caption are already written
},
```

## Notes

- **Compress before committing.** `next.config.mjs` sets `images.unoptimized`
  because a static export has no image optimizer, so the file you commit is the
  file visitors download. Aim under ~150 KB; WebP at quality 86 is a good
  default (`convert in.jpg -quality 86 out.webp`).
- **Match the dimensions.** `width`/`height` in `lib/images.ts` must match the
  real file so the browser reserves the right space and the page does not shift
  while loading.
- **Alt text is already written** for partial-match relevance to the focus
  keyword. Only edit it if the photo you choose shows something different —
  it should describe the actual frame, not repeat the keyword.
