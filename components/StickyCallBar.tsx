"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { PhoneIcon, SearchIcon } from "./Icons";

export default function StickyCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink-800 bg-ink-900/97 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-2.5 px-3 py-2.5">
        <a
          href={SITE.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-sun-400 px-4 py-3.5 text-[15px] font-bold whitespace-nowrap text-ink-950"
        >
          <PhoneIcon className="h-5 w-5" />
          Call now
        </a>
        <a
          href="#price-finder"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-[15px] font-bold whitespace-nowrap text-white"
        >
          <SearchIcon className="h-5 w-5" />
          Find price
        </a>
      </div>
    </div>
  );
}
