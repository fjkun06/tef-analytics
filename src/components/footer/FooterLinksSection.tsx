import React from "react";

import {
  FooterAboutTranslationKeys,
  FooterLinksSectionProps,
} from "@/interfaces/footer.interface";
import { getScopedI18n } from "@/locales/server";

export default async function FooterLinksSection({
  children,
  headingTranslationKey,
}: FooterLinksSectionProps): Promise<React.ReactElement> {
  const t = await getScopedI18n("footer");
  const mappedHeadingTranslationKey =
    `${headingTranslationKey}.title` as FooterAboutTranslationKeys;
  return (
    <div className="text-center sm:text-left">
      <p className="text-lg font-medium text-gray-900 dark:text-white">
        {t(mappedHeadingTranslationKey)}
      </p>
      {children}
    </div>
  );
}
