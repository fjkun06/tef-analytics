import React from "react";

import dynamic from "next/dynamic";

import CardWrapper from "./CardWrapper";
import { HomeImpactCardProps } from "@/interfaces/cards.interface";
import { getScopedI18n } from "@/locales/server";

/**
 * HomeImpactCard
 *
 * Async server component that renders a domain impact card.
 *
 * @param icon - The icon component name to display (string, e.g. "IconName.tsx").
 * @param domain - The domain key for translation and display (string).
 * @param detailNumber - The number to display as the domain impact (number).
 * @returns { Promise<React.ReactElement>} A card with domain impact details.
 */
export default async function HomeImpactCard({
  icon,
  domain,
  detailNumber,
}: HomeImpactCardProps): Promise<React.ReactElement> {
  const t = await getScopedI18n("home.domains");
  const t2 = (code: any) => t(code);
  const Icon = dynamic(() => import(`@/components/icons/${icon}`));
  return (
    <CardWrapper className="text-secondary flex h-max w-[90%] max-w-[324px] flex-col justify-start gap-y-3 min-[380px]:w-[47%] sm:h-33 sm:w-[46%] lg:w-[25%] lg:max-w-[286px] lg:gap-y-3">
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
    </CardWrapper>
  );
}
