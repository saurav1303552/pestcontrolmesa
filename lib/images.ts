/**
 * Photography used on the homepage.
 *
 * `src` is either a file in /public/images or a full https URL. While it is
 * null the slot renders nothing at all — the page keeps its current layout, so
 * a missing asset can never ship as a broken image.
 *
 * docs/images.md lists the filename, aspect ratio and subject each slot wants.
 *
 * Alt text is written for partial-match relevance to the focus keyword
 * ("pest control mesa az prices") rather than exact-match stuffing: each one
 * describes what is actually in the frame and carries one or two of the
 * keyword's terms naturally.
 */
export type SitePhoto = {
  src: string | null;
  alt: string;
  /** Intrinsic pixel size of the source file — required by next/image. */
  width: number;
  height: number;
  /** Shown as a small caption under the image. */
  caption?: string;
  /** Pexels licence needs no attribution, but crediting is good practice. */
  credit?: { photographer: string; url: string };
  /** Set on the first image in the viewport so it is not lazy-loaded. */
  priority?: boolean;
};

export const PHOTOS: Record<string, SitePhoto> = {
  /**
   * Branded price card, built from the site's own type and palette rather
   * than stock photography, so the focus keyword is legible in the image
   * itself. Rendered from the banner source and committed as WebP.
   */
  priceCard: {
    src: "/images/mesa-pest-control-prices.webp",
    alt: "Pest Control Mesa AZ Prices — average costs for one-time treatment, monthly plans, scorpion control and termite treatment in Mesa, Arizona",
    width: 1600,
    height: 900,
    caption:
      "Typical Mesa price ranges at a glance. The full table below breaks all 253 services down by pest and frequency.",
  },

  /** Sits under the specialty-pest intro. Wants: bark scorpion or termite damage close-up. */
  scorpionInspection: {
    src: null,
    alt: "Arizona bark scorpion on a block wall, the desert pest behind most Mesa scorpion control pricing",
    width: 1600,
    height: 900,
    caption:
      "Bark scorpions hide in block walls and weep holes, which is why effective control adds sealing labor to the price.",
  },

  /** Sits in the pricing-approach section. Wants: inspection of a door sweep / weep hole / entry point. */
  entryPointInspection: {
    src: null,
    alt: "Technician inspecting a door seal and weep holes to quote pest control pricing for a Mesa house",
    width: 1200,
    height: 900,
    caption: "Every quote starts at the entry points, not at a price sheet.",
  },
};
