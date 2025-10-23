import React from "react";

import Brand from "./Brand";
import { getScopedI18n } from "@/locales/server";

export default async function SocialLinks(): Promise<React.ReactElement> {
  const t = await getScopedI18n("footer");
  return (
    <div className="flex flex-col items-center lg:items-start">
      <Brand />
      <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs lg:text-left dark:text-gray-400">
        {t("social.description")}
      </p>
    </div>
  );
}
