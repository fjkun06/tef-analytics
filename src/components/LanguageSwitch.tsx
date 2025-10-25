"use client";

import React from "react";

import LanguageSwtichButton from "./buttons/LanguageSwtichButton";
import LanguageSwtichDropdown from "./dropdowns/LanguageSwtichDropdown";
import { useLanguageSwitchController } from "./LanguageSwitch.controller";

export function LanguageSwitch() {
  const { open, ref, current, languageLocales, currentIcon, tLang, setOpen, onSelect } =
    useLanguageSwitchController();

  return (
    <div data-testid="language-switch" className="relative" ref={ref}>
      <LanguageSwtichButton
        open={open}
        setOpen={setOpen}
        currentIcon={currentIcon}
        current={current}
      />

      {open && (
        <LanguageSwtichDropdown
          current={current}
          onSelect={onSelect}
          tLang={(code: any) => tLang(code)}
          languageLocales={languageLocales}
        />
      )}
    </div>
  );
}

export default LanguageSwitch;
