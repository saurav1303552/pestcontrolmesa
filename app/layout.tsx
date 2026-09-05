import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

/**
 * Self-hosted at build time by next/font, so there is no runtime request to
 * Google and no flash of unstyled text. `display: swap` plus the adjusted
 * fallback metrics keep CLS at zero while the face loads.
 */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

const TITLE =
  "Pest Control Mesa AZ Prices: Termite Control, Bed Bugs & Scorpion Costs";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: "%s | Pest Control Mesa AZ Prices",
  },
  description: SITE.description,
  keywords: [
    "pest control mesa az prices",
    "pest control prices mesa az",
    "pest control cost mesa arizona",
    "termite treatment cost mesa az",
    "bed bug treatment cost mesa",
    "scorpion control mesa az price",
    "rodent control cost mesa",
    "monthly pest control mesa az",
    "exterminator prices mesa az",
    "free pest inspection mesa",
  ],
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  category: "Pest Control",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: TITLE,
    description: SITE.description,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Pest Control Mesa AZ Prices — published price ranges for 250+ services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE.description,
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "US-AZ",
    "geo.placename": "Mesa, Arizona",
    "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1f1a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://www.google.com" />
      </head>
      <body className="min-h-screen antialiased">
        <a
          href="#price-finder"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to the price list
        </a>
        {children}
      </body>
    </html>
  );
}
