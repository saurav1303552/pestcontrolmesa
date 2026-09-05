import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink-900 px-6 text-center text-white">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-300">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          That page isn&apos;t here — but the prices are.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[17px] leading-relaxed text-brand-100/80">
          Head back to the Mesa, AZ pest control price list and find the
          service you need.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-sun-400 px-6 py-4 text-base font-bold text-ink-950 transition hover:bg-sun-300"
          >
            See all prices
          </Link>
          <a
            href={SITE.phoneHref}
            className="rounded-xl border border-white/25 bg-white/10 px-6 py-4 text-base font-bold text-white transition hover:bg-white/20"
          >
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </main>
  );
}
