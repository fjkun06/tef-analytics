import React from "react";

import HomeCallToActionButtons from "./HomeCallToActionButtons";
import HomeProjectCardsContainer from "./HomeProjectCardsContainer";
import HomeProjectsSectionHeader from "./HomeProjectsSectionHeader";
import SectionWrapper from "./wrappers/SectionWrapper";
import { HomeProjectsSectionProps } from "@/interfaces/home.interface";

function HomeProjectsSection({ mainProjects }: HomeProjectsSectionProps) {
  return (
    <SectionWrapper className="flex flex-col items-center gap-5 pt-4 pb-16 sm:gap-10 sm:pt-8">
      <HomeProjectsSectionHeader />
      <HomeProjectCardsContainer mainProjects={mainProjects} />
      <HomeCallToActionButtons />
    </SectionWrapper>
  );
}

export default HomeProjectsSection;
