import React from "react";

import NavigateButton from "./buttons/NavigateButton";
import { getScopedI18n } from "@/locales/server";
import constants from "@/utils/constants";

async function HomeCallToActionButtons() {
  const t = await getScopedI18n("nav");
  const t2 = (key: any) => t(key);

  return (
    <div className="flex items-center justify-center gap-4 max-[340px]:w-30 max-[340px]:flex-col">
      {constants.callToActions.map((action) => (
        <NavigateButton key={action} label={t2(action)} route={`/${action}`} />
      ))}

      {/* <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
          <div className="translate-y-0 transition group-hover:-translate-y-[150%]">
            Hover me
          </div>
          <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">
            Hover me
          </div>
        </button>
        <button
          type="button"
          className="me-2 mb-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
        >
          Purple to Blue
        </button> */}
    </div>
  );
}

export default HomeCallToActionButtons;
