import React from "react";

import { PageHeaderProps } from "@/interfaces/contact.interface";
import { getScopedI18n } from "@/locales/server";
//11
async function PageHeader({ scope }: PageHeaderProps) {
  const t = await getScopedI18n(scope as any);

  return (
    <header className="flex w-full flex-col items-center gap-12">
      <h1 className="bg-linear-to-r from-[#2563eb] via-[#6366f1] to-[#14b8a6] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
        {t("title")}
      </h1>
      <p className="text-center text-xl text-gray-600">{t("description")}</p>
    </header>
  );
}

export default PageHeader;
