/**
 * LanguageSwitch
 *
 * Client component that provides an interactive language switcher with dropdown.
 * Uses a controller for state management and dynamic height calculations for smooth
 * expand/collapse animations. Supports keyboard navigation and accessibility features.
 *
 * @returns {React.ReactElement} Language switcher with button and dropdown
 *
 * @example
 * ```tsx
 * <LanguageSwitch />
 * ```
 */
"use client";

import React from "react";

import LanguageSwtichButton from "./buttons/LanguageSwtichButton";
import LanguageSwtichDropdown from "./dropdowns/LanguageSwtichDropdown";
import { useLanguageSwitchController } from "./LanguageSwitch.controller";
import useDynamicHeight from "@/hooks/useDynamicHeight";
import mergeRefs from "@/utils/functions/mergeRefs";

export function LanguageSwitch() {
  const { open, ref, current, languageLocales, currentIcon, tLang, setOpen, onSelect } =
    useLanguageSwitchController();

  //use hook to dynamically set max height as open state is toggled
  const { contentRef, height } = useDynamicHeight(open);

  return (
    <div
      data-testid="language-switch"
      className={
        "relative transition-all duration-500 ease-in-out max-lg:overflow-hidden"
      }
      ref={mergeRefs(ref, contentRef)}
      style={{
        maxHeight: open ? `${height + 100}px` : "44px",
      }}
    >
      <LanguageSwtichButton
        open={open}
        setOpen={setOpen}
        currentIcon={currentIcon}
        current={current}
      />

      <LanguageSwtichDropdown
        current={current}
        onSelect={onSelect}
        tLang={(code: any) => tLang(code)}
        languageLocales={languageLocales}
        isOpen={open}
      />
    </div>
  );
}

export default LanguageSwitch;
