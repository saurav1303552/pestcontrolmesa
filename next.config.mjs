/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // Self-hosted files in /public/images need no entry here. This only
    // matters if a slot in lib/images.ts points at a Pexels CDN URL instead.
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com", pathname: "/photos/**" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
