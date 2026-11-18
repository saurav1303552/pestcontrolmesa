import { SITE } from "@/lib/site";
import { InfoIcon, PhoneIcon } from "./Icons";

/**
 * States plainly that every figure on the page is researched market average
 * rather than a quote. Repeated at the top of the table, mid-article and
 * before the contact section so it is hard to miss wherever someone lands.
 */
export default function PriceDisclaimer({
  className = "",
  id,
}: {
  className?: string;
  id?: string;
}) {
  return (
    <aside
      id={id}
      role="note"
      aria-label="Pricing disclaimer"
      className={`overflow-hidden rounded-2xl border-2 border-sun-300 bg-sun-100 ${className}`}
    >
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-5 sm:p-6">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sun-400 text-ink-950">
          <InfoIcon className="h-6 w-6" />
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-bold uppercase tracking-[0.1em] text-ink-900">
            Average pricing — not a quote
          </p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-ink-800">
            Every range on this page is an <strong>overall average for Mesa, AZ</strong>,
            put together by analysing many local pest control businesses and
            calling them to confirm what they actually charge. These figures are{" "}
            <strong>not guaranteed</strong> and your price will vary with home
            size, pest type, infestation severity and property layout.{" "}
            <strong>Call for exact pricing on your property.</strong>
          </p>
        </div>

        <a
          href={SITE.phoneHref}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-ink-900 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-ink-800"
        >
          <PhoneIcon className="h-4 w-4" />
          {SITE.phoneDisplay}
        </a>
      </div>
    </aside>
  );
}
