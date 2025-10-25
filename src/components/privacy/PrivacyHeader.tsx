import React from "react";

import { LegalSectionHeading } from "../imprint";
import { getScopedI18n } from "@/locales/server";

export default async function PrivacyHeader() {
  const t = await getScopedI18n("privacy.topSection");

  return (
    <>
      <section>
        <LegalSectionHeading
          index={1}
          translationKey="oneTitle"
          scope="privacy.topSection"
        />

        <p>{t("oneDescription")}</p>
      </section>
      <section>
        <LegalSectionHeading
          index={2}
          translationKey="twoTitle"
          scope="privacy.topSection"
        />

        <p>
          Franck Tankouan
          <br />
          Email: an@arsenentiwa.com
          <br />
          {t("location")}
        </p>
      </section>
    </>
  );
}
