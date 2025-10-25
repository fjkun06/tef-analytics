/**
 * LegalSectionHeading
 *
 * Renders a section heading for legal or imprint sections, using a scoped translation key and index.
 *
 * @param scope - The translation scope to use for the heading.
 * @param index - The section index number.
 * @param translationKey - The translation key for the section title.
 * @returns {React.ReactElement} The section heading element with translated title.
 */
import React from "react";

import { LegalSectionHeadingProps } from "@/interfaces/legal.interface";
import { getScopedI18n } from "@/locales/server";

async function LegalSectionHeading({
  scope,
  index,
  translationKey,
}: LegalSectionHeadingProps): Promise<React.ReactElement> {
  const t = await getScopedI18n(scope as any);
  const t2 = (code: any) => t(code, { count: 0 });

  return (
    <h2 className="mb-4 text-xl font-semibold text-slate-900">{`${index}. ${t2(translationKey)}`}</h2>
  );
}

export default LegalSectionHeading;
