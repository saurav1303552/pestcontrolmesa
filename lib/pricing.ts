export type PriceRow = {
  /** Service name exactly as shown in the pricing table */
  service: string;
  /** Price range as displayed */
  price: string;
  /** Category slug */
  category: string;
  /**
   * Alternative names shoppers use for this service. The on-page search was
   * removed, so nothing renders these today — they are kept as the vocabulary
   * for a future search or for paid-search keyword work.
   */
  aliases?: string[];
};

export type Category = {
  slug: string;
  name: string;
  /** Short blurb shown above the group */
  blurb: string;
  icon: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "general",
    name: "General Pest Control & Plans",
    blurb:
      "One-time visits, monthly, bi-monthly and quarterly pest control plans for Mesa homes.",
    icon: "shield",
  },
  {
    slug: "inspections",
    name: "Inspections & Estimates",
    blurb: "Free and paid pest inspections, identification and written estimates.",
    icon: "search",
  },
  {
    slug: "ants",
    name: "Ant Control",
    blurb: "Fire ants, carpenter ants, sugar ants and full nest removal.",
    icon: "ant",
  },
  {
    slug: "cockroaches",
    name: "Cockroach Control",
    blurb: "German, American and Oriental roach treatment and extermination.",
    icon: "roach",
  },
  {
    slug: "spiders",
    name: "Spider Control",
    blurb: "Black widow, desert spiders and web removal around the home.",
    icon: "spider",
  },
  {
    slug: "scorpions",
    name: "Scorpion Control",
    blurb: "Bark scorpion treatment, barrier sprays and scorpion sealing in Mesa.",
    icon: "scorpion",
  },
  {
    slug: "termites",
    name: "Termite Control",
    blurb: "Inspections, soil barriers, bait stations, warranties and damage repair.",
    icon: "termite",
  },
  {
    slug: "rodents",
    name: "Rodent Control",
    blurb: "Roof rats, pack rats and mice — trapping, exclusion and cleanup.",
    icon: "rodent",
  },
  {
    slug: "bedbugs",
    name: "Bed Bug Treatment",
    blurb: "Heat treatment, chemical treatment, K9 inspection and follow-ups.",
    icon: "bedbug",
  },
  {
    slug: "fleas-ticks",
    name: "Fleas & Ticks",
    blurb: "Indoor, yard and multi-room flea and tick treatment.",
    icon: "flea",
  },
  {
    slug: "mosquitoes",
    name: "Mosquito Control",
    blurb: "Yard fogging, barrier treatment and full-season mosquito plans.",
    icon: "mosquito",
  },
  {
    slug: "bees-wasps",
    name: "Bees, Wasps & Hornets",
    blurb: "Nest removal, honey bee removal, yellowjackets and bee exclusion.",
    icon: "bee",
  },
  {
    slug: "flies-moths-beetles",
    name: "Flies, Moths & Beetles",
    blurb: "Fruit flies, drain flies, pantry moths, carpet beetles and weevils.",
    icon: "fly",
  },
  {
    slug: "other-insects",
    name: "Other Crawling Insects",
    blurb: "Silverfish, earwigs, crickets, centipedes, millipedes and more.",
    icon: "bug",
  },
  {
    slug: "yard-areas",
    name: "Yard, Garden & Area Treatments",
    blurb: "Lawn, landscape, garage, attic, pantry and crawl-space treatments.",
    icon: "leaf",
  },
  {
    slug: "wildlife",
    name: "Wildlife Removal",
    blurb: "Birds, pigeons, bats, squirrels, raccoons, snakes and dead animals.",
    icon: "wildlife",
  },
  {
    slug: "cleanup",
    name: "Cleanup, Odor & Insulation",
    blurb: "Droppings cleanup, sanitation, odor removal and attic insulation.",
    icon: "clean",
  },
  {
    slug: "exclusion",
    name: "Exclusion & Pest-Proofing",
    blurb: "Home sealing, screens, vents, roofline, chimney and solar panel guards.",
    icon: "lock",
  },
  {
    slug: "commercial",
    name: "Commercial & Property Management",
    blurb: "Restaurants, offices, warehouses, HOAs and apartment complexes.",
    icon: "building",
  },
  {
    slug: "seasonal",
    name: "Seasonal & Move-In / Move-Out",
    blurb: "Spring through winter treatments, rental turnover and Airbnb service.",
    icon: "calendar",
  },
  {
    slug: "emergency",
    name: "Emergency & Same-Day Service",
    blurb: "Urgent scorpion, bee, wasp, rodent, termite and wildlife calls.",
    icon: "alert",
  },
  {
    slug: "warranty",
    name: "Warranties & Annual Protection",
    blurb: "Consultations, treatment warranties and annual protection plans.",
    icon: "check",
  },
];

export const CATEGORY_NAMES: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c.name]),
);

