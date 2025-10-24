import React from "react";

import { getScopedI18n } from "@/locales/server";

async function LegalHeading({ scope }: { scope: string }) {
  const t = await getScopedI18n(scope as any);
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-slate-900">{t("title")}</h1>
    </div>
  );
}

export default LegalHeading;
