import React from "react";

import dynamic from "next/dynamic";

import CardWrapper from "./CardWrapper";
import SkillPill from "../buttons/SkillPill";
import { HomeProjectCardProps, NumRange } from "@/interfaces/cards.interface";
import { getScopedI18n } from "@/locales/server";

export default async function HomeProjectCard({
  year,
  icon,
  translationKey,
  skills = [],
  achievmentsCount = 1,
}: HomeProjectCardProps) {
  const Icon = dynamic(() => import(`@/components/icons/${icon}`));
  const t = await getScopedI18n("home.chosenprojects");
  const t2 = (code: any, index?: number) => t(code, { count: index as NumRange<5> });
  const achievements = Array.from({ length: achievmentsCount }).map(
    (_, index: number) => (
      <span key={index} className="text-xs text-black sm:text-sm">
        {t2(`${translationKey}.achievements`, index)}
      </span>
    ),
  );

  return (
    <CardWrapper className="text-secondary flex w-[90%] flex-col justify-start gap-y-3 rounded-xl bg-white p-3 shadow-lg shadow-cyan-200/30 transition-all ease-in hover:scale-102 min-[380px]:w-[97%] sm:p-6 md:max-w-[324px] lg:w-[32.5%] lg:max-w-[384px]">
      {/* <CardWrapper className="text-secondary flex w-[90%] md:max-w-[324px] flex-col
     justify-start gap-y-3 rounded-xl bg-white p-3 shadow-lg
     shadow-cyan-200/30 transition-all ease-in hover:scale-102
     min-[380px]:w-[47%] sm:w-[40%] sm:p-6 lg:w-[32.5%] md:max-w-[384px]"> */}
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
        <ul className="flex flex-col gap-y-2">
          <li className="flex items-center gap-x-2">
            <span className="h-1 w-1 rounded-full bg-green-500 sm:h-1.5 sm:w-1.5"></span>
            {...achievements}
          </li>
        </ul>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillPill key={skill} label={skill} />
          ))}
        </div>
      </div>
    </CardWrapper>
  );
}
