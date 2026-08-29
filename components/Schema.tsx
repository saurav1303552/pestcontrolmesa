import { SITE, FULL_ADDRESS } from "@/lib/site";
import { CATEGORIES, PRICES } from "@/lib/pricing";
import { FAQS } from "./Faq";

const BUSINESS_ID = `${SITE.url}/#business`;

/** "$95–$330" -> { low: 95, high: 330 } for structured-data offers. */
function parseRange(price: string) {
  const numbers = price.match(/\d[\d,]*/g);
  if (!numbers?.length) return null;
  const values = numbers.map((n) => Number(n.replace(/,/g, "")));
  return { low: values[0], high: values[values.length - 1] };
}

export default function Schema() {
  const localBusiness = {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": BUSINESS_ID,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    telephone: `+1${SITE.phone}`,
    email: SITE.email,
    description: SITE.description,
    priceRange: "$$",
    image: `${SITE.url}/og.svg`,
    logo: `${SITE.url}/icon.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}`,
    openingHoursSpecification: SITE.openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    areaServed: SITE.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: { "@type": "State", name: SITE.address.stateFull },
    })),
    knowsAbout: CATEGORIES.map((c) => c.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pest Control Mesa AZ Prices",
      itemListElement: CATEGORIES.map((category) => {
        const rows = PRICES.filter((p) => p.category === category.slug);
        const bounds = rows
          .map((r) => parseRange(r.price))
          .filter((r): r is { low: number; high: number } => r !== null);
        const low = Math.min(...bounds.map((b) => b.low));
        const high = Math.max(...bounds.map((b) => b.high));

        return {
          "@type": "Offer",
          name: category.name,
          description: category.blurb,
          itemOffered: {
            "@type": "Service",
            name: category.name,
            serviceType: "Pest Control",
            description: category.blurb,
            areaServed: {
              "@type": "City",
              name: `${SITE.address.city}, ${SITE.address.state}`,
            },
            provider: { "@id": BUSINESS_ID },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            minPrice: low,
            maxPrice: high,
          },
        };
      }),
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/?service={search_term_string}#price-finder`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${SITE.url}/#webpage`,
    url: SITE.url,
    name: "Pest Control Mesa AZ Prices: Termite Control, Bed Bugs & Scorpion Costs",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": BUSINESS_ID },
    description: SITE.description,
    inLanguage: "en-US",
    breadcrumb: { "@id": `${SITE.url}/#breadcrumb` },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${SITE.url}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pest Control Prices in Mesa, AZ",
        item: `${SITE.url}/#price-finder`,
      },
    ],
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${SITE.url}/#faq`,
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [localBusiness, website, webPage, breadcrumb, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      // Structured data is generated from local constants only.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
