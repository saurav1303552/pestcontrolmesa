import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/** Required by `output: "export"`: emit this route as a static file. */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Mesa Pest Prices",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fdfbf7",
    theme_color: "#0b1f1a",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
