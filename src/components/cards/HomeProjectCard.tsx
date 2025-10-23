import React from "react";

import dynamic from "next/dynamic";

import CardWrapper from "./CardWrapper";
import SkillPill from "../buttons/SkillPill";
import { HomeProjectCardProps, NumRange } from "@/interfaces/cards.interface";
import { getScopedI18n } from "@/locales/server";
import { mapAchievements } from "@/utils/functions/mapAchievements";

/**
 * HomeProjectCard component for displaying a project card with icon, year, translated title/description, achievements, and skills.
 *
 * @param year - The year of the project.
 * @param icon - The icon component name to dynamically import and display.
 * @param translationKey - The translation key prefix for this project (used for title, description, achievements).
 * @param skills - An array of skill labels to display as pills.
 * @param achievmentsCount - Number of achievements to display (default: 1).
 *
 * @example
 * <HomeProjectCard
 *   year="2023"
 *   icon="IconAnalytics"
 *   translationKey="project1"
 *   skills={["Python", "LLM"]}
 *   achievmentsCount={2}
 * />
 */
export default async function HomeProjectCard({
  year,
  icon,
  translationKey,
  skills,
  achievmentsCount,
}: HomeProjectCardProps) {
  const Icon = dynamic(() => import(`@/components/icons/${icon}`));
  const t = await getScopedI18n("home.chosenprojects");
  const t2 = (code: any, index?: number) => t(code, { count: index as NumRange<5> });
  const achievements: React.ReactElement[] = mapAchievements(
    t2,
    achievmentsCount ?? 0,
    translationKey,
  );

  return (
    <CardWrapper className="text-secondary flex w-[90%] flex-col justify-start gap-y-3 rounded-xl bg-white p-3 shadow-lg shadow-cyan-200/30 transition-all ease-in hover:scale-102 min-[380px]:w-[97%] sm:!p-0 md:max-w-[324px] md:!p-6 lg:w-[32.5%] lg:max-w-[384px]">
      <div className="flex size-full flex-col gap-y-1 p-2 sm:gap-y-3 sm:p-6">
        <div className="flex items-center gap-x-2 sm:gap-x-4">
          <span className="grid size-7 place-content-center rounded-[10px] bg-linear-to-r from-[#0cc941] to-[#3b82f6] text-white sm:size-[44px]">
            <Icon />
          </span>
          <span className="text-xs font-medium text-[#717484] sm:text-sm">{year}</span>
        </div>
        <p className="flex w-full flex-col gap-y-1 sm:gap-y-3">
          <span className="leading-6 font-medium text-black sm:text-lg">
            {t2(`${translationKey}.title`)}
          </span>
          <span className="line-clamp-3 text-xs sm:text-sm">
            {t2(`${translationKey}.description`)}
          </span>
        </p>
        {achievements.length && (
          <ul className="flex flex-col gap-y-2">{...achievements}</ul>
        )}
        {skills.length && (
          <div className="skills flex flex-wrap gap-3">
            {skills.map((skill) => (
              <SkillPill key={skill} label={skill} />
            ))}
          </div>
        )}
      </div>
    </CardWrapper>
  );
}
