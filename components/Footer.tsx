import { SITE, FULL_ADDRESS, MAP_QUERY } from "@/lib/site";
import { CATEGORIES } from "@/lib/pricing";
import { PhoneIcon, PinIcon, ClockIcon, MailIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand-300 bg-sand-100 pb-24 pt-14 lg:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-700 text-sm font-bold text-white">
                PC
              </span>
              <span className="leading-tight">
                <span className="block text-base font-bold tracking-tight text-ink-900">
                  Pest Control Mesa AZ
                </span>
                <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-brand-600">
                  Prices
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink-500">
              Transparent, published pest control pricing for Mesa, Arizona
              homeowners and property managers — scorpions, termites, bed bugs,
              rodents and everything in between.
            </p>

            <address className="mt-6 space-y-3 not-italic text-[15px] text-ink-500">
              <p className="flex items-start gap-2.5">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-brand-700"
                >
                  <span className="block font-bold text-ink-900">
                    {SITE.legalName}
                  </span>
                  {FULL_ADDRESS}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <PhoneIcon className="h-5 w-5 shrink-0 text-brand-600" />
                <a
                  href={SITE.phoneHref}
                  className="font-bold text-ink-900 transition hover:text-brand-700"
                >
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <MailIcon className="h-5 w-5 shrink-0 text-brand-600" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition hover:text-brand-700"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <span>{SITE.hours}</span>
              </p>
            </address>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ink-900">
              Prices by category
            </h2>
            <ul className="mt-4 grid gap-2 text-[15px] text-ink-500 sm:grid-cols-2 md:grid-cols-1">
              {CATEGORIES.slice(0, 11).map((c) => (
                <li key={c.slug}>
                  <a
                    href="#price-finder"
                    className="transition hover:text-brand-700"
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-ink-900">
              Areas we price
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SITE.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-sand-300 bg-white px-3 py-1.5 text-[13px] font-medium text-ink-700"
                >
                  {area}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5">
              <p className="text-[15px] font-bold text-ink-900">
                Ready for a real number?
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
              >
                <PhoneIcon className="h-4 w-4" />
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-sand-300 pt-6 text-[13px] text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p>
            Prices shown are typical Mesa, AZ ranges for planning and are not a
            binding quote.
          </p>
        </div>
      </div>
    </footer>
  );
}
