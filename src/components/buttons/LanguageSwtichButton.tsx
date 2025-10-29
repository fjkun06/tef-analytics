/**
 * LanguageSwtichButton
 *
 * Client component that renders the main button for the language switcher.
 * Displays current language with icon and arrow indicator, handles click events
 * to toggle dropdown visibility. Includes accessibility attributes and responsive styling.
 *
 * @param {LanguageSwtichButtonProps} props - Component props
 * @param {boolean} props.open - Whether the dropdown is currently open
 * @param {Function} props.setOpen - Function to toggle dropdown open state
 * @param {string} props.current - Currently selected language code
 * @param {string} props.currentIcon - Icon/emoji for current language
 *
 * @returns {React.ReactElement} Language switcher button with current language display
 *
 * @example
 * ```tsx
 * <LanguageSwtichButton
 *   open={isOpen}
 *   setOpen={setIsOpen}
 *   current="en"
 *   currentIcon="🇺🇸"
 * />
 * ```
 */
import React from "react";

import { LanguageSwtichButtonProps } from "@/interfaces/langaugeswitcher.interface";

function LanguageSwtichButton({
  open,
  setOpen,
  current,
  currentIcon,
}: LanguageSwtichButtonProps) {
  return (
    <button
      type="button"
      data-testid="language-switch-button"
      aria-expanded={open}
      aria-haspopup="menu"
      onClick={() => setOpen((s) => !s)}
      className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-md bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800 transition hover:opacity-90 lg:inline-flex lg:w-auto dark:bg-slate-800 dark:text-slate-200"
    >
      <span className="sr-only">Change language</span>
      <span className="inline-flex items-center gap-2">
        <span className="text-lg">{currentIcon}</span>
        <span className="uppercase">
          {React.createElement(current || React.Fragment)}
        </span>
      </span>
      <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">
        {open ? "▲" : "▼"}
      </span>
    </button>
  );
}

export default LanguageSwtichButton;
