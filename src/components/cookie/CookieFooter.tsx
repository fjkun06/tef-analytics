import React from "react";

import { LegalSectionHeading } from "../imprint";
import { getScopedI18n } from "@/locales/server";
import constants from "@/utils/constants";

export default async function CookieFooter() {
  const t = await getScopedI18n("cookie.footerSection");
  const cookieFooterItems = constants.cookies.footerSections;
  const t2 = (code: any) => t(code);
  return (
    <>
      {cookieFooterItems.map((item, index) => (
        <section key={index}>
          <LegalSectionHeading
            index={index + 4}
            translationKey={item.titleKey}
            scope="cookie.footerSection"
          />
          <p className={item.ClassName}>{t2(item.descriptionKey)}</p>
        </section>
      ))}
      <section>
        <LegalSectionHeading
          index={6}
          translationKey="sixTitle"
          scope="cookie.footerSection"
        />
        <p>
          {t("sixDescription")}
          Email: an@arsenentiwa.com
        </p>
      </section>
    </>
  );
}
