/* eslint-disable no-unused-vars */
import React from "react";

import { LocaleProps } from "@/locales/locales.interface";

/**
 * Props for the LanguageSwitchButton component.
 * Controls the button that opens/closes language dropdown.
 * @property open - Whether dropdown is currently open
 * @property setOpen - Function to toggle dropdown state
 * @property current - Currently selected language code
 * @property currentIcon - Icon element for current language
 */
export type LanguageSwtichButtonProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  current: string | null;
  currentIcon: React.ReactNode;
};

/**
 * Props for the LanguageSwitchDropdown component.
 * Displays available language options for selection.
 * @property current - Currently selected language code
 * @property onSelect - Callback when language is selected
 * @property tLang - Translation function for language names
 * @property languageLocales - Array of available language options
 */
export type LanguageSwtichDropdownProps = {
  current: string;
  onSelect: (locale: LocaleProps) => void;
  tLang: (code: any) => string;
  languageLocales: { code: LocaleProps; icon?: string }[];
};
