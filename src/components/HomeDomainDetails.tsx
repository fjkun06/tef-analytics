import React from "react";

import { HomeImpactCard } from "./cards";
import { DomainDetailsProps } from "@/interfaces/home.interface";

/**
 * Async server component that displays domain impact cards on the homepage.
 *
 * @param domainDetails - Array of domain details to display (DomainDetailsProps[]).
 * @returns {React.ReactElement} A flex container with HomeImpactCard components.
 */
function HomeDomainDetails({
  domainDetails,
}: {
  domainDetails: DomainDetailsProps[];
}): React.ReactElement {
  return (
    <div className={"flex flex-wrap justify-center gap-4 sm:gap-6 lg:flex-nowrap"}>
      {domainDetails.map((detail) => (
        <HomeImpactCard key={detail.domain} {...detail} />
      ))}
    </div>
  );
}

/**
 * Exports the HomeDomainDetails component for use in the homepage.
 */
export default HomeDomainDetails;
