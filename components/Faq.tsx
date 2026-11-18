import { SITE } from "@/lib/site";
import { PhoneIcon, ChevronIcon } from "./Icons";

export const FAQS = [
  {
    q: "How much does pest control cost in Mesa, AZ?",
    a: "Most Mesa homeowners pay between $120 and $190 for a one time general treatment on a standard 1,600–2,000 sq ft home. Across the market, one-time pest control in Mesa runs $95 to $330 depending on pest type, home size and infestation severity. Recurring plans are $40–$75 per month.",
  },
  {
    q: "Is a monthly plan cheaper than one-time pest control in Mesa?",
    a: "Yes, when pest activity is consistent. A one time visit gives roughly 30–60 days of relief, while a monthly plan at $40–$75 per month maintains a year-round barrier and usually includes free re-service between visits. In Mesa's desert climate, where scorpions, ants and roaches stay active most of the year, recurring service is normally the lower total cost.",
  },
  {
    q: "How much is scorpion control in Mesa?",
    a: "Scorpion control in Mesa typically costs $150 to $400 as a one-time treatment, and bark scorpion treatment starts around $100. Because scorpions hide in cracks and block walls, effective control usually includes perimeter sealing, which runs $200–$800 depending on how much of the home needs exclusion work. Adding scorpion-focused service to a general plan is often $30–$60 extra per month.",
  },
  {
    q: "What does termite treatment cost in Mesa, AZ?",
    a: "Termite treatment in Mesa ranges from $300 to over $3,300, with the average full treatment at $1,100–$2,000. Soil barrier and trench treatments typically run $3–$15 per linear foot. Termite inspections cost $0–$165, and many companies include the inspection free with a written estimate.",
  },
  {
    q: "How much does bed bug treatment cost?",
    a: "Bed bug treatment runs $550 to $1,650, with $800–$1,200 being typical. Chemical treatment averages $320–$400 per room, while whole-home heat treatment ranges from $800 to $2,500. A K9 bed bug inspection costs $100–$300.",
  },
  {
    q: "What does a pest inspection cost in Mesa?",
    a: "A standalone pest inspection in Mesa runs $0 to $150 depending on the company and the property. Specialty inspections cost more: a termite report for a home sale is $75 to $200, and a K9 bed bug inspection is $100 to $300. Ask what the inspection covers and whether its cost is credited toward treatment if you book.",
  },
  {
    q: "What affects my pest control quote the most?",
    a: "Home size, pest type, infestation severity, property layout, treatment scope and service frequency. A 2,500+ sq ft home with rock landscaping, block walls and a pool needs more perimeter coverage than a small condo, and specialty pests like termites, bed bugs and rodents carry their own pricing tiers.",
  },
  {
    q: "Am I locked into a long-term contract?",
    a: "No. We work on a simple agreement model with no long-term contract lock-in, and recommendations for add-ons like termite service or rodent exclusion are based on what the technician actually finds on site.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 border-t border-sand-200 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
            Pricing questions
          </p>
          <h2
            id="faq-heading"
            className="text-[1.7rem] font-bold tracking-tight text-ink-900 sm:text-4xl"
          >
            Mesa Pest Control Prices: FAQ
          </h2>
        </div>

        <div className="mt-9 divide-y divide-sand-200 overflow-hidden rounded-2xl border border-sand-300 shadow-card">
          {FAQS.map((item, i) => (
            <details key={item.q} className="group bg-white" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4.5 text-[16px] font-bold text-ink-900 transition hover:bg-sand-50 sm:px-7 sm:py-5">
                <span>{item.q}</span>
                <ChevronIcon className="h-5 w-5 shrink-0 text-brand-600 transition group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-5 text-[15px] leading-relaxed text-ink-500 sm:px-7 sm:pb-6">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[15px] text-ink-500">
            Still not sure what your home will cost?
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-4 text-base font-bold text-white shadow-card transition hover:bg-brand-700"
          >
            <PhoneIcon className="h-5 w-5" />
            Ask us — {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
