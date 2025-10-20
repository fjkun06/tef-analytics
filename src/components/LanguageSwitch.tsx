"use client";

import React, { useEffect, useRef, useState } from "react";

import { useChangeLocale, useCurrentLocale, useScopedI18n } from "@/locales/client";
import { LocaleProps } from "@/locales/locales.interface";
import constants from "@/utils/constants";
const languageLocales = constants.locales;

export function LanguageSwitch() {
  const changeLocale = useChangeLocale();
  const current = useCurrentLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const tLang = useScopedI18n("lang");

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const onSelect = (locale: LocaleProps) => {
    changeLocale(locale);
    setOpen(false);
  };

  const currentIcon = languageLocales.find((l) => l.code === current)?.icon ?? "";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between gap-2 rounded-md bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 transition hover:opacity-90 lg:inline-flex lg:w-auto dark:bg-slate-800 dark:text-slate-200"
      >
        <span className="sr-only">Change language</span>
        <span className="inline-flex items-center gap-2">
          <span className="text-lg">{currentIcon}</span>
          <span className="uppercase">{(current || "en").slice(0, 2)}</span>
        </span>
        <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">
          {open ? "▲" : "▼"}
        </span>
      </button>

      {open && (
        <div className="z-20 w-full rounded-md border border-slate-100 bg-white py-1 shadow-lg sm:shadow-lg lg:absolute lg:right-0 lg:mt-2 lg:w-40 dark:border-slate-800 dark:bg-slate-900">
          {languageLocales.map((locale) => (
            <button
              key={locale.code}
              type="button"
              onClick={() => onSelect(locale.code)}
              className={`w-full px-3 py-2 text-left text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
                current === locale.code
                  ? "text-rose-600 dark:text-rose-400"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              <span className="mr-2 inline-block text-lg">
                {(locale as any).icon ?? ""}
              </span>
              {tLang(locale.code)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitch;
