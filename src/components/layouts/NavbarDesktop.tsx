import React, { Suspense } from "react";

import Brand from "../Brand";
import IconClose from "../icons/IconClose";
import IconMenu from "../icons/IconMenu";
import { LanguageSwitch } from "../LanguageSwitch";
import NavLink from "../NavLink";
import { NavbarProps } from "@/interfaces/navbar.interface";
import { hrefToNavKey } from "@/utils/functions/hrefToNavKey";

function NavbarDesktop({ isMobileOpen, toggleMobileOpen, t, navbarItems }: NavbarProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <Brand />

        <div className="flex items-center gap-6">
          <nav className="ml-6 hidden items-center gap-2 space-x-2 lg:flex">
            {navbarItems.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {t(hrefToNavKey(item.href))}
              </NavLink>
            ))}
            <Suspense>
              <LanguageSwitch />
            </Suspense>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileOpen}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden dark:text-slate-200 dark:hover:bg-slate-800"
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarDesktop;
