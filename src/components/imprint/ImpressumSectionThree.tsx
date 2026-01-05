/**
 * ImpressumSectionThree
 *
 * Renders the third section of the imprint page, including professional information list.
 *
 * @returns {Promise<React.ReactElement>} The section element with translated content.
 */
import React from "react";

import LegalSectionHeading from "./LegalSectionHeading";
import { getScopedI18n } from "@/locales/server";

async function ImpressumSectionThree(): Promise<React.ReactElement> {
  const t = await getScopedI18n("imprint");
  const t2 = (code: any) => t(code);
  const translationKeys = ["threeOne", "threeTwo", "threeThree"];
  return (
    <section>
      <LegalSectionHeading
        index={3}
        translationKey="professionalInformation"
        scope="imprint"
      />

      <ul className="list-disc pl-6">
        {translationKeys.map((key, index) => (
          <li key={index}>{t2(key)}</li>
        ))}
      </ul>
    </section>
  );
}

export default ImpressumSectionThree;
