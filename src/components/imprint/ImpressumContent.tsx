/**
 * ImpressumContent
 *
 * Renders a content section for the imprint page, using index and translation key props.
 *
 * @param index - The section index number.
 * @param titleTranslationKey - The translation key for the section title.
 * @returns {Promise<React.ReactElement>} The section element with translated content.
 */
import React from "react";

import LegalSectionHeading from "./LegalSectionHeading";
import { ImpressumContentProps } from "@/interfaces/legal.interface";
import { getScopedI18n } from "@/locales/server";

async function ImpressumContent({
  index,
  titleTranslationKey,
}: ImpressumContentProps): Promise<React.ReactElement> {
  const t = await getScopedI18n("imprint");
  const t2 = (code: any) => t(code);
  const indices = ["four", "five", "six"];

  const finalKey = indices[index - 4];
  return (
    <section>
      <LegalSectionHeading
        scope="imprint"
        index={index}
        translationKey={titleTranslationKey}
      />
      <p>{t2(finalKey)}</p>
    </section>
  );
}

export default ImpressumContent;
