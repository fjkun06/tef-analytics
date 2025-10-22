import { useRef, useState } from "react";

import useClickedOutside from "@/hooks/useClickedOutside";
import { useChangeLocale, useCurrentLocale, useScopedI18n } from "@/locales/client";
import { LocaleProps } from "@/locales/locales.interface";
import constants from "@/utils/constants";

export function useLanguageSwitchController() {
  const changeLocale = useChangeLocale();
  const current = useCurrentLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const tLang = useScopedI18n("lang");

  const onSelect = (locale: LocaleProps) => {
    changeLocale(locale);
    setOpen(false);
  };

  useClickedOutside({ ref, functionToBeTriggered: () => setOpen(false) });

  const currentIcon = constants.locales.find((l) => l.code === current)?.icon ?? "";

  return {
    open,
    ref,
    current,
    languageLocales: constants.locales,
    currentIcon,
    tLang,
    setOpen,
    onSelect,
  };
}
