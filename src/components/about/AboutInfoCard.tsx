/**
 * AboutInfoCard
 *
 * Server component that displays personal information card with name, title, email, and location.
 * Features a blue gradient background with white text and integrated icons for contact information.
 * Retrieves localized title and location text from internationalization system.
 *
 * @returns {Promise<React.ReactElement>} Personal info card with contact details
 *
 * @example
 * ```tsx
 * <AboutInfoCard />
 * ```
 */
import React from "react";

import { IconEnvelope, IconLocation } from "../icons";
import { getScopedI18n } from "@/locales/server";

async function AboutInfoCard() {
  const t = await getScopedI18n("about");
  return (
    <div className="flex w-full flex-col gap-2 rounded-xl bg-blue-600 p-3 sm:p-6 md:p-8 lg:max-w-[730px]">
      <h2 className="text-2xl font-medium text-white sm:text-2xl md:text-5xl">
        <span className="font-light">Franck</span> Tankouan
      </h2>
      <h3 className="text-base font-light text-white italic sm:text-xl md:text-2xl">
        {t("title")}
      </h3>
      <span className="flex w-full gap-3 text-xs max-[510px]:flex-wrap sm:text-sm">
        <span className="flex w-1/2 items-center justify-start gap-2 text-white max-[510px]:w-full">
          <IconEnvelope className="!h-3 !w-3 sm:!h-5 sm:!w-5" /> francktankouan@yahoo.de
        </span>
        <span className="flex w-1/2 items-center justify-start gap-2 text-white max-[510px]:w-full">
          <IconLocation /> Oberhausen, {t("location")}
        </span>
      </span>
    </div>
  );
}

export default AboutInfoCard;
