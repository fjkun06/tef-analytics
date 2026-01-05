/**
 * HomeSkillsSectionDetails
 *
 * Renders the skills section details, including title, content, and subtitle, with translations.
 *
 * @returns {Promise<React.ReactNode>} A flex container with translated skills section content.
 */
import React from "react";

import HomeRotateWords from "./HomeRotateWords";
import { getScopedI18n } from "@/locales/server";
import returnWordsArray from "@/utils/functions/returnWordsArray";

/**
 * Async server component that displays the details of the skills section.
 */
async function HomeSkillsSectionDetails(): Promise<React.ReactElement> {
  const t = await getScopedI18n("home.skills");
  const t2 = (key: any) => t(key);

  const words = returnWordsArray(t2);
  return (
    <div className="flex h-max flex-col items-center text-center">
      <h2 className="font-display flex flex-col items-center justify-center gap-2 text-3xl font-bold tracking-tight sm:contents sm:text-4xl">
        <span className="text-slate-900">{t2("title")}</span>
        <div className="w-full text-center max-sm:flex max-sm:justify-center sm:w-max sm:text-left">
          <HomeRotateWords words={words} />
        </div>
      </h2>
      <p className="mt-4 text-lg leading-8 text-gray-600">{t2("subtitle")}</p>
    </div>
  );
}

/**
 * Exports the HomeSkillsSectionDetails component for use in the homepage.
 */
export default HomeSkillsSectionDetails;
