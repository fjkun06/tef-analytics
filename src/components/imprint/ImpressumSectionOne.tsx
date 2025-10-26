/**
 * ImpressumSectionOne
 *
 * Renders the first section of the imprint page, including address and country information.
 *
 * @returns {Promise<React.ReactElement>} The section element with translated content.
 */
import React from "react";

import LegalEmailLocation from "./LegalEmailLocation";
import LegalSectionHeading from "./LegalSectionHeading";
import { getScopedI18n } from "@/locales/server";

async function ImpressumSectionOne(): Promise<React.ReactElement> {
  const t = await getScopedI18n("imprint");
  return (
    <section>
      <LegalSectionHeading index={1} translationKey="accordingTo" scope="imprint" />
      <LegalEmailLocation location={t("location")} />
    </section>
  );
}

export default ImpressumSectionOne;
