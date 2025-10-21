export interface SocialLinksProps {
  className?: string;
}

export type FooterAboutTranslationKeys =
  | "about.companyHistory"
  | "about.meetTeam"
  | "about.employeeHandbook"
  | "about.title"
  | "about.careers";

export interface FooterCopyrightProps {
  appName: string;
  year: number;
}

export type FooterLink = {
  href: string;
  label: FooterAboutTranslationKeys;
};

export type FooterLinksSectionProps = {
  links: FooterLink[];
  className?: string;
  headingTranslationKey?: string;
};
