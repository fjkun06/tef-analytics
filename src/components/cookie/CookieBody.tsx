import React from "react";

import { LegalSectionHeading } from "../imprint";
import CookieBodyItem from "./CookieBodyItem";
import { getScopedI18n } from "@/locales/server";
import constants from "@/utils/constants";

export default async function CookieBody() {
  const t = await getScopedI18n("cookie.middleSection");
  const t2 = (code: any) => t(code);

  return (
    <section>
      <LegalSectionHeading
        index={3}
        translationKey="threeTitle"
        scope="cookie.middleSection"
      />
      <p>{t("threeSubtitle")}</p>
      <div className="mt-4 space-y-4">
        {constants.cookies.bodySections.map(({ titleKey, descriptionKey }) => (
          <CookieBodyItem
            key={titleKey}
            title={t2(titleKey)}
            description={t2(descriptionKey)}
          />
        ))}
      </div>
    </section>
  );
}
