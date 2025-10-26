/**
 * Footer
 *
 * Server component that renders the application footer with multiple sections.
 * Includes social links, legal/about links, contact links, and copyright information.
 * Organized in a responsive grid layout that adapts to screen size.
 *
 * @returns {React.ReactElement} Footer element with multiple sections and links
 */
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

export default function Footer(): React.ReactElement {
  return (
    <footer className="w-full bg-white dark:bg-slate-900 dark:bg-[url(/bg-white.svg)]">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Social media links section */}
          <SocialLinks />

          <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2">
            {/* Legal and about information links */}
            <FooterLinksSection headingTranslationKey="about">
              <FooterLegalLinks />
            </FooterLinksSection>
            {/* Contact information links */}
            <FooterLinksSection headingTranslationKey="contact">
              <FooterContactLinks className="mt-4 flex justify-center gap-6 md:gap-8 lg:justify-start" />
            </FooterLinksSection>
          </div>
        </div>

        {/* Copyright text with app name and current year */}
        <FooterCopyright appName={strings.appName} year={getCurrentYear()} />
      </div>
    </footer>
  );
}
