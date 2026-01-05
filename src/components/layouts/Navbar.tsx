"use client";
import React from "react";

import useNavbarController from "./Navbar.controller";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

/**
 * Navbar
 *
 * Renders the main navigation bar, including desktop and mobile variants.
 * Uses a controller hook for state and translation logic.
 *
 * @returns {React.ReactNode} The navigation bar for the application.
 */
const Navbar = (): React.ReactNode => {
  const { isMobileOpen, toggleMobileOpen, t, navbarItems, ref } = useNavbarController();

  return (
    <header
      ref={ref}
      className="borderl-slate-200 dark:borderl-slate-700 sticky top-0 z-999 w-full border-b bg-white dark:bg-slate-900 dark:bg-[url(/bg-white.svg)]"
    >
      <NavbarDesktop
        isMobileOpen={isMobileOpen}
        toggleMobileOpen={toggleMobileOpen}
        t={t}
        navbarItems={navbarItems}
      />

      {/* Mobile menu panel */}

      <NavbarMobile
        isMobileOpen={isMobileOpen}
        toggleMobileOpen={toggleMobileOpen}
        t={t}
        navbarItems={navbarItems}
      />
    </header>
  );
};

/**
 * Exports the Navbar component for use in the application.
 */
export default Navbar;
