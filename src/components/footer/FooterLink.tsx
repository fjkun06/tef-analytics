"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavLinkProps as FooterLinkProps } from "@/interfaces/navbar.interface";

function FooterLink({
  href,
  children,
  className = "",
  activeClassName = "dark:text-teal-500/75 underline",
  inactiveClassName,
  onClick,
}: FooterLinkProps) {
  const pathname = usePathname() || "/";
  const pathnameWithoutLocale = (() => {
    const subPath = pathname.match(/^\/([a-z]{2})(\/.*|$)/i);
    if (!subPath) return pathname;
    const rest = subPath[2];
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

export default FooterLink;
