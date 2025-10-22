import type React from "react";

export type IconProps = {
  className?: string;
};

export interface SocialIconLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}
