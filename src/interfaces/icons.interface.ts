/**
 * Icon Interface Definitions
 * Type definitions for icon components and their props.
 */

import type React from "react";

/**
 * Base props for icon components.
 * @property className - Optional CSS classes for styling the icon
 */
export type IconProps = {
  className?: string;
};

/**
 * Props for social media icon links.
 * Combines icon display with link functionality.
 * @property href - URL for the social media profile
 * @property label - Accessible label/alt text for the link
 * @property icon - Icon element to display
 */
export interface SocialIconLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}
