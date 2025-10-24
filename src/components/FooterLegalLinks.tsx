import React from "react";

import FooterLink from "./FooterLink";
import { getScopedI18n } from "@/locales/server";
import constants from "@/utils/constants";

async function FooterLegalLinks() {
  const t = await getScopedI18n("footer");

  return (
    <ul className={"legal mt-4 space-y-4 text-sm"}>
      {constants.aboutLinks.map((link) => (
        <li key={link.label}>
          <FooterLink
            className="inline-block text-base text-gray-400 transition hover:text-teal-600/75 hover:underline dark:text-gray-400 dark:hover:text-teal-500/75"
            href={link.href}
          >
            {t(link.label)}
          </FooterLink>
        </li>
      ))}
    </ul>
  );
}

export default FooterLegalLinks;
