# Homepage photography

Three slots are wired up in `lib/images.ts`. Each renders nothing until its
`src` is set, so the site never shows a broken image.

## To fill a slot

1. Download the photo from Pexels (the "Free Download" button — pick the
   **Large** size, roughly 1600px wide).
2. Save it here with the filename below.
3. Set `src` for that slot in `lib/images.ts` and, if you want to credit the
   photographer, fill in `credit`.

| Slot in `lib/images.ts` | Filename to save | Aspect | What the frame should show |
| --- | --- | --- | --- |
| `exteriorTreatment` | `exterior-treatment.jpg` | 16:9 (1600×900) | A technician spraying a perimeter barrier along a house exterior |
| `scorpionInspection` | `scorpion-inspection.jpg` | 16:9 (1600×900) | A bark scorpion on stone/block, or visible termite damage in wood |
| `entryPointInspection` | `entry-point-inspection.jpg` | 4:3 (1200×900) | A technician inspecting a door seal, weep hole or foundation gap |

Example after saving `exterior-treatment.jpg`:

```ts
exteriorTreatment: {
  src: "/images/exterior-treatment.jpg",
  priority: true,          // only if the image is above the fold
  credit: { photographer: "Name", url: "https://www.pexels.com/@handle/" },
  // alt, width, height and caption are already set
},
```

## Notes

- Crop to the stated aspect ratio before saving, so `width`/`height` in
  `lib/images.ts` match the file and the browser reserves the right space
  (no layout shift, good CLS).
- Keep each file under ~300 KB. `next/image` re-encodes to WebP/AVIF on
  request, but a smaller source still builds and deploys faster.
- Alt text is already written for partial-match keyword relevance — edit it
  only if the photo you choose shows something different.
- The Pexels licence allows commercial use with no attribution required, but
  the `credit` field is there if you want to include it.
