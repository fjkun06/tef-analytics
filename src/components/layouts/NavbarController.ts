"use client";
import { useRef, useState } from "react";

import useClickedOutside from "@/hooks/useClickedOutside";
import { NavbarProps, NavItem } from "@/interfaces/navbar.interface";
import { useScopedI18n } from "@/locales/client";
import constants from "@/utils/constants";

function useNavbarController(): NavbarProps {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const t = useScopedI18n("nav");
  const navbarItems: NavItem[] = constants.navItems;
  const ref = useRef<HTMLDivElement | null>(null);

  const t2 = (key: any) => t(key);
  const toggleMobileOpen = () => {
    setIsMobileOpen((prev) => !prev);
  };

  useClickedOutside({ ref, functionToBeTriggered: () => setIsMobileOpen(false) });

  return {
    isMobileOpen,
    toggleMobileOpen,
    t: t2,
    navbarItems,
    ref,
  };
}

export default useNavbarController;
