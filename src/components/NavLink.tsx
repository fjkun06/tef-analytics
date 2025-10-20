"use client";
import React, { PropsWithChildren } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = PropsWithChildren<{
  href: string;
  className?: string; // base className
  activeClassName?: string;
  inactiveClassName?: string;
  onClick?: () => void;
}>;

export default function NavLink({
  href,
  children,
  className = "",
  activeClassName = "text-rose-600 dark:text-rose-400",
  inactiveClassName = "text-slate-700 dark:text-slate-200",
  onClick,
}: NavLinkProps) {
  const pathname = usePathname() || "/";

  const pathnameWithoutLocale = (() => {
    const m = pathname.match(/^\/([a-z]{2})(\/.*|$)/i);
    if (!m) return pathname;
    const rest = m[2];
    return rest === "" ? "/" : rest;
  })();

  const isActive = (() => {
    if (href === "/") return pathnameWithoutLocale === "/";
    return pathnameWithoutLocale === href || pathnameWithoutLocale.startsWith(href + "/");
  })();

  const finalClass =
    `${className} ${isActive ? activeClassName : inactiveClassName}`.trim();

  return (
    <Link href={href} className={finalClass} onClick={onClick}>
      {children}
    </Link>
  );
}
