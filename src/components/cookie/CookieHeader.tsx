import React from "react";

import { LegalSectionHeading } from "../imprint";
import { getScopedI18n } from "@/locales/server";

export default async function CookieHeader() {
  const t = await getScopedI18n("cookie.topSection");

  return (
    <>
      <section>
        <LegalSectionHeading
          index={1}
          translationKey="oneTitle"
          scope="cookie.topSection"
        />
        <p>{t("oneDescription")}</p>
      </section>
      <section>
        <LegalSectionHeading
          index={2}
          translationKey="twoTitle"
          scope="cookie.topSection"
        />
        <p>{t("twoDescription")}</p>
      </section>
    </>
  );
}
