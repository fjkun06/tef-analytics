import React from "react";

import { getScopedI18n } from "@/locales/server";

async function LegalSectionHeading({
  scope,
  index,
  translationKey,
}: {
  scope: string;
  index: number;
  translationKey: string;
}) {
  const t = await getScopedI18n(scope as any);
  const t2 = (code: any) => t(code, { count: 0 });

  return (
    <h2 className="mb-4 text-xl font-semibold text-slate-900">{`${index}. ${t2(translationKey)}`}</h2>
  );
}

export default LegalSectionHeading;
