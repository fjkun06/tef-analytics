import React from "react";

import { LegalSectionHeading } from "../imprint";
import { getScopedI18n } from "@/locales/server";

export default async function PrivacyFooter() {
  const t = await getScopedI18n("privacy.footerSection");

  return (
    <>
      <section>
        <LegalSectionHeading
          index={6}
          translationKey="sixTitle"
          scope="privacy.footerSection"
        />

        <p>
          {t("sixDescription")}
          <br />
          Email: an@arsenentiwa.com
        </p>
      </section>
      <section>
        <LegalSectionHeading
          index={7}
          translationKey="sevenTitle"
          scope="privacy.footerSection"
        />

        <p>{t("sevenDescription")}</p>
      </section>
    </>
  );
}
