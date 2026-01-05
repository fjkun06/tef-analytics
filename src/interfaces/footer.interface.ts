/**
 * Footer Interface Definitions
 * Type definitions for footer-related components and their props.
 * Includes social links, copyright information, and navigation links.
 */

import React from "react";

/**
 * Props for the SocialLinks component.
 * @property className - Optional CSS classes to apply to the social links container
 */
export interface SocialLinksProps {
  className?: string;
}

/**
 * Translation keys for footer about section links.
 * Represents available localization keys for footer content.
 */
export type FooterAboutTranslationKeys =
  | "about.privacy"
  | "about.cookie"
  | "about.imprint"
  | "about.title";

/**
 * Props for the FooterCopyright component.
 * @property appName - Application or company name to display in copyright
 * @property year - Current year for copyright notice
 */
export interface FooterCopyrightProps {
  appName: string;
  year: number;
}

/**
 * Structure for individual footer navigation links.
 * @property href - URL destination for the link
 * @property label - Translation key for the link label
 */
export type FooterLink = {
  href: string;
  label: FooterAboutTranslationKeys;
};

/**
 * Props for the FooterLinksSection component.
 * Organizes footer links into titled sections.
 * @property headingTranslationKey - Translation key for the section heading
 * @property children - Link items and content for this section
 */
export type FooterLinksSectionProps = {
  headingTranslationKey: string;
  children: React.ReactNode | React.ReactNode[];
};
