"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavLinkProps } from "@/interfaces/navbar.interface";

export default function NavLink({
  href,
  children,
  className = "",
  activeClassName = "text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-slate-800/50 rounded-md px-2 py-1",
  inactiveClassName = "text-slate-700 dark:text-slate-200",
  onClick,
}: NavLinkProps) {
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
