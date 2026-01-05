/**
 * PrivacyHeader
 *
 * Async server component that renders the header section of the privacy policy page.
 * Displays two sections: first with privacy description and second with contact information.
 * Uses i18n for multi-language support with "privacy.topSection" scope.
 *
 * @returns {Promise<React.ReactElement>} Two sections containing privacy header content with translated text
 */
import React from "react";

import { LegalSectionHeading } from "../imprint";
import LegalEmailLocation from "../imprint/LegalEmailLocation";
import { getScopedI18n } from "@/locales/server";

export default async function PrivacyHeader(): Promise<React.ReactElement> {
  const t = await getScopedI18n("privacy.topSection");

  return (
    <>
      {/* Section 1: Privacy description and information */}
      <section>
        <LegalSectionHeading
          index={1}
          translationKey="oneTitle"
          scope="privacy.topSection"
        />

        <p>{t("oneDescription")}</p>
      </section>
      {/* Section 2: Contact information with location */}
      <section>
        <LegalSectionHeading
          index={2}
          translationKey="twoTitle"
          scope="privacy.topSection"
        />
        <LegalEmailLocation location={t("location")} />
      </section>
    </>
  );
}
