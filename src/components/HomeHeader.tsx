import React from "react";

import HomeCallToActionButtons from "./HomeCallToActionButtons";
import HomeHeaderDetails from "./HomeHeaderDetails";

function HomeHeader() {
  return (
    <header className="flex h-[504px] max-h-[504px] w-full flex-col items-center justify-center bg-slate-900 bg-[url(/bg-white.svg)]">
      <div className="flex h-full w-full max-w-2xl flex-col items-center justify-center gap-4 px-3 sm:gap-8 sm:px-6 lg:max-w-4xl lg:px-0">
        <HomeHeaderDetails />
        <HomeCallToActionButtons />
      </div>
    </header>
  );
}

export default HomeHeader;
