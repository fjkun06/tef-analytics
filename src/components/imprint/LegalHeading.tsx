import React from "react";

import { getScopedI18n } from "@/locales/server";

async function LegalHeading({ scope }: { scope: string }) {
  const t = await getScopedI18n(scope as any);
  return <h1 className="mb-8 text-3xl font-bold text-slate-900">{t("title")}</h1>;
}

export default LegalHeading;
