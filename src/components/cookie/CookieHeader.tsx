import React from "react";

import { LegalSectionHeading } from "../imprint";
import { getScopedI18n } from "@/locales/server";
import constants from "@/utils/constants";

export default async function CookieHeader() {
  const t = await getScopedI18n("cookie.topSection");
  const t2 = (code: any) => t(code);

  const cookieHeaderItems = constants.cookies.headerSections;

  return (
    <>
      {cookieHeaderItems.map((item, index) => (
        <section key={index}>
          <LegalSectionHeading
            index={index + 1}
            translationKey={item.titleKey}
            scope="cookie.topSection"
          />
          <p>{t2(item.descriptionKey)}</p>
        </section>
      ))}
    </>
  );
}
