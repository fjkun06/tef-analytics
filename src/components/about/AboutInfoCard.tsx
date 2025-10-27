import React from "react";

import { IconEnvelope, IconLocation } from "../icons";
import { getScopedI18n } from "@/locales/server";

async function AboutInfoCard() {
  const t = await getScopedI18n("about");
  return (
    <div className="flex w-full flex-col gap-2 rounded-xl bg-blue-600 p-3 sm:p-6 md:p-8 lg:max-w-[730px]">
      <h3 className="text-lg font-semibold text-white sm:text-2xl md:text-3xl">
        Dr. Arsene Ntiwa
      </h3>
      <span className="text-sm text-white sm:text-lg md:text-xl">{t("title")}</span>
      <span className="flex w-full gap-3 text-xs max-[510px]:flex-wrap sm:text-sm">
        <span className="flex w-1/2 items-center justify-start gap-2 text-white max-[510px]:w-full">
          <IconEnvelope className="!h-3 !w-3 sm:!h-5 sm:!w-5" /> an@arsenentiwa.com
        </span>
        <span className="flex w-1/2 items-center justify-start gap-2 text-white max-[510px]:w-full">
          <IconLocation /> Dortmund, {t("location")}
        </span>
      </span>
    </div>
  );
}

export default AboutInfoCard;
