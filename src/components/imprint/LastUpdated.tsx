import React from "react";

import { getScopedI18n } from "@/locales/server";

async function LastUpdated() {
  const t = await getScopedI18n("imprint");
  return <p className="mt-8 text-sm">{t("lastUpdated")}</p>;
}

export default LastUpdated;
