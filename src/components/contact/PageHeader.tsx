/**
 * PageHeader
 *
 * Async server component that renders a localized header for contact pages.
 * Displays a gradient title and description text centered on the page.
 * Uses i18n for multi-language support with customizable scope.
 *
 * @param {PageHeaderProps} props - Component props
 * @param {string} props.scope - Translation scope key for i18n (e.g., "contact.header")
 *
 * @returns {Promise<React.ReactElement>} Header section with gradient title and description
 */
import React from "react";

import { PageHeaderProps } from "@/interfaces/contact.interface";
import { getScopedI18n } from "@/locales/server";

async function PageHeader({ scope }: PageHeaderProps): Promise<React.ReactElement> {
  const t = await getScopedI18n(scope as any);

  return (
    <header className="flex w-full flex-col items-center gap-12">
      <h1 className="bg-linear-to-r from-[#2563eb] via-[#6366f1] to-[#14b8a6] bg-clip-text text-center text-4xl font-bold text-transparent sm:text-5xl">
        {t("title")}
      </h1>
      {/* <mark className="bg-slate-100/50"> */}
      <p className="text-center text-xl text-gray-600">{t("description")}</p>
      {/* </mark> */}
    </header>
  );
}

export default PageHeader;
