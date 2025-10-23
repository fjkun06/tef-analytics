import React from "react";

import HomeDomainDetails from "./HomeDomainDetails";
import HomeSkillsCarousel from "./HomeSkillsCarousel";
import HomeSkillsSectionDetails from "./HomeSkillsSectionDetails";
import SectionWrapper from "./wrappers/SectionWrapper";
import { HomeSkillsSectionProps } from "@/interfaces/home.interface";

function HomeSkillsSection({ domainDetails, skills }: HomeSkillsSectionProps) {
  return (
    <SectionWrapper className="flex flex-col gap-6 pt-12 pb-2 sm:gap-12 sm:pt-24 sm:pb-4">
      <HomeSkillsSectionDetails />
      <HomeDomainDetails domainDetails={domainDetails} />
      <HomeSkillsCarousel skills={skills} />
    </SectionWrapper>
  );
}

export default HomeSkillsSection;
