import { CATEGORIES, CATEGORY_NAMES, PRICES, type PriceRow } from "@/lib/pricing";
import { SITE } from "@/lib/site";
import { PhoneIcon, TagIcon, CheckIcon } from "./Icons";
import PriceDisclaimer from "./PriceDisclaimer";
import SectionPhoto from "./SectionPhoto";
import { PHOTOS } from "@/lib/images";

/** Rows grouped into the order the categories are declared in. */
const GROUPS: { slug: string; name: string; rows: PriceRow[] }[] = CATEGORIES.map(
  (category) => ({
    slug: category.slug,
    name: category.name,
    rows: PRICES.filter((row) => row.category === category.slug),
  }),
).filter((group) => group.rows.length > 0);

function Price({ children }: { children: string }) {
  return (
    <span className="whitespace-nowrap font-mono text-[15px] font-bold tabular-nums text-brand-700">
      {children}
    </span>
  );
}

function QuoteLink({ service }: { service: string }) {
  return (
    <a
      href={SITE.phoneHref}
      aria-label={`Call for a ${service} quote`}
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-brand-600/25 bg-white px-3 py-1.5 text-xs font-bold text-brand-700 transition hover:border-brand-600/60 hover:bg-brand-50"
    >
      <PhoneIcon className="h-3.5 w-3.5" />
      Get quote
    </a>
  );
}

export default function PriceTable() {
  return (
    <section
      id="price-finder"
      aria-labelledby="price-table-heading"
      className="scroll-mt-24 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
            <TagIcon className="h-4 w-4" />
            {PRICES.length} services priced
          </span>
          <h2
            id="price-table-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl"
          >
            Typical Pest Control Prices in Mesa, AZ
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink-500">
            Below, we break down pest control prices in Mesa AZ by service type,
            pest type and frequency, so you can expect realistic numbers before
            picking up the phone.
          </p>
        </div>

        <SectionPhoto
          photo={PHOTOS.priceCard}
          className="mt-9"
          sizes="(min-width: 1280px) 1152px, 100vw"
        />

        <PriceDisclaimer className="mt-9" />

        {/* Jump to a category. The mobile and desktop layouts are separate
            DOM, so each gets its own anchor set — one shared id across both
            would resolve to whichever copy is hidden at that breakpoint. */}
        <nav
          aria-label="Jump to a price category"
          className="mt-9 rounded-2xl border border-sand-300 bg-sand-50 p-4 sm:p-5"
        >
          <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink-500">
            Jump to a category
          </h3>
          {(["m", "d"] as const).map((layout) => (
            <ul
              key={layout}
              className={`mt-3 flex flex-wrap gap-2 ${
                layout === "m" ? "md:hidden" : "hidden md:flex"
              }`}
            >
              {GROUPS.map((group) => (
                <li key={group.slug}>
                  <a
                    href={`#${layout}-prices-${group.slug}`}
                    className="inline-block rounded-full border border-sand-300 bg-white px-3.5 py-2 text-[13px] font-semibold text-ink-700 transition hover:border-brand-500/60 hover:text-brand-700"
                  >
                    {group.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        {/* Mobile: grouped cards */}
        <div className="mt-8 space-y-8 md:hidden">
          {GROUPS.map((group) => (
            <section
              key={group.slug}
              id={`m-prices-${group.slug}`}
              aria-labelledby={`m-heading-${group.slug}`}
            >
              <h3
                id={`m-heading-${group.slug}`}
                className="rounded-lg bg-brand-50 px-3 py-2 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-800"
              >
                {group.name}
              </h3>
              <ul className="mt-2.5 space-y-2.5">
                {group.rows.map((row) => (
                  <li
                    key={row.service}
                    className="flex items-center justify-between gap-3 rounded-xl border border-sand-300 bg-white p-4 shadow-card"
                  >
                    <p className="min-w-0 text-[15px] font-semibold leading-snug text-ink-900">
                      {row.service}
                    </p>
                    <div className="flex shrink-0 flex-col items-end gap-2">
                      <Price>{row.price}</Price>
                      <QuoteLink service={row.service} />
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Desktop: one table, grouped by category */}
        <div className="mt-8 hidden overflow-hidden rounded-2xl border border-sand-300 bg-white shadow-card md:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              Average pest control prices in Mesa, Arizona by service type
            </caption>
            <colgroup>
              <col className="w-[54%]" />
              <col className="w-[26%]" />
              <col className="w-[20%]" />
            </colgroup>
            <thead>
              <tr className="bg-ink-900 text-white">
                <th scope="col" className="px-5 py-3.5 text-sm font-bold">
                  Pest Control Service
                </th>
                <th scope="col" className="px-5 py-3.5 text-sm font-bold">
                  Average Price in Mesa, AZ
                </th>
                <th scope="col" className="px-5 py-3.5 text-right text-sm font-bold">
                  <span className="sr-only">Request a quote</span>
                </th>
              </tr>
            </thead>
            {GROUPS.map((group) => (
              <tbody key={group.slug} id={`d-prices-${group.slug}`}>
                <tr>
                  <th
                    scope="colgroup"
                    colSpan={3}
                    className="border-t border-sand-200 bg-brand-50 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-800"
                  >
                    {group.name}
                  </th>
                </tr>
                {group.rows.map((row, i) => (
                  <tr
                    key={row.service}
                    className={i % 2 === 0 ? "bg-white" : "bg-sand-50/70"}
                  >
                    <th
                      scope="row"
                      className="border-t border-sand-200 px-5 py-3 text-[15px] font-semibold text-ink-900"
                    >
                      {row.service}
                    </th>
                    <td className="border-t border-sand-200 px-5 py-3">
                      <Price>{row.price}</Price>
                    </td>
                    <td className="border-t border-sand-200 px-5 py-3 text-right">
                      <QuoteLink service={row.service} />
                    </td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>

        {/* Conversion block under the table */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-ink-900 text-white shadow-lift">
          <div className="grain flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-lg font-bold sm:text-xl">
                Found your service? Lock in the exact number.
              </p>
              <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-brand-100/85">
                Give us your square footage and the pest — we quote the flat
                price on the call, with no on-site upsell and no contract
                lock-in.
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] font-medium text-brand-200">
                <li className="flex items-center gap-1.5">
                  <CheckIcon className="h-4 w-4 text-sun-300" /> Upfront pricing
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckIcon className="h-4 w-4 text-sun-300" /> Free re-service
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckIcon className="h-4 w-4 text-sun-300" /> No long-term contract
                </li>
              </ul>
            </div>
            <a
              href={SITE.phoneHref}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-sun-400 px-6 py-4 text-base font-bold text-ink-950 shadow-card transition hover:bg-sun-300"
            >
              <PhoneIcon className="h-5 w-5" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        <p className="mt-4 text-center text-xs leading-relaxed text-ink-400">
          Prices are typical Mesa, AZ ranges for planning purposes and are not a
          binding quote. Final pricing depends on home size, pest type,
          infestation severity and property layout.
        </p>
      </div>
    </section>
  );
}