export const PRICES: PriceRow[] = [
  // ---------- General pest control & recurring plans ----------
  { service: "General pest control – one-time treatment", price: "$95–$330", category: "general", aliases: ["one time", "single visit", "basic bug spray"] },
  { service: "General pest control – average one-time visit", price: "$150–$200", category: "general", aliases: ["average cost", "typical price"] },
  { service: "Monthly pest control plan", price: "$40–$75/month", category: "general", aliases: ["per month", "subscription", "monthly service"] },
  { service: "Quarterly pest control plan", price: "$95–$285/visit", category: "general", aliases: ["every 3 months", "4 times a year"] },
  { service: "Bi-monthly pest control plan", price: "$49–$90/month", category: "general", aliases: ["every 2 months", "every other month"] },
  { service: "Annual pest control plan", price: "$500–$1,000/year", category: "general", aliases: ["yearly", "per year"] },
  { service: "Initial pest control service", price: "$100–$200", category: "general", aliases: ["first visit", "start up fee", "setup"] },
  { service: "Residential pest control", price: "$100–$300/visit", category: "general", aliases: ["home", "house", "family home"] },
  { service: "Apartment pest control", price: "$75–$250/unit", category: "general", aliases: ["condo", "unit", "renter"] },
  { service: "Rental property pest control", price: "$100–$300/visit", category: "general", aliases: ["landlord", "tenant"] },
  { service: "Property-wide pest treatment", price: "$150–$500", category: "general", aliases: ["whole property", "full property"] },
  { service: "Indoor pest treatment", price: "$100–$250", category: "general", aliases: ["inside", "interior only"] },
  { service: "Exterior pest treatment", price: "$75–$200", category: "general", aliases: ["outside", "outdoor only"] },
  { service: "Interior + exterior pest treatment", price: "$125–$350", category: "general", aliases: ["inside and outside", "full service"] },
  { service: "Perimeter pest treatment", price: "$75–$175", category: "general", aliases: ["barrier spray", "around the house"] },
  { service: "Preventive pest control", price: "$40–$100/month", category: "general", aliases: ["prevention", "maintenance"] },
  { service: "Recurring pest control service", price: "$40–$100/month", category: "general", aliases: ["ongoing", "regular service", "maintenance plan"] },
  { service: "Pest control re-treatment", price: "$0–$150", category: "general", aliases: ["re service", "redo", "come back"] },
  { service: "Pest control follow-up visit", price: "$0–$150", category: "general", aliases: ["second visit", "callback"] },
  { service: "Pest control service call", price: "$75–$200", category: "general", aliases: ["trip charge", "call out fee"] },
  { service: "Pest control labor/hour", price: "$65–$155/hour", category: "general", aliases: ["hourly rate", "per hour", "labor cost"] },

  // ---------- Inspections & estimates ----------
  { service: "Pest inspection", price: "$0–$150", category: "inspections", aliases: ["check for bugs", "assessment"] },
  { service: "Free pest inspection", price: "$0", category: "inspections", aliases: ["no cost", "complimentary"] },
  { service: "Pest identification", price: "$0–$100", category: "inspections", aliases: ["identify bug", "what is this bug"] },
  { service: "Home pest inspection", price: "$0–$150", category: "inspections", aliases: ["house inspection"] },
  { service: "Pre-purchase pest inspection", price: "$75–$200", category: "inspections", aliases: ["buying a house", "before buying"] },
  { service: "Real estate pest inspection", price: "$75–$200", category: "inspections", aliases: ["escrow", "closing", "realtor"] },
  { service: "Commercial pest inspection", price: "$100–$300", category: "inspections", aliases: ["business inspection"] },
  { service: "Apartment pest inspection", price: "$50–$150", category: "inspections", aliases: ["unit inspection"] },
  { service: "Restaurant pest inspection", price: "$100–$300", category: "inspections", aliases: ["food service", "health inspection"] },
  { service: "Warehouse pest inspection", price: "$150–$400", category: "inspections", aliases: ["industrial inspection"] },

  // ---------- Ants ----------
  { service: "Ant control", price: "$100–$300", category: "ants", aliases: ["ants in kitchen", "ant spray"] },
  { service: "Fire ant treatment", price: "$100–$300", category: "ants", aliases: ["red ants", "stinging ants"] },
  { service: "Carpenter ant treatment", price: "$150–$400", category: "ants", aliases: ["wood ants", "big black ants"] },
  { service: "Pavement ant treatment", price: "$100–$250", category: "ants", aliases: ["sidewalk ants", "driveway ants"] },
  { service: "Argentine ant treatment", price: "$100–$300", category: "ants", aliases: ["trailing ants"] },
  { service: "Sugar ant treatment", price: "$100–$250", category: "ants", aliases: ["tiny ants", "kitchen ants"] },
  { service: "Ant infestation treatment", price: "$150–$350", category: "ants", aliases: ["ants everywhere", "heavy ants"] },
  { service: "Ant nest removal", price: "$100–$300", category: "ants", aliases: ["ant hill", "colony removal"] },

  // ---------- Cockroaches ----------
  { service: "Cockroach control", price: "$100–$450", category: "cockroaches", aliases: ["roach", "roaches", "cockroaches"] },
  { service: "German cockroach treatment", price: "$150–$500", category: "cockroaches", aliases: ["german roach", "small roaches"] },
  { service: "American cockroach treatment", price: "$100–$350", category: "cockroaches", aliases: ["big roach", "sewer roach", "palmetto bug"] },
  { service: "Oriental cockroach treatment", price: "$100–$350", category: "cockroaches", aliases: ["water bug", "black roach"] },
  { service: "Roach infestation treatment", price: "$150–$500", category: "cockroaches", aliases: ["roach problem", "lots of roaches"] },
  { service: "Roach extermination", price: "$150–$500", category: "cockroaches", aliases: ["kill roaches", "exterminate roaches"] },

  // ---------- Spiders ----------
  { service: "Spider control", price: "$100–$300", category: "spiders", aliases: ["spiders", "spider spray"] },
  { service: "Black widow spider control", price: "$150–$400", category: "spiders", aliases: ["black widow", "poisonous spider", "venomous spider"] },
  { service: "Desert spider control", price: "$100–$300", category: "spiders", aliases: ["wolf spider", "brown spider", "arizona spider"] },
  { service: "Web removal service", price: "$75–$200", category: "spiders", aliases: ["cobwebs", "spider webs", "de webbing"] },

  // ---------- Scorpions ----------
  { service: "Scorpion control", price: "$100–$400", category: "scorpions", aliases: ["scorpions", "scorpion spray"] },
  { service: "Bark scorpion treatment", price: "$100–$250", category: "scorpions", aliases: ["arizona bark scorpion", "bark scorpions"] },
  { service: "Scorpion extermination", price: "$150–$400", category: "scorpions", aliases: ["kill scorpions", "get rid of scorpions"] },
  { service: "Scorpion barrier treatment", price: "$100–$250", category: "scorpions", aliases: ["scorpion perimeter", "barrier spray"] },
  { service: "Scorpion prevention", price: "$50–$100/month", category: "scorpions", aliases: ["keep scorpions away", "monthly scorpion"] },
  { service: "Scorpion sealing/exclusion", price: "$200–$800", category: "scorpions", aliases: ["seal house scorpions", "weep holes", "door sweeps"] },
  { service: "Scorpion inspection", price: "$0–$150", category: "scorpions", aliases: ["black light inspection", "uv scorpion check"] },
  { service: "Scorpion yard treatment", price: "$100–$300", category: "scorpions", aliases: ["backyard scorpions", "landscape scorpions"] },
  { service: "Scorpion house treatment", price: "$100–$300", category: "scorpions", aliases: ["scorpions inside", "indoor scorpions"] },

  // ---------- Termites ----------
  { service: "Termite inspection", price: "$0–$165", category: "termites", aliases: ["termite check", "wood destroying insect"] },
  { service: "Termite inspection for home sale", price: "$75–$200", category: "termites", aliases: ["wdiir", "selling house termite", "escrow termite"] },
  { service: "Termite inspection report", price: "$75–$200", category: "termites", aliases: ["termite letter", "clearance report"] },
  { service: "Termite treatment", price: "$300–$3,300+", category: "termites", aliases: ["termites", "termite control", "kill termites"] },
  { service: "Average termite treatment", price: "$1,100–$2,000", category: "termites", aliases: ["typical termite cost"] },
  { service: "Subterranean termite treatment", price: "$500–$3,000", category: "termites", aliases: ["ground termites", "mud tubes"] },
  { service: "Drywood termite treatment", price: "$500–$3,500", category: "termites", aliases: ["dry wood termites", "wood termites"] },
  { service: "Termite spot treatment", price: "$300–$1,000", category: "termites", aliases: ["local treatment", "small termite job"] },
  { service: "Termite bait stations", price: "$800–$2,500", category: "termites", aliases: ["sentricon", "bait system"] },
  { service: "Termite bait station installation", price: "$500–$1,500", category: "termites", aliases: ["install bait stations"] },
  { service: "Termite monitoring plan", price: "$300–$800/year", category: "termites", aliases: ["termite monitoring", "ongoing termite"] },
  { service: "Termite prevention", price: "$500–$2,500", category: "termites", aliases: ["preventive termite", "stop termites"] },
  { service: "Termite barrier treatment", price: "$500–$2,500", category: "termites", aliases: ["soil barrier", "chemical barrier"] },
  { service: "Termite trenching treatment", price: "$500–$2,500", category: "termites", aliases: ["trench and treat", "linear foot"] },
  { service: "Termite drilling treatment", price: "$500–$2,500", category: "termites", aliases: ["drill slab", "concrete drilling"] },
  { service: "Termite warranty", price: "$250–$600/year", category: "termites", aliases: ["termite bond", "renewal"] },
  { service: "Termite retreatment", price: "$0–$1,000", category: "termites", aliases: ["termites came back", "re treat"] },
  { service: "Termite damage inspection", price: "$75–$200", category: "termites", aliases: ["wood damage check"] },
  { service: "Termite damage repair", price: "$500–$5,000+", category: "termites", aliases: ["repair wood", "structural repair"] },

  // ---------- Rodents ----------
  { service: "Rodent control", price: "$150–$660", category: "rodents", aliases: ["rodents", "rats and mice", "vermin"] },
  { service: "Rodent removal", price: "$150–$500", category: "rodents", aliases: ["remove rodents", "get rid of rats"] },
  { service: "Rat removal", price: "$150–$600", category: "rodents", aliases: ["rats", "rat problem"] },
  { service: "Roof rat removal", price: "$190–$600", category: "rodents", aliases: ["roof rats", "attic rats", "citrus rats"] },
  { service: "Pack rat removal", price: "$150–$600", category: "rodents", aliases: ["pack rats", "desert rat", "car wiring rats"] },
  { service: "Mouse removal", price: "$150–$450", category: "rodents", aliases: ["mice", "mouse", "field mice"] },
  { service: "Mouse extermination", price: "$150–$500", category: "rodents", aliases: ["kill mice", "mouse infestation"] },
  { service: "Rat extermination", price: "$200–$600", category: "rodents", aliases: ["kill rats", "rat infestation"] },
  { service: "Rodent trapping", price: "$150–$400", category: "rodents", aliases: ["traps", "snap traps", "set traps"] },
  { service: "Rodent monitoring", price: "$20–$75/month", category: "rodents", aliases: ["bait stations", "monitor rodents"] },
  { service: "Rodent exclusion", price: "$200–$1,000", category: "rodents", aliases: ["seal out rats", "block entry"] },
  { service: "Rodent-proofing", price: "$250–$1,500", category: "rodents", aliases: ["rat proofing", "mouse proofing"] },
  { service: "Rodent entry-point sealing", price: "$150–$600", category: "rodents", aliases: ["seal holes", "close gaps"] },
  { service: "Attic rodent removal", price: "$250–$800", category: "rodents", aliases: ["rats in attic", "noises in ceiling"] },
  { service: "Garage rodent removal", price: "$150–$500", category: "rodents", aliases: ["rats in garage"] },
  { service: "Crawl-space rodent treatment", price: "$200–$700", category: "rodents", aliases: ["crawlspace rats", "under house"] },
  { service: "Rodent cleanup", price: "$200–$1,000", category: "rodents", aliases: ["sanitize", "disinfect after rats"] },
  { service: "Rodent droppings cleanup", price: "$150–$600", category: "rodents", aliases: ["rat poop", "mouse droppings", "feces"] },
  { service: "Rodent odor removal", price: "$200–$800", category: "rodents", aliases: ["rat smell", "urine odor"] },

  // ---------- Bed bugs ----------
  { service: "Bed bug inspection", price: "$75–$250", category: "bedbugs", aliases: ["bed bugs check", "bedbug inspection"] },
  { service: "Bed bug inspection with K9", price: "$100–$300", category: "bedbugs", aliases: ["dog detection", "canine bed bug"] },
  { service: "Bed bug treatment", price: "$550–$1,650", category: "bedbugs", aliases: ["bed bugs", "bedbugs", "kill bed bugs"] },
  { service: "Average bed bug treatment", price: "$800–$1,200", category: "bedbugs", aliases: ["typical bed bug cost"] },
  { service: "Bed bug heat treatment", price: "$800–$2,500", category: "bedbugs", aliases: ["thermal remediation", "heat"] },
  { service: "Bed bug chemical treatment", price: "$500–$1,500", category: "bedbugs", aliases: ["spray treatment", "liquid treatment"] },
  { service: "Bed bug fumigation", price: "$1,000–$3,000+", category: "bedbugs", aliases: ["tent fumigation", "fumigate"] },
  { service: "Bed bug treatment per room", price: "$300–$800", category: "bedbugs", aliases: ["one room", "single bedroom"] },
  { service: "Bed bug treatment for apartment", price: "$500–$1,500", category: "bedbugs", aliases: ["apartment bed bugs"] },
  { service: "Bed bug treatment for house", price: "$800–$2,500", category: "bedbugs", aliases: ["whole house bed bugs"] },
  { service: "Bed bug follow-up treatment", price: "$200–$600", category: "bedbugs", aliases: ["second treatment", "recheck"] },
  { service: "Bed bug prevention", price: "$100–$300", category: "bedbugs", aliases: ["stop bed bugs", "protect against"] },
  { service: "Bed bug mattress treatment", price: "$100–$300", category: "bedbugs", aliases: ["mattress encasement", "bed treatment"] },
  { service: "Bed bug furniture treatment", price: "$100–$500", category: "bedbugs", aliases: ["couch", "sofa", "recliner"] },

  // ---------- Fleas & ticks ----------
  { service: "Flea control", price: "$100–$300", category: "fleas-ticks", aliases: ["fleas", "dog fleas", "cat fleas"] },
  { service: "Flea extermination", price: "$150–$400", category: "fleas-ticks", aliases: ["kill fleas"] },
  { service: "Flea treatment – home", price: "$150–$400", category: "fleas-ticks", aliases: ["indoor fleas", "carpet fleas"] },
  { service: "Flea yard treatment", price: "$100–$300", category: "fleas-ticks", aliases: ["fleas outside", "yard fleas"] },
  { service: "Flea treatment – multiple rooms", price: "$200–$500", category: "fleas-ticks", aliases: ["whole house fleas"] },
  { service: "Tick control", price: "$100–$300", category: "fleas-ticks", aliases: ["ticks", "dog ticks", "brown dog tick"] },
  { service: "Tick treatment", price: "$150–$400", category: "fleas-ticks", aliases: ["kill ticks"] },
  { service: "Tick yard treatment", price: "$100–$300", category: "fleas-ticks", aliases: ["ticks outside", "yard ticks"] },
  { service: "Tick prevention", price: "$50–$150/month", category: "fleas-ticks", aliases: ["stop ticks", "monthly tick"] },

  // ---------- Mosquitoes ----------
  { service: "Mosquito control", price: "$75–$200/treatment", category: "mosquitoes", aliases: ["mosquitos", "mosquitoes", "skeeters"] },
  { service: "Mosquito treatment", price: "$75–$250", category: "mosquitoes", aliases: ["mosquito spray", "fogging"] },
  { service: "Mosquito yard treatment", price: "$75–$200", category: "mosquitoes", aliases: ["backyard mosquitoes"] },
  { service: "Mosquito barrier treatment", price: "$75–$150", category: "mosquitoes", aliases: ["mosquito barrier", "misting"] },
  { service: "Monthly mosquito control", price: "$75–$150/month", category: "mosquitoes", aliases: ["mosquito plan"] },
  { service: "Mosquito season treatment plan", price: "$400–$1,000/season", category: "mosquitoes", aliases: ["seasonal mosquito", "summer plan"] },

  // ---------- Bees, wasps & hornets ----------
  { service: "Wasp removal", price: "$100–$300", category: "bees-wasps", aliases: ["wasps", "stinging insects"] },
  { service: "Wasp nest removal", price: "$100–$300", category: "bees-wasps", aliases: ["wasp nest", "nest in eaves"] },
  { service: "Hornet nest removal", price: "$125–$350", category: "bees-wasps", aliases: ["hornets", "hornet nest"] },
  { service: "Paper wasp treatment", price: "$100–$250", category: "bees-wasps", aliases: ["paper wasps", "umbrella nest"] },
  { service: "Yellowjacket treatment", price: "$125–$350", category: "bees-wasps", aliases: ["yellow jackets", "yellowjackets"] },
  { service: "Yellowjacket nest removal", price: "$150–$400", category: "bees-wasps", aliases: ["yellow jacket nest"] },
  { service: "Bee removal", price: "$150–$500", category: "bees-wasps", aliases: ["bees", "swarm", "bee swarm"] },
  { service: "Honey bee removal", price: "$200–$800", category: "bees-wasps", aliases: ["honeybees", "africanized bees", "killer bees"] },
  { service: "Carpenter bee treatment", price: "$100–$300", category: "bees-wasps", aliases: ["carpenter bees", "wood boring bees"] },
  { service: "Bee hive removal", price: "$200–$800", category: "bees-wasps", aliases: ["beehive", "hive in wall", "honeycomb"] },
  { service: "Bee exclusion", price: "$200–$800", category: "bees-wasps", aliases: ["seal bees out", "bee proofing"] },

  // ---------- Flies, moths & beetles ----------
  { service: "Fly control", price: "$100–$300", category: "flies-moths-beetles", aliases: ["flies", "fly problem"] },
  { service: "House fly treatment", price: "$100–$250", category: "flies-moths-beetles", aliases: ["house flies"] },
  { service: "Fruit fly treatment", price: "$100–$250", category: "flies-moths-beetles", aliases: ["fruit flies", "gnats"] },
  { service: "Drain fly treatment", price: "$100–$300", category: "flies-moths-beetles", aliases: ["drain flies", "sink flies", "sewer gnats"] },
  { service: "Fly infestation treatment", price: "$150–$400", category: "flies-moths-beetles", aliases: ["swarm of flies"] },
  { service: "Pantry moth treatment", price: "$100–$300", category: "flies-moths-beetles", aliases: ["pantry moths", "food moths"] },
  { service: "Clothes moth treatment", price: "$150–$400", category: "flies-moths-beetles", aliases: ["clothes moths", "closet moths", "wool moths"] },
  { service: "Moth extermination", price: "$150–$400", category: "flies-moths-beetles", aliases: ["moths", "kill moths"] },
  { service: "Indian meal moth treatment", price: "$100–$300", category: "flies-moths-beetles", aliases: ["indianmeal moth", "grain moth"] },
  { service: "Carpet beetle treatment", price: "$100–$300", category: "flies-moths-beetles", aliases: ["carpet beetles", "rug beetles"] },
  { service: "Beetle control", price: "$100–$300", category: "flies-moths-beetles", aliases: ["beetles", "june bugs"] },
  { service: "Weevil treatment", price: "$100–$300", category: "flies-moths-beetles", aliases: ["weevils", "flour bugs", "rice bugs"] },

  // ---------- Other crawling insects ----------
  { service: "Silverfish control", price: "$100–$300", category: "other-insects", aliases: ["silverfish", "bathroom bugs"] },
  { service: "Earwig control", price: "$100–$300", category: "other-insects", aliases: ["earwigs", "pincher bugs"] },
  { service: "Centipede control", price: "$100–$300", category: "other-insects", aliases: ["centipedes", "desert centipede"] },
  { service: "Millipede control", price: "$100–$300", category: "other-insects", aliases: ["millipedes"] },
  { service: "Cricket control", price: "$100–$300", category: "other-insects", aliases: ["crickets", "chirping"] },
  { service: "Grasshopper control", price: "$100–$300", category: "other-insects", aliases: ["grasshoppers", "locusts"] },
  { service: "Pill bug control", price: "$100–$250", category: "other-insects", aliases: ["roly poly", "pill bugs"] },
  { service: "Sowbug control", price: "$100–$250", category: "other-insects", aliases: ["sow bugs", "wood lice"] },

  // ---------- Yard, garden & area treatments ----------
  { service: "Aphid treatment", price: "$100–$300", category: "yard-areas", aliases: ["aphids", "plant bugs"] },
  { service: "Garden pest control", price: "$100–$400", category: "yard-areas", aliases: ["vegetable garden", "plants"] },
  { service: "Lawn pest control", price: "$100–$400", category: "yard-areas", aliases: ["grass bugs", "turf"] },
  { service: "Landscape pest treatment", price: "$100–$400", category: "yard-areas", aliases: ["shrubs", "trees", "bushes"] },
  { service: "Yard pest control", price: "$75–$250", category: "yard-areas", aliases: ["backyard", "front yard"] },
  { service: "Outdoor pest treatment", price: "$75–$250", category: "yard-areas", aliases: ["outside treatment", "patio"] },
  { service: "Pantry pest control", price: "$100–$300", category: "yard-areas", aliases: ["food storage bugs", "cupboard"] },
  { service: "Kitchen pest treatment", price: "$100–$300", category: "yard-areas", aliases: ["bugs in kitchen"] },
  { service: "Garage pest control", price: "$100–$300", category: "yard-areas", aliases: ["bugs in garage"] },
  { service: "Attic pest control", price: "$150–$500", category: "yard-areas", aliases: ["bugs in attic"] },
  { service: "Crawl-space pest control", price: "$150–$500", category: "yard-areas", aliases: ["crawlspace bugs", "under the house"] },

  // ---------- Wildlife ----------
  { service: "Wildlife removal", price: "$200–$800", category: "wildlife", aliases: ["animal removal", "critter removal"] },
  { service: "Wildlife inspection", price: "$75–$200", category: "wildlife", aliases: ["animal inspection"] },
  { service: "Wildlife exclusion", price: "$300–$1,500", category: "wildlife", aliases: ["animal proofing", "seal out animals"] },
  { service: "Animal entry-point sealing", price: "$200–$800", category: "wildlife", aliases: ["seal animal holes"] },
  { service: "Bat removal", price: "$300–$1,500", category: "wildlife", aliases: ["bats", "bats in attic"] },
  { service: "Bat exclusion", price: "$500–$2,000", category: "wildlife", aliases: ["bat proofing", "one way door"] },
  { service: "Bat inspection", price: "$100–$300", category: "wildlife", aliases: ["bat check"] },
  { service: "Bird removal", price: "$200–$800", category: "wildlife", aliases: ["birds", "birds in vent"] },
  { service: "Bird exclusion", price: "$300–$1,500", category: "wildlife", aliases: ["bird netting", "bird spikes"] },
  { service: "Pigeon control", price: "$200–$800", category: "wildlife", aliases: ["pigeons", "pigeon poop"] },
  { service: "Pigeon exclusion", price: "$300–$1,500", category: "wildlife", aliases: ["pigeon netting", "pigeon spikes"] },
  { service: "Bird nest removal", price: "$150–$500", category: "wildlife", aliases: ["nest in vent", "nest removal"] },
  { service: "Squirrel removal", price: "$200–$600", category: "wildlife", aliases: ["squirrels", "ground squirrel"] },
  { service: "Squirrel exclusion", price: "$300–$1,000", category: "wildlife", aliases: ["squirrel proofing"] },
  { service: "Raccoon removal", price: "$300–$800", category: "wildlife", aliases: ["raccoons", "racoon"] },
  { service: "Raccoon exclusion", price: "$500–$1,500", category: "wildlife", aliases: ["raccoon proofing"] },
  { service: "Opossum removal", price: "$200–$500", category: "wildlife", aliases: ["possum", "opossums"] },
  { service: "Skunk removal", price: "$250–$600", category: "wildlife", aliases: ["skunks", "skunk smell"] },
  { service: "Snake removal", price: "$150–$500", category: "wildlife", aliases: ["snakes", "rattlesnake"] },
  { service: "Snake exclusion", price: "$300–$1,000", category: "wildlife", aliases: ["snake fence", "snake proofing"] },
  { service: "Lizard control", price: "$100–$300", category: "wildlife", aliases: ["lizards", "geckos"] },
  { service: "Dead animal removal", price: "$150–$500", category: "wildlife", aliases: ["dead rat", "dead smell", "carcass"] },
  { service: "Animal carcass removal", price: "$150–$500", category: "wildlife", aliases: ["remove dead animal"] },

  // ---------- Cleanup, odor & insulation ----------
  { service: "Wildlife attic cleanup", price: "$300–$1,500", category: "cleanup", aliases: ["attic sanitation"] },
  { service: "Wildlife odor remediation", price: "$250–$1,000", category: "cleanup", aliases: ["animal smell", "deodorize"] },
  { service: "Crawl-space cleanup", price: "$300–$1,500", category: "cleanup", aliases: ["crawlspace sanitation"] },
  { service: "Attic cleanup after infestation", price: "$300–$2,000", category: "cleanup", aliases: ["clean attic", "attic restoration"] },
  { service: "Pest droppings cleanup", price: "$150–$600", category: "cleanup", aliases: ["droppings", "feces cleanup"] },
  { service: "Pest sanitation service", price: "$200–$800", category: "cleanup", aliases: ["disinfect", "sanitize"] },
  { service: "Pest odor treatment", price: "$150–$600", category: "cleanup", aliases: ["bad smell", "odor removal"] },
  { service: "Attic insulation removal due to pests", price: "$500–$2,500", category: "cleanup", aliases: ["remove insulation", "contaminated insulation"] },
  { service: "Attic insulation replacement", price: "$1,000–$4,000+", category: "cleanup", aliases: ["new insulation", "re insulate"] },
  { service: "Pest-related insulation cleanup", price: "$500–$2,500", category: "cleanup", aliases: ["insulation cleanup"] },

  // ---------- Exclusion & pest-proofing ----------
  { service: "Pest exclusion package", price: "$500–$2,000", category: "exclusion", aliases: ["exclusion", "seal the house"] },
  { service: "Whole-home pest exclusion", price: "$500–$2,500", category: "exclusion", aliases: ["full home sealing"] },
  { service: "Home sealing for pests", price: "$250–$1,500", category: "exclusion", aliases: ["caulking", "weatherproofing"] },
  { service: "Door and vent pest-proofing", price: "$100–$500", category: "exclusion", aliases: ["door sweeps", "vent screens"] },
  { service: "Screen repair for pest exclusion", price: "$50–$300", category: "exclusion", aliases: ["window screens", "screen repair"] },
  { service: "Chimney pest exclusion", price: "$200–$600", category: "exclusion", aliases: ["chimney cap", "flue screen"] },
  { service: "Roofline pest exclusion", price: "$300–$1,000", category: "exclusion", aliases: ["tile roof", "bird stop", "eaves"] },
  { service: "Foundation pest sealing", price: "$200–$800", category: "exclusion", aliases: ["slab gaps", "foundation gaps"] },
  { service: "Solar panel pest control", price: "$150–$500", category: "exclusion", aliases: ["solar panels", "under solar"] },
  { service: "Solar panel bird removal", price: "$200–$800", category: "exclusion", aliases: ["birds under solar"] },
  { service: "Solar panel pigeon exclusion", price: "$300–$1,500", category: "exclusion", aliases: ["pigeons under solar panels"] },
  { service: "Solar panel critter guard installation", price: "$300–$1,500", category: "exclusion", aliases: ["critter guard", "solar mesh"] },

  // ---------- Commercial & property management ----------
  { service: "Commercial pest control", price: "$150–$500+/visit", category: "commercial", aliases: ["business", "company"] },
  { service: "Office pest control", price: "$100–$400/visit", category: "commercial", aliases: ["office building"] },
  { service: "Restaurant pest control", price: "$150–$500/visit", category: "commercial", aliases: ["food service", "kitchen commercial"] },
  { service: "Retail pest control", price: "$100–$400/visit", category: "commercial", aliases: ["store", "shop"] },
  { service: "Warehouse pest control", price: "$150–$500/visit", category: "commercial", aliases: ["distribution center", "industrial"] },
  { service: "Commercial termite treatment", price: "$500–$5,000+", category: "commercial", aliases: ["business termites"] },
  { service: "Commercial rodent control", price: "$200–$1,000+", category: "commercial", aliases: ["business rats"] },
  { service: "Commercial cockroach control", price: "$150–$600", category: "commercial", aliases: ["business roaches"] },
  { service: "Commercial ant control", price: "$150–$500", category: "commercial", aliases: ["business ants"] },
  { service: "Commercial scorpion control", price: "$150–$500", category: "commercial", aliases: ["business scorpions"] },
  { service: "Commercial mosquito control", price: "$100–$400", category: "commercial", aliases: ["business mosquitoes"] },
  { service: "HOA pest control", price: "$500–$2,500+/month", category: "commercial", aliases: ["hoa", "community", "association"] },
  { service: "Apartment complex pest control", price: "$500–$3,000+/month", category: "commercial", aliases: ["multi family", "complex"] },
  { service: "Property management pest control", price: "$500–$3,000+/month", category: "commercial", aliases: ["property manager", "portfolio"] },
  { service: "Construction pest control", price: "$200–$1,000/visit", category: "commercial", aliases: ["job site", "builder"] },
  { service: "New construction termite treatment", price: "$500–$2,500", category: "commercial", aliases: ["new build termite"] },
  { service: "Pre-construction termite treatment", price: "$500–$2,500", category: "commercial", aliases: ["pre treat slab", "pretreat"] },

  // ---------- Seasonal & move-in / move-out ----------
  { service: "Seasonal pest treatment", price: "$100–$300", category: "seasonal", aliases: ["by season"] },
  { service: "Spring pest treatment", price: "$100–$300", category: "seasonal", aliases: ["spring"] },
  { service: "Summer pest treatment", price: "$100–$300", category: "seasonal", aliases: ["summer", "monsoon"] },
  { service: "Fall pest treatment", price: "$100–$300", category: "seasonal", aliases: ["fall", "autumn"] },
  { service: "Winter pest treatment", price: "$100–$300", category: "seasonal", aliases: ["winter"] },
  { service: "Pre-move pest treatment", price: "$100–$300", category: "seasonal", aliases: ["before moving"] },
  { service: "Move-in pest treatment", price: "$100–$300", category: "seasonal", aliases: ["moving in", "new home"] },
  { service: "Move-out pest treatment", price: "$100–$300", category: "seasonal", aliases: ["moving out", "lease end"] },
  { service: "Vacation rental pest control", price: "$100–$300/visit", category: "seasonal", aliases: ["short term rental", "vrbo"] },
  { service: "Airbnb pest control", price: "$100–$300/visit", category: "seasonal", aliases: ["airbnb", "str"] },
  { service: "Rental turnover pest treatment", price: "$100–$300", category: "seasonal", aliases: ["turnover", "between tenants"] },

  // ---------- Emergency ----------
  { service: "Emergency pest control", price: "$150–$400", category: "emergency", aliases: ["urgent", "right now", "asap"] },
  { service: "Same-day pest control", price: "$150–$350", category: "emergency", aliases: ["same day", "today"] },
  { service: "Emergency termite treatment", price: "$300–$2,000+", category: "emergency", aliases: ["urgent termites"] },
  { service: "Emergency rodent removal", price: "$200–$700", category: "emergency", aliases: ["urgent rats"] },
  { service: "Emergency bee removal", price: "$200–$800", category: "emergency", aliases: ["urgent bees", "bee swarm now"] },
  { service: "Emergency wasp removal", price: "$150–$400", category: "emergency", aliases: ["urgent wasps"] },
  { service: "Emergency scorpion treatment", price: "$150–$400", category: "emergency", aliases: ["urgent scorpions", "scorpion sting"] },
  { service: "Emergency wildlife removal", price: "$250–$1,000", category: "emergency", aliases: ["urgent animal"] },

  // ---------- Warranties & annual protection ----------
  { service: "Pest control consultation", price: "$0–$150", category: "warranty", aliases: ["advice", "consult", "quote"] },
  { service: "Written pest control estimate", price: "$0–$150", category: "warranty", aliases: ["estimate", "written quote", "bid"] },
  { service: "Pest treatment warranty", price: "$100–$500/year", category: "warranty", aliases: ["guarantee", "warranty"] },
  { service: "Annual pest inspection", price: "$0–$200", category: "warranty", aliases: ["yearly inspection"] },
  { service: "Annual termite inspection", price: "$0–$150", category: "warranty", aliases: ["yearly termite check"] },
  { service: "Annual pest protection plan", price: "$500–$1,200/year", category: "warranty", aliases: ["yearly plan", "protection plan"] },
];

