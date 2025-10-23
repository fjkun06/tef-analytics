import React from "react";

import { getScopedI18n } from "@/locales/server";

async function HomeHeaderDetails() {
  const t = await getScopedI18n("home.header");

  return (
    <>
      <h1 className="font-display text-center text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
        <span className="mb-2 block sm:mb-4">{t("me")}</span>
        <span className="block text-lg md:text-2xl lg:text-2xl">{t("slogan")}</span>
      </h1>
      <p className="text-center text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-8 md:text-lg">
        {t("description")}
      </p>
    </>
  );
}

export default HomeHeaderDetails;
