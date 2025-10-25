/**
 * LastUpdated
 *
 * Renders the "last updated" text for the imprint page using a scoped translation.
 *
 * @returns {Promise<React.ReactElement>} The paragraph element with translated last updated text.
 */
import React from "react";

import { getScopedI18n } from "@/locales/server";

async function LastUpdated(): Promise<React.ReactElement> {
  const t = await getScopedI18n("imprint");
  return <p className="mt-8 text-sm">{t("lastUpdated")}</p>;
}

export default LastUpdated;
