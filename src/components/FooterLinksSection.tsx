import React from "react";

import {
  FooterAboutTranslationKeys,
  FooterLinksSectionProps,
} from "@/interfaces/footer.interface";
import { getScopedI18n } from "@/locales/server";

export default async function FooterLinksSection({
  links,
  className,
  headingTranslationKey = "about",
}: FooterLinksSectionProps): Promise<React.ReactElement> {
  const t = await getScopedI18n("footer");
  const mappedHeadingTranslationKey =
    `${headingTranslationKey}.title` as FooterAboutTranslationKeys;
  return (
    <div className="text-center sm:text-left">
      <p className="text-lg font-medium text-gray-900 dark:text-white">
        {t(mappedHeadingTranslationKey)}
      </p>
      <ul className={className}>
        {links.map((link) => (
          <li key={link.label}>
            <a
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href={link.href}
            >
              {t(link.label)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
