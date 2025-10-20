"use client";

import React, { useEffect, useRef, useState } from "react";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";

const LOCALES = [
  { code: "en" as const, label: "English" },
  { code: "de" as const, label: "Deutsch" },
];

export function LanguageSwitch() {
  const changeLocale = useChangeLocale(/* { preserveSearchParams: true } */);
  const current = useCurrentLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const onSelect = (locale: (typeof LOCALES)[number]["code"]) => {
    changeLocale(locale);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((s) => !s)}
        className="hidden items-center gap-2 rounded-md bg-slate-50 px-3 py-1 text-sm font-medium text-slate-800 transition hover:opacity-90 sm:inline-flex dark:bg-slate-800 dark:text-slate-200"
      >
        <span className="sr-only">Change language</span>
        <span className="uppercase">{(current || "en").slice(0, 2)}</span>
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-2 w-40 rounded-md border border-slate-100 bg-white py-1 shadow-lg dark:border-slate-800 dark:bg-slate-900">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => onSelect(l.code)}
              className={`w-full px-3 py-2 text-left text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
                current === l.code
                  ? "text-rose-600 dark:text-rose-400"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitch;
