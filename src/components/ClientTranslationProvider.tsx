"use client";
import React from "react";
import type { ReactNode } from "react";

import { I18nProviderClient } from "@/locales/client";

type ClientTranslationProviderProps = {
  locale: string;
  children: ReactNode;
};
const ClientTranslationProvider = ({
  locale,
  children,
}: ClientTranslationProviderProps) => {
  return (
    <I18nProviderClient locale={locale} fallback={<p>Loading...</p>}>
      {children}
    </I18nProviderClient>
  );
};

export default ClientTranslationProvider;
