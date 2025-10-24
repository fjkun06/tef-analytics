/*eslint-disable*/
import { MutableRefObject, PropsWithChildren } from "react";

export type NavItem = {
  name: string;
  href: string;
  external?: boolean;
};

export type NavLinkProps = PropsWithChildren<{
  href: string;
  className?: string; // base className
  activeClassName?: string;
  inactiveClassName?: string;
  onClick?: () => void;
}>;

export type NavbarProps = {
  isMobileOpen: boolean;
  toggleMobileOpen: () => void;
  t: (key: any) => string;
  navbarItems: NavItem[];
  ref?: MutableRefObject<HTMLDivElement | null>;
};
