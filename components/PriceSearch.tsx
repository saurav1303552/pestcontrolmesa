"use client";

import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  CATEGORIES,
  CATEGORY_NAMES,
  PRICES,
  SYNONYMS,
  type PriceRow,
} from "@/lib/pricing";
import { SITE } from "@/lib/site";
import {
  SearchIcon,
  CloseIcon,
  PhoneIcon,
  TagIcon,
  ArrowIcon,
  CheckIcon,
} from "./Icons";

const QUICK_PICKS = [
  "Scorpions",
  "Termites",
  "Bed bugs",
  "Roaches",
  "Rodents",
  "Ants",
  "Monthly plan",
  "One-time treatment",
  "Bees & wasps",
  "Free inspection",
];

/* ------------------------------ search engine ----------------------------- */

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[–—]/g, " ")
    .replace(/[^a-z0-9+ ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function singular(token: string) {
  if (token.length > 3 && token.endsWith("ies")) return `${token.slice(0, -3)}y`;
  if (token.length > 3 && token.endsWith("es")) return token.slice(0, -2);
  if (token.length > 3 && token.endsWith("s")) return token.slice(0, -1);
  return token;
}

const STOP_WORDS = new Set([
  "the", "a", "an", "for", "of", "in", "my", "me", "i", "to", "is", "how", "much",
  "does", "do", "it", "and", "with", "on", "near", "az", "arizona", "mesa",
  "pest", "control", "service", "services", "cost", "costs", "price", "prices",
  "pricing", "need", "want", "looking", "get", "rid",
]);

function expand(token: string): string[] {
  const out = new Set<string>([token, singular(token)]);
  for (const key of [token, singular(token)]) {
    const mapped = SYNONYMS[key];
    if (mapped) mapped.filter(Boolean).forEach((m) => out.add(m));
  }
  return [...out];
}

type Indexed = PriceRow & {
  _service: string;
  _aliases: string;
  _category: string;
};

const INDEX: Indexed[] = PRICES.map((row) => ({
  ...row,
  _service: normalize(row.service),
  _aliases: normalize((row.aliases ?? []).join(" ")),
  _category: normalize(CATEGORY_NAMES[row.category] ?? row.category),
}));

function scoreRow(row: Indexed, rawQuery: string, tokens: string[]): number {
  if (!tokens.length) return 0;
  let score = 0;

  if (row._service === rawQuery) score += 1200;
  else if (row._service.startsWith(rawQuery)) score += 600;
  else if (rawQuery.length > 2 && row._service.includes(rawQuery)) score += 380;
  if (rawQuery.length > 2 && row._aliases.includes(rawQuery)) score += 260;

  const words = row._service.split(" ");
  let matched = 0;

  for (const token of tokens) {
    const variants = expand(token);
    let best = 0;
    for (const v of variants) {
      if (!v) continue;
      if (words.includes(v)) best = Math.max(best, 90);
      else if (words.some((w) => w.startsWith(v) && v.length >= 3))
        best = Math.max(best, 70);
      else if (v.length >= 4 && row._service.includes(v)) best = Math.max(best, 55);
      else if (row._aliases.includes(v) && v.length >= 3) best = Math.max(best, 45);
      else if (row._category.includes(v) && v.length >= 3) best = Math.max(best, 28);
    }
    if (best > 0) matched += 1;
    score += best;
  }

  // Every meaningful word the visitor typed should land somewhere.
  if (matched < tokens.length) score -= (tokens.length - matched) * 55;
  // Prefer the shorter, more canonical service name on ties.
  score -= row._service.length * 0.08;

  return score;
}

function useSearch(query: string, category: string) {
  return useMemo(() => {
    const raw = normalize(query);
    const allTokens = raw.split(" ").filter(Boolean);
    const tokens = allTokens.filter((t) => !STOP_WORDS.has(t));
    const effective = tokens.length ? tokens : allTokens;

    const pool = category === "all"
      ? INDEX
      : INDEX.filter((r) => r.category === category);

    if (!raw || !effective.length) {
      return { rows: pool as PriceRow[], searching: false };
    }

    const scored = pool
      .map((row) => ({ row, score: scoreRow(row, raw, effective) }))
      .filter((entry) => entry.score > 20)
      .sort((a, b) => b.score - a.score);

    return { rows: scored.map((s) => s.row), searching: true };
  }, [query, category]);
}

/* --------------------------------- pieces --------------------------------- */

function PriceCell({ price }: { price: string }) {
  return (
    <span className="whitespace-nowrap font-mono text-[15px] font-bold tabular-nums text-brand-700">
      {price}
    </span>
  );
}

function RowCta({ service }: { service: string }) {
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

/* ------------------------------- main widget ------------------------------ */

export default function PriceSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [visible, setVisible] = useState(60);
  const [stuck, setStuck] = useState(false);

  const deferredQuery = useDeferredValue(query);
  const { rows, searching } = useSearch(deferredQuery, category);
  const inputRef = useRef<HTMLInputElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  // Holds the query we owe a scroll to, so we only move the viewport once the
  // filtered rows for that exact query have been committed.
  const pendingScroll = useRef<string | null>(null);
  const [submitToken, setSubmitToken] = useState(0);

  const scrollToResults = useCallback(() => {
    document
      .getElementById("results-heading")
      ?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, []);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return rows.slice(0, 6);
  }, [query, rows]);

  useEffect(() => {
    setVisible(60);
    setActiveIndex(-1);
  }, [deferredQuery, category]);

  // Filtering shortens the page, so wait for the new rows to land before
  // moving the viewport — otherwise the browser keeps a now-stale offset.
  useEffect(() => {
    if (pendingScroll.current === null) return;
    if (pendingScroll.current !== deferredQuery) return;
    pendingScroll.current = null;
    const frame = requestAnimationFrame(scrollToResults);
    return () => cancelAnimationFrame(frame);
  }, [submitToken, deferredQuery, rows, scrollToResults]);

  // Once the bar sticks to the header there is very little room left on a
  // phone, so the chip rail and category select fold away.
  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!boxRef.current?.contains(event.target as Node)) setShowSuggestions(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const runSearch = useCallback((value: string) => {
    pendingScroll.current = value;
    setSubmitToken((t) => t + 1);
    setQuery(value);
    setCategory("all");
    setShowSuggestions(false);
    inputRef.current?.blur();
  }, []);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setShowSuggestions(false);
      return;
    }
    if (!suggestions.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setShowSuggestions(true);
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        runSearch(suggestions[activeIndex].service);
      } else {
        // Submitting the typed text: close the keyboard and jump to the table.
        pendingScroll.current = query;
        setSubmitToken((t) => t + 1);
        setShowSuggestions(false);
        inputRef.current?.blur();
      }
    }
  };

  const grouped = useMemo(() => {
    if (searching) return null;
    const map = new Map<string, PriceRow[]>();
    for (const row of rows) {
      const list = map.get(row.category);
      if (list) list.push(row);
      else map.set(row.category, [row]);
    }
    return [...map.entries()];
  }, [rows, searching]);

  const shown = searching ? rows.slice(0, visible) : rows;
  const hasMore = searching && rows.length > visible;
  const mixedCategories = new Set(shown.map((r) => r.category)).size > 1;

  return (
    <section
      id="price-finder"
      aria-labelledby="price-finder-heading"
      className="scroll-mt-24 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
            <TagIcon className="h-4 w-4" />
            {PRICES.length} services priced
          </span>
          <h2
            id="price-finder-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl"
          >
            Typical Pest Control Prices in Mesa, AZ
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink-500">
            Below, we break down pest control prices in Mesa AZ by service type,
            pest type and frequency, so you can expect realistic numbers before
            picking up the phone.
          </p>
          <p className="mt-6 text-xl font-bold text-ink-900 sm:text-2xl">
            What service are you looking for?
          </p>
          <p className="mt-1.5 text-[15px] text-ink-500">
            Type the pest or the service — scorpions, termite inspection, monthly
            plan — and the table updates to show exactly that.
          </p>
        </div>

        {/* Sticky scope: the search bar stops following once the table ends. */}
        <div>
        {/* Search box */}
        <div ref={sentinelRef} aria-hidden className="h-px w-full" />
        <div
          ref={boxRef}
          className="sticky top-[68px] z-30 mt-8 rounded-2xl border border-sand-300 bg-sand-50/95 p-3 shadow-card backdrop-blur-md sm:p-4"
        >
          <label htmlFor="service-search" className="sr-only">
            Search pest control services and prices in Mesa, AZ
          </label>
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-600" />
            <input
              id="service-search"
              ref={inputRef}
              type="search"
              inputMode="search"
              enterKeyHint="search"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              role="combobox"
              aria-expanded={showSuggestions && suggestions.length > 0}
              aria-controls="search-suggestions"
              aria-autocomplete="list"
              aria-activedescendant={
                activeIndex >= 0 ? `suggestion-${activeIndex}` : undefined
              }
              placeholder="Search a service, e.g. scorpion control"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onKeyDown={onKeyDown}
              className="h-14 w-full rounded-xl border border-sand-300 bg-white pl-12 pr-12 text-base font-medium text-ink-900 shadow-sm outline-none transition placeholder:text-ink-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 sm:h-16 sm:text-lg"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setShowSuggestions(false);
                  inputRef.current?.focus();
                }}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-ink-400 transition hover:bg-sand-100 hover:text-ink-800"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            )}

            {showSuggestions && suggestions.length > 0 && (
              <ul
                id="search-suggestions"
                role="listbox"
                aria-label="Matching services"
                className="absolute inset-x-0 top-full z-40 mt-2 max-h-[60vh] overflow-y-auto overflow-x-hidden rounded-xl border border-sand-300 bg-white shadow-lift"
              >
                {suggestions.map((row, index) => (
                  <li key={row.service} role="none">
                    <button
                      type="button"
                      id={`suggestion-${index}`}
                      role="option"
                      aria-selected={index === activeIndex}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => runSearch(row.service)}
                      className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition ${
                        index === activeIndex ? "bg-brand-50" : "bg-white"
                      }`}
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-[15px] font-semibold text-ink-900">
                          {row.service}
                        </span>
                        <span className="block truncate text-xs text-ink-400">
                          {CATEGORY_NAMES[row.category]}
                        </span>
                      </span>
                      <PriceCell price={row.price} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Quick picks + category select */}
          <div
            className={`flex flex-col gap-3 overflow-hidden transition-all duration-200 sm:mt-3! sm:max-h-none! sm:flex-row sm:items-center sm:opacity-100 ${
              stuck ? "mt-0 max-h-0 opacity-0" : "mt-3 max-h-52 opacity-100"
            }`}
          >
            <div className="-mx-1 flex snap-x flex-nowrap gap-2 overflow-x-auto px-1 pb-1 sm:flex-1 sm:flex-wrap sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {QUICK_PICKS.map((pick) => {
                const active = query.toLowerCase() === pick.toLowerCase();
                return (
                  <button
                    key={pick}
                    type="button"
                    onClick={() => (active ? setQuery("") : runSearch(pick))}
                    className={`snap-start whitespace-nowrap rounded-full border px-3.5 py-2 text-[13px] font-semibold transition ${
                      active
                        ? "border-brand-600 bg-brand-600 text-white"
                        : "border-sand-300 bg-white text-ink-700 hover:border-brand-500/60 hover:text-brand-700"
                    }`}
                  >
                    {pick}
                  </button>
                );
              })}
            </div>
            <div className="sm:w-56">
              <label htmlFor="category-filter" className="sr-only">
                Filter by category
              </label>
              <select
                id="category-filter"
                value={category}
                onChange={(e) => {
                  if (e.target.value !== "all") {
                    pendingScroll.current = "";
                    setSubmitToken((t) => t + 1);
                  }
                  setCategory(e.target.value);
                  setQuery("");
                }}
                className="h-11 w-full rounded-xl border border-sand-300 bg-white px-3 text-sm font-semibold text-ink-800 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
              >
                <option value="all">All categories</option>
                {CATEGORIES.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-sand-300 pb-3">
            <h3
              id="results-heading"
              className="scroll-mt-40 text-lg font-bold text-ink-900 sm:scroll-mt-[14.5rem]"
            >
              {searching
                ? `Prices matching “${deferredQuery.trim()}”`
                : category === "all"
                  ? "Full Mesa, AZ pest control price list"
                  : CATEGORY_NAMES[category]}
            </h3>
            <p aria-live="polite" className="text-sm font-medium text-ink-500">
              {rows.length === 0
                ? "No matching services"
                : `Showing ${shown.length} of ${PRICES.length} services`}
            </p>
          </div>

          {rows.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-sand-300 bg-sand-100 p-8 text-center">
              <p className="text-lg font-bold text-ink-900">
                We price that one over the phone.
              </p>
              <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-ink-500">
                Nothing in the list matched “{deferredQuery.trim()}”. Try a
                simpler word like “roach”, “rat” or “termite” — or tell us what
                you are seeing and we will quote it in about two minutes.
              </p>
              <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-card transition hover:bg-brand-700"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call {SITE.phoneDisplay}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setCategory("all");
                    inputRef.current?.focus();
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-sand-300 bg-white px-5 py-3 text-sm font-bold text-ink-800 transition hover:bg-sand-100"
                >
                  Reset the search
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Mobile: cards */}
              <ul className="mt-4 space-y-2.5 md:hidden">
                {shown.map((row) => (
                  <li
                    key={row.service}
                    className="flex items-center justify-between gap-3 rounded-xl border border-sand-300 bg-white p-4 shadow-card"
                  >
                    <div className="min-w-0">
                      <p className="text-[15px] font-semibold leading-snug text-ink-900">
                        {row.service}
                      </p>
                      {(!searching || mixedCategories) && (
                        <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-brand-600">
                          {CATEGORY_NAMES[row.category]}
                        </p>
                      )}
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-2">
                      <PriceCell price={row.price} />
                      <RowCta service={row.service} />
                    </div>
                  </li>
                ))}
              </ul>

              {/* Desktop: table */}
              <div className="mt-4 hidden overflow-hidden rounded-2xl border border-sand-300 bg-white shadow-card md:block">
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
                  {searching || grouped === null ? (
                    <tbody>
                      {shown.map((row, i) => (
                        <tr
                          key={row.service}
                          className={
                            i % 2 === 0 ? "bg-white" : "bg-sand-50/70"
                          }
                        >
                          <th
                            scope="row"
                            className="border-t border-sand-200 px-5 py-3 text-[15px] font-semibold text-ink-900"
                          >
                            {row.service}
                            {mixedCategories && (
                              <span className="mt-0.5 block text-[11px] font-bold uppercase tracking-wider text-brand-600">
                                {CATEGORY_NAMES[row.category]}
                              </span>
                            )}
                          </th>
                          <td className="border-t border-sand-200 px-5 py-3">
                            <PriceCell price={row.price} />
                          </td>
                          <td className="border-t border-sand-200 px-5 py-3 text-right">
                            <RowCta service={row.service} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    grouped.map(([slug, list]) => (
                      <tbody key={slug}>
                        <tr>
                          <th
                            scope="colgroup"
                            colSpan={3}
                            className="border-t border-sand-200 bg-brand-50 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-800"
                          >
                            {CATEGORY_NAMES[slug]}
                          </th>
                        </tr>
                        {list.map((row, i) => (
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
                              <PriceCell price={row.price} />
                            </td>
                            <td className="border-t border-sand-200 px-5 py-3 text-right">
                              <RowCta service={row.service} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    ))
                  )}
                </table>
              </div>

              {hasMore && (
                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={() => setVisible((v) => v + 60)}
                    className="inline-flex items-center gap-2 rounded-xl border border-sand-300 bg-white px-5 py-3 text-sm font-bold text-ink-800 transition hover:border-brand-500/60 hover:text-brand-700"
                  >
                    Show more results
                    <ArrowIcon className="h-4 w-4 rotate-90" />
                  </button>
                </div>
              )}
            </>
          )}
          </div>
        </div>

        {/* Inline conversion block under the table */}
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
                  <CheckIcon className="h-4 w-4 text-sun-300" /> Free inspection
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
