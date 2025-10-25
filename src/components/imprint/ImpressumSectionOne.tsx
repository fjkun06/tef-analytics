/**
 * ImpressumSectionOne
 *
 * Renders the first section of the imprint page, including address and country information.
 *
 * @returns {Promise<React.ReactElement>} The section element with translated content.
 */
import React from "react";

import { getScopedI18n } from "@/locales/server";

async function ImpressumSectionOne(): Promise<React.ReactElement> {
  const t = await getScopedI18n("imprint");
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold text-slate-900">{`1. ${t("accordingTo")}`}</h2>
      <p>
        Franck Tankouan
        <br />
        Otto-Brenner-Weg 4<br />
        44225 Dortmund
        <br />
        {t("country")}
      </p>
    </section>
  );
}

export default ImpressumSectionOne;
