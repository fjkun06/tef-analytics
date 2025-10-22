/* eslint-disable no-unused-vars */
import React from "react";

import { LocaleProps } from "@/locales/locales.interface";

export type LanguageSwtichButtonProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  current: string | null;
  currentIcon: React.ReactNode;
};

export type LanguageSwtichDropdownProps = {
  current: string;
  onSelect: (locale: LocaleProps) => void;
  tLang: (code: any) => string;
  languageLocales: { code: LocaleProps; icon?: string }[];
};
