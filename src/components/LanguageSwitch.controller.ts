import { useRef, useState } from "react";

import { IconDeutschland, IconEngland, IconFrance } from "./icons";
import useClickedOutside from "@/hooks/useClickedOutside";
import { useChangeLocale, useCurrentLocale, useScopedI18n } from "@/locales/client";
import { LocaleProps } from "@/locales/locales.interface";
export const locales = [
  { code: "en" as const, icon: IconEngland },
  { code: "de" as const, icon: IconDeutschland },
  { code: "fr" as const, icon: IconFrance },
];

export function useLanguageSwitchController() {
  const changeLocale = useChangeLocale({ preserveSearchParams: true });
  const current = useCurrentLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const tLang = useScopedI18n("lang");

  const onSelect = (locale: LocaleProps) => {
    changeLocale(locale);
    setOpen(false);
  };

  useClickedOutside({ ref, functionToBeTriggered: () => setOpen(false) });

  const currentIcon = locales.find((l) => l.code === current)?.icon;

  return {
    open,
    ref,
    current,
    languageLocales: locales,
    currentIcon,
    tLang,
    setOpen,
    onSelect,
  };
}
