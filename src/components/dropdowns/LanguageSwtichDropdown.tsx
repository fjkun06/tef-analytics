/**
 * LanguageSwtichDropdown
 *
 * Client component that renders the dropdown menu for language selection.
 * Displays available language options with icons, handles selection events,
 * and provides visual feedback for the currently selected language.
 *
 * @param {LanguageSwtichDropdownProps} props - Component props
 * @param {string} props.current - Currently selected language code
 * @param {Function} props.onSelect - Callback function when language is selected
 * @param {Function} props.tLang - Translation function for language names
 * @param {Array} props.languageLocales - Array of available language locale objects
 *
 * @returns {React.ReactElement} Dropdown menu with language options
 *
 * @example
 * ```tsx
 * <LanguageSwtichDropdown
 *   current="en"
 *   onSelect={handleLanguageChange}
 *   tLang={translateFunction}
 *   languageLocales={locales}
 * />
 * ```
 */
import React from "react";

import { LanguageSwtichDropdownProps } from "@/interfaces/langaugeswitcher.interface";

function LanguageSwtichDropdown({
  current,
  onSelect,
  tLang,
  languageLocales,
}: LanguageSwtichDropdownProps) {
  return (
    <div className="z-20 w-full border border-slate-100 bg-white py-1 shadow-lg sm:shadow-lg lg:absolute lg:right-0 lg:mt-2 lg:w-40 dark:border-slate-800 dark:bg-slate-900">
      {languageLocales.map((locale) => (
        <button
          key={locale.code}
          data-testid="language-dropdown-switch-button"
          type="button"
          onClick={() => onSelect(locale.code)}
          className={`w-full cursor-pointer px-3 py-2 text-left text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
            current === locale.code
              ? "text-rose-600 dark:text-rose-400"
              : "text-slate-700 dark:text-slate-200"
          }`}
        >
          <span data-testid="data-span" className="mr-2 inline-block text-lg">
            {(locale as any).icon}
          </span>
          {tLang(locale.code)}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwtichDropdown;
