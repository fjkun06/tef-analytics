/**
 * HomeProjectsSection
 *
 * Renders the projects section for the homepage, including header, project cards, and call-to-action buttons.
 *
 * @param mainProjects - Array of main project objects to display.
 * @returns  The complete projects section for the homepage.
 */
import React from "react";

import HomeCallToActionButtons from "./HomeCallToActionButtons";
import HomeProjectCardsContainer from "./HomeProjectCardsContainer";
import HomeProjectsSectionHeader from "./HomeProjectsSectionHeader";
import SectionWrapper from "../wrappers/SectionWrapper";
import { HomeProjectsSectionProps } from "@/interfaces/home.interface";

/**
 * Component that displays the homepage projects section.
 *
 * @param mainProjects - Array of main projects to render.
 */
function HomeProjectsSection({
  mainProjects,
}: HomeProjectsSectionProps): React.ReactNode {
  return (
    <SectionWrapper className="flex flex-col items-center gap-5 pt-4 pb-16 sm:gap-10 sm:pt-8">
      <HomeProjectsSectionHeader />
      <HomeProjectCardsContainer mainProjects={mainProjects} />
      <HomeCallToActionButtons />
    </SectionWrapper>
  );
}

/**
 * Exports the HomeProjectsSection component for use in the homepage.
 */
export default HomeProjectsSection;
