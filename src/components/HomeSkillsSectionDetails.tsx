import React from "react";

import { getScopedI18n } from "@/locales/server";

async function HomeSkillsSectionDetails() {
  const t = await getScopedI18n("home.skills");
  const t2 = (key: any) => t(key);
  return (
    <div className="flex h-max flex-col items-center text-center">
      <h2 className="font-display flex flex-col items-center justify-center gap-2 text-3xl font-bold tracking-tight sm:flex-row sm:text-4xl">
        <span className="text-slate-900">{t2("title")}</span>
        <span className="w-full text-center sm:w-[180px] sm:text-left">
          <span className="text-blue-600">{t2("content.one")}</span>
        </span>
      </h2>
      <p className="mt-4 text-lg leading-8 text-gray-600">{t2("subtitle")}</p>
    </div>
  );
}

export default HomeSkillsSectionDetails;
