import React from "react";

import { LanguageSwtichDropdownProps } from "@/interfaces/langaugeswitcher.interface";
import { LocaleProps } from "@/locales/locales.interface";

function LanguageSwtichDropdown({
  current,
  onSelect,
  tLang,
  languageLocales,
  isOpen,
}: LanguageSwtichDropdownProps) {
  const openClasses = isOpen ? "" : "lg:hidden";
  return (
    <div
      className={`z-20 w-full border border-slate-100 bg-white py-1 shadow-lg sm:shadow-lg lg:absolute lg:right-0 lg:mt-2 lg:w-40 dark:border-slate-800 dark:bg-slate-900 ${openClasses}`}
    >
      {languageLocales.map((locale) => (
        <button
          key={locale.code}
          data-testid="language-dropdown-switch-button"
          type="button"
          onClick={() => onSelect(locale.code as LocaleProps)}
          className={`flex w-full cursor-pointer px-3 py-2.5 text-left text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
            current === locale.code
              ? "text-indigo-600 dark:text-indigo-400"
              : "text-slate-700 dark:text-slate-200"
          }`}
        >
          <span data-testid="data-span" className="mr-2 inline-block text-lg">
            {React.createElement(locale.icon || React.Fragment)}
          </span>
          {tLang(locale.code)}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwtichDropdown;
