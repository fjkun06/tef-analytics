/**
 * LegalHeading
 *
 * Renders the main heading for a legal or imprint section, using a scoped translation key.
 *
 * @param scope - The translation scope to use for the heading.
 * @returns {React.ReactElement} The heading element with translated title.
 */
import React from "react";

import { getScopedI18n } from "@/locales/server";

async function LegalHeading({ scope }: { scope: string }): Promise<React.ReactElement> {
  const t = await getScopedI18n(scope as any);
  return <h1 className="mb-8 text-3xl font-bold text-slate-900">{t("title")}</h1>;
}

export default LegalHeading;
