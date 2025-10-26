/**
 * CookieFooter
 *
 * Async server component that renders the footer sections of the cookie policy page.
 * Maps through cookie footer items from constants (indices 4-5), then renders a final contact section (index 6).
 * Uses "cookie.footerSection" scope for i18n translations.
 *
 * @returns {Promise<React.ReactElement>} Fragment containing cookie footer sections and contact information
 */
import React from "react";

import { LegalSectionHeading } from "../imprint";
import { getScopedI18n } from "@/locales/server";
import constants from "@/utils/constants";

export default async function CookieFooter(): Promise<React.ReactElement> {
  const t = await getScopedI18n("cookie.footerSection");
  const cookieFooterItems = constants.cookies.footerSections;
  const t2 = (code: any) => t(code);
  return (
    <>
      {/* Map through cookie footer items (sections 4-5) with optional className styling */}
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
      {/* Section 6: Contact information for cookie-related inquiries */}
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
