"use client";
import React from "react";

import useNavbarController from "./NavbarController";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar: React.FC = () => {
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

export default Navbar;
