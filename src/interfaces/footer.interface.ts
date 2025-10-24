import React from "react";

export interface SocialLinksProps {
  className?: string;
}

export type FooterAboutTranslationKeys =
  | "about.privacy"
  | "about.cookie"
  | "about.imprint"
  | "about.title";

export interface FooterCopyrightProps {
  appName: string;
  year: number;
}

export type FooterLink = {
  href: string;
  label: FooterAboutTranslationKeys;
};

export type FooterLinksSectionProps = {
  headingTranslationKey: string;
  children: React.ReactNode | React.ReactNode[];
};
