"use client";
import React, { useState } from "react";

import Link from "next/link";

import IconClose from "@/components/icons/IconClose";
import IconMenu from "@/components/icons/IconMenu";
import Logo from "@/components/icons/Logo";
import LanguageSwitch from "@/components/LanguageSwitch";
import NavLink from "@/components/NavLink";
import type { NavItem } from "@/interfaces/navbar.interface";
import { useScopedI18n } from "@/locales/client";
import constants from "@/utils/constants";
import { hrefToNavKey } from "@/utils/functions/hrefToNavKey";
const navbarItems: NavItem[] = constants.navItems;

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useScopedI18n("nav");

  return (
    <header className="w-full border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Tef Analytics
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="flex items-center gap-6">
            <nav className="ml-6 hidden items-center gap-6 space-x-2 lg:flex">
              {navbarItems.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {t(hrefToNavKey(item.href))}
                </NavLink>
              ))}
              <LanguageSwitch />
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden dark:text-slate-200 dark:hover:bg-slate-800"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`transform transition-all duration-200 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="space-y-1 px-4 pb-4">
          {navbarItems.map((item) => (
            <NavLink
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setMobileOpen(false)}
            >
              {t(hrefToNavKey(item.href))}
            </NavLink>
          ))}

          {/* Language switscher dropdown*/}
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