/**
 * Words shoppers type that map onto the service vocabulary. Unused since the
 * on-page search was removed; retained alongside `aliases` above.
 */
export const SYNONYMS: Record<string, string[]> = {
  roach: ["cockroach"],
  roaches: ["cockroach"],
  mice: ["mouse", "rodent"],
  mouse: ["rodent"],
  rat: ["rodent"],
  rats: ["rodent", "rat"],
  bug: ["pest"],
  bugs: ["pest"],
  bedbug: ["bed bug"],
  bedbugs: ["bed bug"],
  exterminator: ["extermination", "control"],
  exterminate: ["extermination"],
  kill: ["extermination", "control"],
  spray: ["treatment"],
  price: [""],
  cost: [""],
  quote: ["estimate"],
  gnats: ["fruit fly"],
  possum: ["opossum"],
  racoon: ["raccoon"],
  skeeter: ["mosquito"],
  mosquitos: ["mosquito"],
  termight: ["termite"],
  scorpians: ["scorpion"],
  scorpion: ["scorpion"],
  wasps: ["wasp"],
  bees: ["bee"],
  ants: ["ant"],
  spiders: ["spider"],
  fleas: ["flea"],
  ticks: ["tick"],
  birds: ["bird"],
  snakes: ["snake"],
  monthly: ["monthly"],
  cheap: ["one-time"],
  free: ["free"],
};

export const TOTAL_SERVICES = PRICES.length;
