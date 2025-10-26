/**
 * CookieHeader
 *
 * Async server component that renders the header sections of the cookie policy page.
 * Maps through cookie header items from constants and displays each with a section heading and description.
 * Uses "cookie.topSection" scope for i18n translations.
 *
 * @returns {Promise<React.ReactElement>} Fragment containing multiple cookie header sections with translated content
 */
import React from "react";

import { LegalSectionHeading } from "../imprint";
import { getScopedI18n } from "@/locales/server";
import constants from "@/utils/constants";

export default async function CookieHeader(): Promise<React.ReactElement> {
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
