"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavLinkProps } from "@/interfaces/navbar.interface";

export default function NavLink({
  href,
  children,
  className = "h-full text-red-500",
  activeClassName = "text-indigo-600 dark:text-slate-800 font-semibold bg-white/50 dark:bg-white/80 px-2 py-1 flex items-center",
  // activeClassName = "text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-slate-800/50 rounded-md px-2 py-1",
  inactiveClassName = "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800",
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
    `${className} ${isActive ? activeClassName : inactiveClassName} transition-colors duration-300 ease-in-out`.trim();

  return (
    <Link href={href} className={finalClass} onClick={onClick}>
      {children}
    </Link>
  );
}
