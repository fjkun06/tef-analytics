import React, { Suspense } from "react";

import { LanguageSwitch } from "../LanguageSwitch";
import NavLink from "../NavLink";
import { NavbarProps } from "@/interfaces/navbar.interface";
import { hrefToNavKey } from "@/utils/functions/hrefToNavKey";

/**
 * NavbarMobile
 *
 * Renders the mobile version of the navigation bar, including navigation links and language switcher.
 *
 * @param isMobileOpen - Whether the mobile menu is open.
 * @param toggleMobileOpen - Function to toggle the mobile menu.
 * @param t - Translation function for navigation items.
 * @param navbarItems - Array of navigation items to display.
 * @returns {React.ReactNode} The mobile navigation bar.
 */
function NavbarMobile({
  isMobileOpen,
  toggleMobileOpen,
  t,
  navbarItems,
}: NavbarProps): React.ReactNode {
  return (
    <div
      data-testid="navbar-mobile"
      className={`transform transition-all duration-200 ease-in-out lg:hidden ${
        isMobileOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
      }`}
    >
      <nav className="space-y-1 px-4 pb-4 dark:bg-slate-900">
        {navbarItems.map((item) => (
          <NavLink
            key={item.name}
            href={item.href}
            className="block rounded-md px-3 py-2 text-base font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={toggleMobileOpen}
          >
            {t(hrefToNavKey(item.href))}
          </NavLink>
        ))}

        {/* Language switscher dropdown*/}
        <Suspense>
          <LanguageSwitch />
        </Suspense>
      </nav>
    </div>
  );
}

export default NavbarMobile;
