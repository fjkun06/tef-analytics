import { PropsWithChildren } from "react";

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
