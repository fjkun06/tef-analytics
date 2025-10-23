import React from "react";

import NavigateButton from "./buttons/NavigateButton";

function HomeHeader() {
  return (
    <header className="flex h-[504px] max-h-[504px] w-full flex-col items-center justify-center bg-slate-900 bg-[url(/bg-white.svg)]">
      {/* <header className="flex h-[504px] max-h-[504px] w-full flex-col items-center justify-center bg-[#051141] bg-[url(/bg-white.svg)]"> */}

      <div className="flex h-full w-full max-w-2xl flex-col items-center justify-center gap-4 px-3 sm:gap-8 sm:px-6 lg:max-w-4xl lg:px-0">
        <h1 className="font-display text-center text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">
          <span className="mb-2 block sm:mb-4">Ich bin Arsene Ntiwa</span>
          <span className="block text-lg sm:text-2xl md:text-3xl">
            Willkommen in meiner digitalen Welt
          </span>
        </h1>
        <p className="text-center text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-8 md:text-lg">
          Data Science Experte und KI-Spezialist, der komplexe Daten in umsetzbare
          Erkenntnisse verwandelt. Erforscht die Grenzen des maschinellen Lernens und der
          künstlichen Intelligenz
        </p>
        <div className="flex justify-center gap-4">
          <NavigateButton label="Link Text" route="#" />
          <NavigateButton label="Link Text2" route="#" />
          <NavigateButton label="Link Text3" route="#" />
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
