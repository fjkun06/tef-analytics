"use client";
import { useState, useEffect } from "react";

import { useTheme } from "next-themes";

import { useI18n } from "@/locales/client";

export const paths = {
  moon: "M2.72 0A3.99 3.99 0 0 0 0 3.78c0 2.21 1.79 4 4 4c1.76 0 3.25-1.14 3.78-2.72c-.4.13-.83.22-1.28.22c-2.21 0-4-1.79-4-4c0-.45.08-.88.22-1.28",
  sun: "M12 7 A5 5 0 1 1 11.999 7Z M12 1 L12 3 M12 21 L12 23 M4.22 4.22 L5.64 5.64 M18.36 18.36 L19.78 19.78 M1 12 L3 12 M21 12 L23 12 M4.22 19.78 L5.64 18.36 M18.36 5.64 L19.78 4.22",
};

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useI18n();

  // useEffect only runs on the client, so now we can safely show the UI
  // avoid hydration problems
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      onClick={toggleTheme}
      className="flex size-max cursor-pointer transition-colors max-lg:pt-1.5 max-lg:pb-3 max-lg:pl-3 dark:focus-visible:outline-2 dark:focus-visible:outline-white"
      title={t("toggleTheme")}
      aria-label={t("toggleThemeArieaLabel")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={theme === "light" ? "0 0 8 8" : "0 0 24 24"}
        fill="none"
        stroke={theme === "dark" ? "white" : ""}
        strokeWidth="2"
        strokeLinecap={theme === "dark" ? undefined : "round"}
        strokeLinejoin={theme === "dark" ? undefined : "round"}
        color={"#0f172a"}
        className="size-6 transition-colors"
      >
        <path
          fill={theme === "light" ? "currentColor" : "none"}
          d={theme === "light" ? paths.moon : paths.sun}
        />
      </svg>
    </button>
  );
};

export default ThemeSwitcher;
