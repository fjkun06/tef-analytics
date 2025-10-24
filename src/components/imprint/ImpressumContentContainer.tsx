import React from "react";

import ImpressumContent from "./ImpressumContent";
import constants from "@/utils/constants";

function ImpressumContentContainer() {
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
