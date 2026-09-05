"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { PhoneIcon, MenuIcon, CloseIcon, PinIcon } from "./Icons";

const NAV = [
  { href: "#price-finder", label: "Price List" },
  { href: "#cost-factors", label: "Cost Factors" },
  { href: "#specialty", label: "Specialty Pests" },
  { href: "#plans", label: "Plans" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top utility strip */}
      <div className="hidden bg-ink-900 text-brand-100 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-[13px]">
          <p className="flex items-center gap-2">
            <PinIcon className="h-4 w-4 text-brand-300" />
            <span>
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state}{" "}
              {SITE.address.zip}
            </span>
          </p>
          <p className="flex items-center gap-4">
            <span className="text-brand-200/80">{SITE.hours}</span>
            <a
              href={SITE.phoneHref}
              className="font-semibold text-white transition hover:text-sun-300"
            >
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-sand-300/80 bg-sand-50/95 backdrop-blur-md shadow-card"
            : "border-transparent bg-sand-50"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3" aria-label={SITE.name}>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-700 text-sm font-bold tracking-tight text-white shadow-card">
              PC
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-bold tracking-tight text-ink-900 sm:text-base">
                Pest Control Mesa AZ
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-600">
                Prices
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-brand-50 hover:text-brand-700"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={SITE.phoneHref}
              className="hidden items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-card transition hover:bg-brand-700 sm:inline-flex"
            >
              <PhoneIcon className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
            <a
              href="#price-finder"
              className="hidden rounded-xl border border-brand-600/25 bg-white px-4 py-2.5 text-sm font-bold text-brand-700 transition hover:border-brand-600/50 hover:bg-brand-50 xl:inline-flex"
            >
              See prices
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 place-items-center rounded-xl border border-sand-300 bg-white text-ink-800 lg:hidden"
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink-950/50"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-0 max-h-[92vh] overflow-y-auto rounded-b-3xl bg-sand-50 p-5 shadow-lift"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-xl border border-sand-300 bg-white"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <ul className="space-y-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3.5 text-base font-semibold text-ink-800 transition hover:bg-brand-50"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-3 border-t border-sand-300 pt-5">
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3.5 text-base font-bold text-white"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {SITE.phoneDisplay}
              </a>
              <a
                href="#price-finder"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-brand-600/30 bg-white px-4 py-3.5 text-base font-bold text-brand-700"
              >
                Search 250+ prices
              </a>
              <p className="pt-1 text-center text-xs text-ink-500">
                {SITE.address.street}, {SITE.address.city}, {SITE.address.state}{" "}
                {SITE.address.zip}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
