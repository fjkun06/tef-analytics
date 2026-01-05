/*eslint-disable*/
import { MutableRefObject, PropsWithChildren } from "react";

/**
 * Navigation item structure.
 * Represents a single navigation link or menu item.
 * @property name - Display name for the nav item
 * @property href - URL or route path
 * @property external - Optional flag indicating external link
 */
export type NavItem = {
  name: string;
  href: string;
  external?: boolean;
};

/**
 * Props for navigation link components.
 * Combines children support with styling and interaction properties.
 * @property href - Link destination
 * @property className - Base CSS classes
 * @property activeClassName - Classes applied when link is active
 * @property inactiveClassName - Classes applied when link is inactive
 * @property onClick - Optional click handler
 */
export type NavLinkProps = PropsWithChildren<{
  href: string;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  onClick?: () => void;
}>;

/**
 * Props for the Navbar component.
 * Controls navbar state and content.
 * @property isMobileOpen - Whether mobile menu is open
 * @property toggleMobileOpen - Function to toggle mobile menu
 * @property t - Translation function for i18n
 * @property navbarItems - Array of navigation items
 * @property ref - Reference to navbar DOM element
 */
export type NavbarProps = {
  isMobileOpen: boolean;
  toggleMobileOpen: () => void;
  t: (key: any) => string;
  navbarItems: NavItem[];
  ref?: MutableRefObject<HTMLDivElement | null>;
};
