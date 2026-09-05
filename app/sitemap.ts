import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/** Required by `output: "export"`: emit this route as a static file. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
