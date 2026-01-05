import React from "react";

import BasicText from "./BasicText";
import Brand from "./Brand";
import { getScopedI18n } from "@/locales/server";

export default async function SocialLinks(): Promise<React.ReactElement> {
  const t = await getScopedI18n("footer");
  return (
    <div className="flex flex-col items-center lg:items-start">
      <Brand />
      <BasicText text={t("social.description")} />
    </div>
  );
}
