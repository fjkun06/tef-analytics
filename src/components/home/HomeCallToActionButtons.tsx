/**
 * HomeCallToActionButtons
 *
 * Renders a set of call-to-action navigation buttons for the homepage.
 * Each button label is translated using the scoped i18n for navigation keys.
 *
 * @returns  A flex container with navigation buttons.
 */
import React from "react";

import NavigateButton from "../buttons/NavigateButton";
import { getScopedI18n } from "@/locales/server";
import constants from "@/utils/constants";

/**
 * Async server component that displays call-to-action buttons on the homepage.
 * Buttons translation keys are taken from constants.callToActions and translated using i18n.
 */
async function HomeCallToActionButtons(): Promise<React.ReactElement> {
  const t = await getScopedI18n("nav");
  const t2 = (key: any) => t(key);

  return (
    <div className="flex items-center justify-center gap-4 max-[340px]:w-30 max-[340px]:flex-col">
      {constants.callToActions.map((action) => (
        <NavigateButton key={action} label={t2(action)} route={`/${action}`} />
      ))}
    </div>
  );
}

/**
 * Exports the HomeCallToActionButtons component for use in the homepage.
 */
export default HomeCallToActionButtons;
