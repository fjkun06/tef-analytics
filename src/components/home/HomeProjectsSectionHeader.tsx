import React from "react";

import { getScopedI18n } from "@/locales/server";

async function HomeProjectsSectionHeader() {
  const t = await getScopedI18n("home.chosenprojects");
  return (
    <div className="text-center">
      <h2 className="font-display text-2xl font-bold tracking-tight text-gray-900 capitalize sm:text-3xl md:text-4xl">
        {t("title")}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:mt-4 sm:text-base sm:leading-8 md:text-lg">
        {t("subtitle")}
      </p>
    </div>
  );
}

export default HomeProjectsSectionHeader;
