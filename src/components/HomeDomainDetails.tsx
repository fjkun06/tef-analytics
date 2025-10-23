import React from "react";

import { HomeImpactCard } from "./cards";
import { DomainDetailsProps } from "@/interfaces/home.interface";

function HomeDomainDetails({ domainDetails }: { domainDetails: DomainDetailsProps[] }) {
  return (
    <div className={"flex flex-wrap justify-center gap-4 sm:gap-6 lg:flex-nowrap"}>
      {domainDetails.map((detail) => (
        <HomeImpactCard key={detail.domain} {...detail} />
      ))}
    </div>
  );
}

export default HomeDomainDetails;
