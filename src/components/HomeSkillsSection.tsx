/**
 * HomeSkillsSection
 *
 * Renders the skills section for the homepage, including details, domain cards, and a skills carousel.
 *
 * @param domainDetails - Array of domain details to display as cards.
 * @param skills - Array of skill names to display in the carousel.
 * @returns  The complete skills section for the homepage.
 */
import React from "react";

import HomeDomainDetails from "./HomeDomainDetails";
import HomeSkillsCarousel from "./HomeSkillsCarousel";
import HomeSkillsSectionDetails from "./HomeSkillsSectionDetails";
import SectionWrapper from "./wrappers/SectionWrapper";
import { HomeSkillsSectionProps } from "@/interfaces/home.interface";

/**
 * Component that displays the homepage skills section.
 *
 * @param domainDetails - Array of domain details for impact cards.
 * @param skills - Array of skill names for the skills carousel.
 */
function HomeSkillsSection({
  domainDetails,
  skills,
}: HomeSkillsSectionProps): React.ReactNode {
  return (
    <SectionWrapper className="flex flex-col gap-6 pt-12 pb-2 sm:gap-12 sm:pt-24 sm:pb-4">
      <HomeSkillsSectionDetails />
      <HomeDomainDetails domainDetails={domainDetails} />
      <HomeSkillsCarousel skills={skills} />
    </SectionWrapper>
  );
}

/**
 * Exports the HomeSkillsSection component for use in the homepage.
 */
export default HomeSkillsSection;
