import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/** Required by `output: "export"`: emit this route as a static file. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
