/**
 * ImpressumContentContainer
 *
 * Renders a container for multiple imprint content sections, using constants for props.
 *
 * @returns {React.ReactElement} The container element with multiple content sections.
 */
import React from "react";

import ImpressumContent from "./ImpressumContent";
import constants from "@/utils/constants";

function ImpressumContentContainer(): React.ReactElement {
  const { impressum } = constants;
  return (
    <>
      {impressum.lowerHalf.map((props) => (
        <ImpressumContent key={props.index} {...props} />
      ))}
    </>
  );
}

export default ImpressumContentContainer;
