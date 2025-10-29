"use client";
import React, { Suspense } from "react";

import { LanguageSwitch } from "../LanguageSwitch";
import NavLink from "../NavLink";
import useDynamicHeight from "@/hooks/useDynamicHeight";
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
  //use hook to dynamically set max height as open state is toggled
  const { contentRef, height } = useDynamicHeight(isMobileOpen);
  return (
    <div
      ref={contentRef}
      data-testid="navbar-mobile"
      className={
        "transform overflow-hidden transition-all duration-500 ease-in-out lg:hidden"
      }
      style={{
        maxHeight: isMobileOpen ? `${height + 300}px` : "0px",
      }}
    >
      <nav className="h-full space-y-1 px-4 pb-4 dark:bg-slate-900">
        {navbarItems.map((item) => (
          <NavLink
            key={item.name}
            href={item.href}
            className="block px-3 py-2 text-base font-medium transition"
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
