/**
 * Contact Interface Definitions
 * Type definitions for contact page components and their props.
 */

import React from "react";

/**
 * Props for the ContactAndProjectWrapper component.
 * Provides a styled container for contact and project pages.
 * @property children - Page content to wrap
 * @property className - Optional additional CSS classes
 */
export type ContactAndProjectWrapperProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

/**
 * Props for the PageHeader component.
 * Renders a localized header for a page.
 * @property scope - Translation scope, either "contact" or "project"
 */
export type PageHeaderProps = {
  scope: "contact" | "projects";
  isProjectCard?: boolean;
};

/**
 * Props for the ContactSectionContainer component.
 * Groups contact information into organized sections.
 * @property children - Section content
 * @property heading - i18n key for section heading
 */
export type ContactSectionContainerProps = {
  children: React.ReactNode | React.ReactNode[];
  heading: string;
};

/**
 * Props for the ContactIconBubble component.
 * Renders an icon in a circular bubble with styling.
 * @property icon - Icon element to display
 */
export type ContactIconBubbleProps = {
  icon: React.ReactNode;
};

/**
 * Props for the ContactSectionContainerItem component.
 * Individual item within a contact section.
 * @property icon - Icon element for the item
 * @property descriptionKey - i18n key for description text
 */
export type ContactSectionContainerItemProps = {
  icon: React.ReactNode;
  descriptionKey: string;
};

/**
 * Props for text display components.
 * @property text - Content to display
 * @property large - Optional flag for larger text size
 * @property className - Optional additional CSS classes
 */
export type BasicTextProps = {
  text: string;
  large?: boolean;
  className?: string;
};

/**
 * Props for heading components.
 * Extends BasicTextProps with same properties as text components.
 */
export type BasicHeadingProps = BasicTextProps & {
  isProjectCardHeading?: boolean;
  projectTimeSpan?: string;
};

/**
 * Props for the ContactLinkItem component.
 * Displays a link with icon, title, and external reference.
 * @property href - URL for the link
 * @property label - Display text for the link
 * @property icon - Icon element
 * @property title - Title displayed above the link
 */
export type ContactLinkItemProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  title: string;
};
