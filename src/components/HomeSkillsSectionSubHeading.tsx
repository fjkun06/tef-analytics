import React from "react";

import { getScopedI18n } from "@/locales/server";

async function HomeSkillsSectionSubHeading() {
  const t = await getScopedI18n("home.skills");

  return (
    <h3 className="mb-4 text-center text-sm font-semibold text-gray-900 capitalize sm:mb-6 sm:text-lg">
      {t("subheading")}
    </h3>
  );
}

export default HomeSkillsSectionSubHeading;
