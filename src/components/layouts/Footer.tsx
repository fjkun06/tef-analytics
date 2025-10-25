import React from "react";

import {
  FooterContactLinks,
  FooterCopyright,
  FooterLegalLinks,
  FooterLinksSection,
} from "../footer";
import SocialLinks from "../SocialLinks";
import { getCurrentYear } from "@/utils/functions/getCurrentYear";
import strings from "@/utils/strings";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-slate-900 dark:bg-[url(/bg-white.svg)]">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <SocialLinks />

          <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2">
            <FooterLinksSection headingTranslationKey="about">
              <FooterLegalLinks />
            </FooterLinksSection>
            <FooterLinksSection headingTranslationKey="contact">
              <FooterContactLinks className="mt-4 flex justify-center gap-6 md:gap-8 lg:justify-start" />
            </FooterLinksSection>
          </div>
        </div>

        <FooterCopyright appName={strings.appName} year={getCurrentYear()} />
      </div>
    </footer>
  );
}
