import React from "react";

import BasicHeading from "@/components/BasicHeading";

function Projectcard() {
  return (
    <div className="flex min-h-50 w-full flex-col rounded-xl p-3 shadow-[0_5px_20px_#18204833] backdrop-blur-lg sm:p-8 lg:max-w-[382px]">
      <BasicHeading
        text="Predictive Maintenance for Industrial Equipment"
        isProjectCardHeading={true}
      />
    </div>
  );
}

export default Projectcard;
