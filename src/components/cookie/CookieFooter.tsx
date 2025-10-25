import React from "react";

import { LegalSectionHeading } from "../imprint";
import { getScopedI18n } from "@/locales/server";

export default async function CookieFooter() {
  const t = await getScopedI18n("cookie.footerSection");

  return (
    <>
      <section>
        <LegalSectionHeading
          index={4}
          translationKey="fourTitle"
          scope="cookie.footerSection"
        />
        <p>{t("fourSubtitle")}</p>
        <p className="mt-2 text-slate-500 italic">{t("fourPointOne")}</p>
      </section>
      <section>
        <LegalSectionHeading
          index={5}
          translationKey="fiveTitle"
          scope="cookie.footerSection"
        />
        <p>{t("fiveSubtitle")}.</p>
      </section>
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
