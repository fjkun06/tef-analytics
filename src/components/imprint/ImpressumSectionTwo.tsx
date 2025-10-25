/**
 * ImpressumSectionTwo
 *
 * Renders the second section of the imprint page, including contact information and email.
 *
 * @returns {Promise<React.ReactElement>} The section element with translated content.
 */
import React from "react";

import { getScopedI18n } from "@/locales/server";

async function ImpressumSectionTwo(): Promise<React.ReactElement> {
  const t = await getScopedI18n("imprint");
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold text-slate-900">
        {`2. ${t("contactInformation")}`}
      </h2>
      <p>
        Email: an@arsenentiwa.com
        <br />
        {t("email")}
      </p>
    </section>
  );
}

export default ImpressumSectionTwo;
