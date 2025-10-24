import React from "react";

import { ImpressumContentProps } from "@/interfaces/legal.interface";
import { getScopedI18n } from "@/locales/server";

async function ImpressumContent({ index, titleTranslationKey }: ImpressumContentProps) {
  const t = await getScopedI18n("imprint");
  const t2 = (code: any) => t(code);
  const indices = ["four", "five", "six"];

  const finalKey = indices[index - 4];
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold text-slate-900">{`${index}. ${t2(titleTranslationKey)}`}</h2>
      <p>{t2(finalKey)}</p>
    </section>
  );
}

export default ImpressumContent;
