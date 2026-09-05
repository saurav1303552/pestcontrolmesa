/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Cloudflare Pages serves static files, and this site has no API routes,
   * dynamic routes or server actions — so a full static export is the right
   * target. `next build` writes the deployable site to ./out.
   */
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    /**
     * The Next image optimizer needs a Node server, which a static export does
     * not have. Files in /public/images are served as-is, so size and compress
     * them before committing (see public/images/README.md). Cloudflare Polish
     * can re-encode them at the edge if you enable it on the zone.
     */
    unoptimized: true,
  },
};

export default nextConfig;
