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
        <span className="uppercase">{(current || "en").slice(0, 2)}</span>
      </span>
      <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">
        {open ? "▲" : "▼"}
      </span>
    </button>
  );
}

export default LanguageSwtichButton;
