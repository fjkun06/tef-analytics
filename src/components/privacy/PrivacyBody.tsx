/**
 * PrivacyBody
 *
 * Async server component that renders the main body of the privacy policy page.
 * Maps through privacy body sections from constants and renders each section with translations.
 * Uses "privacy.middleSection" scope for i18n.
 *
 * @returns {Promise<React.ReactElement>} Fragment containing multiple privacy body sections
 */
import React from "react";

import PrivacyBodySection from "./PrivacyBodySection";
import { getScopedI18n } from "@/locales/server";
import constants from "@/utils/constants";

export default async function PrivacyBody(): Promise<React.ReactElement> {
  const t = await getScopedI18n("privacy.middleSection");
  const t2 = (code: any) => t(code);

  return (
    <>
      {constants.privacy.bodySections.map((section) => (
        <PrivacyBodySection key={section.index} translatorCallback={t2} data={section} />
      ))}
    </>
  );
}
