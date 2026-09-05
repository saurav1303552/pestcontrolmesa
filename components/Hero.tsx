import { SITE } from "@/lib/site";
import { PRICES } from "@/lib/pricing";
import {
  PhoneIcon,
  PinIcon,
  ClockIcon,
  TagIcon,
  StarIcon,
  ShieldIcon,
  CheckIcon,
} from "./Icons";

const SNAPSHOT = [
  { label: "One-time general treatment", value: "$95–$330" },
  { label: "Monthly plan", value: "$40–$75/mo" },
  { label: "Scorpion control", value: "$100–$400" },
  { label: "Termite treatment", value: "$300–$3,300+" },
  { label: "Bed bug treatment", value: "$550–$1,650" },
  { label: "Rodent control", value: "$150–$660" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-900 text-white">
      <div className="grain absolute inset-0" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-sand-50/10"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-200 sm:text-xs">
              <ShieldIcon className="h-4 w-4" />
              Mesa, Arizona · Transparent pricing
            </p>

            <h1 className="mt-5 text-[2rem] font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Pest Control Mesa AZ Prices:{" "}
              <span className="text-brand-300">
                Termite Control, Bed Bugs &amp; Scorpion Costs
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-brand-100/85 sm:text-lg">
              Straight answers on what pest control actually costs in Mesa —
              broken down by service type, pest type and frequency.{" "}
              <strong className="font-bold text-white">{PRICES.length} services</strong>{" "}
              are priced in full below, so you see a realistic number before you
              ever pick up the phone.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-sun-400 px-6 py-4 text-base font-bold text-ink-950 shadow-lift transition hover:bg-sun-300"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {SITE.phoneDisplay}
              </a>
              <a
                href="#price-finder"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/25 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                <TagIcon className="h-5 w-5" />
                See the full price list
              </a>
            </div>

            <ul className="mt-7 grid gap-2.5 text-[15px] text-brand-100/85 sm:grid-cols-2">
              {[
                "Free inspection & written estimate",
                "No long-term contract lock-in",
                "Free re-service between visits",
                "Scorpion, termite & rodent specialists",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-sun-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* NAP block */}
            <address className="mt-8 grid gap-3 border-t border-white/15 pt-6 not-italic text-[15px] text-brand-100/80 sm:grid-cols-2">
              <p className="flex items-start gap-2.5">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                <span>
                  <span className="block font-bold text-white">{SITE.legalName}</span>
                  {SITE.address.street}, {SITE.address.city}, {SITE.address.state}{" "}
                  {SITE.address.zip}
                </span>
              </p>
              <p className="flex items-start gap-2.5">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                <span>
                  <span className="block font-bold text-white">Open today</span>
                  {SITE.hours}
                </span>
              </p>
            </address>
          </div>

          {/* Snapshot card */}
          <aside
            aria-label="Quick price snapshot"
            className="animate-fade-up rounded-2xl border border-white/12 bg-white/[0.07] p-5 backdrop-blur-md shadow-lift sm:p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-white">
                Mesa price snapshot
              </h2>
              <span className="flex items-center gap-0.5 text-sun-300" aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
            </div>
            <p className="mt-1.5 text-sm text-brand-100/70">
              Typical ranges for a 1,600–2,000 sq ft Mesa home.
            </p>

            <dl className="mt-5 divide-y divide-white/10">
              {SNAPSHOT.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 py-3"
                >
                  <dt className="text-[15px] text-brand-100/85">{item.label}</dt>
                  <dd className="whitespace-nowrap font-mono text-[15px] font-bold tabular-nums text-sun-300">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="#price-finder"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-ink-900 transition hover:bg-brand-50"
            >
              See all {PRICES.length} prices
            </a>
            <p className="mt-3 text-center text-xs text-brand-100/60">
              Most Mesa homeowners pay <strong className="text-brand-100">$120–$190</strong>{" "}
              for a one-time general treatment.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
