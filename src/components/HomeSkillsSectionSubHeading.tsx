/**
 * HomeSkillsSectionSubHeading
 *
 * Renders the subheading for the skills section, translated using i18n.
 *
 * @returns {Promise<React.ReactNode>} A heading element with translated subheading text.
 */
import React from "react";

import { getScopedI18n } from "@/locales/server";

/**
 * Async server component that displays the subheading for the skills section.
 */
async function HomeSkillsSectionSubHeading(): Promise<React.ReactElement> {
  const t = await getScopedI18n("home.skills");

  return (
    <h3 className="mb-4 text-center text-sm font-semibold text-gray-900 capitalize sm:mb-6 sm:text-lg">
      {t("subheading")}
    </h3>
  );
}

/**
 * Exports the HomeSkillsSectionSubHeading component for use in the homepage.
 */
export default HomeSkillsSectionSubHeading;
