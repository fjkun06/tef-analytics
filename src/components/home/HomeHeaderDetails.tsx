/**
 * HomeHeaderDetails
 *
 * Renders the header details for the homepage, including name, slogan, and description, with translations.
 *
 * @returns {Promise<React.ReactNode>} A header section with translated content.
 */
import React from "react";

import { getScopedI18n } from "@/locales/server";

/**
 * Async server component that displays the header details for the homepage.
 */
async function HomeHeaderDetails(): Promise<React.ReactElement> {
  const t = await getScopedI18n("home.header");

  return (
    <>
      <h1 className="font-display text-center text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
        <span className="mb-2 block sm:mb-4">{t("me")}</span>
        <span className="block text-lg md:text-2xl lg:text-2xl">{t("slogan")}</span>
      </h1>
      <p className="text-center text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-8 md:text-lg">
        {t("description")}
      </p>
    </>
  );
}

/**
 * Exports the HomeHeaderDetails component for use in the homepage.
 */
export default HomeHeaderDetails;
