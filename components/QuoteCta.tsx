"use client";

import { useState } from "react";
import { SITE, FULL_ADDRESS, MAP_QUERY } from "@/lib/site";
import { CATEGORIES } from "@/lib/pricing";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  ChatIcon,
  CheckIcon,
} from "./Icons";

export default function QuoteCta() {
  const [service, setService] = useState("");
  const [size, setSize] = useState("");
  const [notes, setNotes] = useState("");

  const subject = encodeURIComponent(
    `Price request${service ? `: ${service}` : ""} — Mesa, AZ`,
  );
  const body = encodeURIComponent(
    [
      `Service needed: ${service || "(not specified)"}`,
      `Home size: ${size || "(not specified)"}`,
      `Details: ${notes || "(none)"}`,
      "",
      "Please send me a written price range for this job in Mesa, AZ.",
    ].join("\n"),
  );

  return (
    <section
      id="quote"
      aria-labelledby="quote-heading"
      className="scroll-mt-24 bg-ink-900 py-14 text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-300">
              Get your number
            </p>
            <h2
              id="quote-heading"
              className="text-[1.7rem] font-bold leading-tight tracking-tight sm:text-4xl"
            >
              Get a straight price for your Mesa home — today
            </h2>
            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-brand-100/85">
              Call and we'll quote it on the phone. Prefer to write it out? Fill
              in the three fields and we'll reply with a written range for your
              exact job.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-2.5 rounded-xl bg-sun-400 px-5 py-4 text-base font-bold text-ink-950 shadow-lift transition hover:bg-sun-300"
              >
                <PhoneIcon className="h-5 w-5" />
                {SITE.phoneDisplay}
              </a>
              <a
                href={`sms:+1${SITE.phone}`}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-white/25 bg-white/10 px-5 py-4 text-base font-bold text-white transition hover:bg-white/20"
              >
                <ChatIcon className="h-5 w-5" />
                Text us a photo
              </a>
            </div>

            <ul className="mt-8 space-y-4 border-t border-white/15 pt-7 text-[15px]">
              <li className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                <span>
                  <strong className="block font-bold text-white">
                    {SITE.legalName}
                  </strong>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-100/85 underline decoration-brand-400/40 underline-offset-2 transition hover:text-white"
                  >
                    {FULL_ADDRESS}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                <span className="text-brand-100/85">{SITE.hours}</span>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-brand-100/85 underline decoration-brand-400/40 underline-offset-2 transition hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur-md shadow-lift sm:p-8">
            <h3 className="text-lg font-bold text-white">Request a written price</h3>
            <p className="mt-1.5 text-sm text-brand-100/70">
              Takes about 20 seconds. No obligation, no sales calls.
            </p>

            <form
              className="mt-6 space-y-4"
              action={`mailto:${SITE.email}`}
              method="post"
              onSubmit={(event) => {
                event.preventDefault();
                window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
              }}
            >
              <div>
                <label
                  htmlFor="quote-service"
                  className="mb-1.5 block text-sm font-semibold text-brand-100"
                >
                  What service do you need?
                </label>
                <input
                  id="quote-service"
                  name="service"
                  list="quote-service-options"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="e.g. Scorpion control"
                  className="h-12 w-full rounded-xl border border-white/20 bg-white/95 px-4 text-[15px] font-medium text-ink-900 outline-none transition placeholder:text-ink-400 focus:border-sun-300 focus:ring-4 focus:ring-sun-300/25"
                />
                <datalist id="quote-service-options">
                  {CATEGORIES.map((c) => (
                    <option key={c.slug} value={c.name} />
                  ))}
                </datalist>
              </div>

              <div>
                <label
                  htmlFor="quote-size"
                  className="mb-1.5 block text-sm font-semibold text-brand-100"
                >
                  Home size
                </label>
                <select
                  id="quote-size"
                  name="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="h-12 w-full rounded-xl border border-white/20 bg-white/95 px-4 text-[15px] font-medium text-ink-900 outline-none transition focus:border-sun-300 focus:ring-4 focus:ring-sun-300/25"
                >
                  <option value="">Select square footage</option>
                  <option>Under 1,000 sq ft (condo / apartment)</option>
                  <option>1,000–1,600 sq ft</option>
                  <option>1,600–2,000 sq ft</option>
                  <option>2,000–2,500 sq ft</option>
                  <option>2,500+ sq ft</option>
                  <option>Commercial property</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="quote-notes"
                  className="mb-1.5 block text-sm font-semibold text-brand-100"
                >
                  What are you seeing?
                </label>
                <textarea
                  id="quote-notes"
                  name="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Scorpions in the garage at night, a few every week…"
                  className="w-full rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-[15px] font-medium text-ink-900 outline-none transition placeholder:text-ink-400 focus:border-sun-300 focus:ring-4 focus:ring-sun-300/25"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-sun-400 px-5 py-4 text-base font-bold text-ink-950 shadow-card transition hover:bg-sun-300"
              >
                Send my price request
              </button>

              <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 pt-1 text-[13px] text-brand-100/70">
                {["Free inspection", "Written estimate", "No contract"].map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <CheckIcon className="h-3.5 w-3.5 text-sun-300" />
                    {t}
                  </li>
                ))}
              </ul>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
