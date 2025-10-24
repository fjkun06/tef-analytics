import React from "react";

import { getScopedI18n } from "@/locales/server";

async function ImpressumSectionThree() {
  const t = await getScopedI18n("imprint");
  const t2 = (code: any) => t(code);
  const translationKeys = ["threeOne", "threeTwo", "threeThree"];
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold text-slate-900">
        3. {t("professionalInformation")}
      </h2>
      <ul className="list-disc pl-6">
        {translationKeys.map((key, index) => (
          <li key={index}>{t2(key)}</li>
        ))}
      </ul>
    </section>
  );
}

export default ImpressumSectionThree;
