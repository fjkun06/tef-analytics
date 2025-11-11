"use client";
import React from "react";
import type { ReactNode } from "react";

import { IconSpinner } from "./icons";
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
    <I18nProviderClient
      locale={locale}
      fallback={
        <main className="flex h-[70vh] w-full items-center justify-center">
          <IconSpinner /> Loading...
        </main>
      }
    >
      {children}
    </I18nProviderClient>
  );
};

export default ClientTranslationProvider;
