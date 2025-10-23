import React from "react";

import FooterCopyright from "../FooterCopyright";
import FooterLinksSection from "../FooterLinksSection";
import SocialLinks from "../SocialLinks";
import constants from "@/utils/constants";
import { getCurrentYear } from "@/utils/functions/getCurrentYear";
import strings from "@/utils/strings";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-slate-900 dark:bg-[url(/bg-white.svg)]">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <SocialLinks className="mt-8 flex justify-center gap-6 md:gap-8 lg:justify-start" />

          <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2">
            <FooterLinksSection
              links={constants.aboutLinks}
              className="mt-8 space-y-4 text-sm"
            />
            <FooterLinksSection
              links={constants.aboutLinks}
              className="mt-8 space-y-4 text-sm"
            />
          </div>
        </div>

        <FooterCopyright appName={strings.appName} year={getCurrentYear()} />
      </div>
    </footer>
  );
}
