import React from "react";

import dynamic from "next/dynamic";

import { HomeImpactCardProps } from "@/interfaces/home.interface";
import { getScopedI18n } from "@/locales/server";

export default async function HomeImpactCard({
  icon,
  domain,
  detailNumber,
}: HomeImpactCardProps) {
  const t = await getScopedI18n("home.domains");
  const t2 = (code: any) => t(code);
  const Icon = dynamic(() => import(`@/components/icons/${icon}`));
  return (
    <div className="text-secondary flex h-max w-[90%] max-w-[324px] flex-col justify-start gap-y-3 rounded-xl bg-white p-3 shadow-lg shadow-cyan-200/30 transition-all ease-in hover:scale-105 min-[380px]:w-[47%] sm:h-33 sm:w-[40%] sm:p-6 lg:w-[22%] lg:max-w-[286px] lg:gap-y-3">
      <span className="text-xs sm:text-base">{t2(domain + ".title")}</span>
      <span className="flex items-center gap-x-2">
        <span className="grid size-[5vw] place-content-center rounded-[10px] bg-linear-to-r from-[#14b8a6] to-blue-100 text-white sm:size-[44px]">
          <Icon />
        </span>
        <span className="flex flex-col">
          <span className="text-lg font-medium text-black sm:text-2xl">
            {detailNumber}+
          </span>
          <span className="text-[10px] sm:text-xs">{t2(domain + ".subtitle")}</span>
        </span>
      </span>
    </div>
  );
}
