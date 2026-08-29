export const SITE = {
  name: "Pest Control Mesa AZ Prices",
  legalName: "Pest Control Mesa AZ Prices",
  domain: "pestcontrolmesaazprices.com",
  url: "https://pestcontrolmesaazprices.com",
  tagline: "Real Mesa pest control costs — published upfront, no phone tag.",
  description:
    "Pest control Mesa AZ prices for 250+ services: one-time treatments, monthly plans, termite, bed bug, scorpion and rodent costs. Search any service and see the real price range.",
  phone: "5567899011",
  phoneDisplay: "(556) 789-9011",
  phoneHref: "tel:+15567899011",
  email: "quotes@pestcontrolmesaazprices.com",
  address: {
    street: "7303 S Hawes Rd",
    city: "Mesa",
    state: "AZ",
    stateFull: "Arizona",
    zip: "85212",
    country: "United States",
    countryCode: "US",
  },
  geo: { lat: 33.3062, lng: -111.6362 },
  hours: "Mon–Sat 7:00 AM – 7:00 PM · Emergency service available",
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "07:00", closes: "19:00" },
  ],
  serviceAreas: [
    "Mesa",
    "Eastmark",
    "Las Sendas",
    "Dobson Ranch",
    "Red Mountain",
    "Superstition Springs",
    "Gilbert",
    "Queen Creek",
    "Apache Junction",
    "Tempe",
    "Chandler",
  ],
} as const;

export const FULL_ADDRESS = `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}, ${SITE.address.country}`;

export const MAP_QUERY = encodeURIComponent(FULL_ADDRESS);
