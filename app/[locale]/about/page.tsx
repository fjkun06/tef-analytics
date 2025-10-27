import {
  AboutFloatingPillsContainer,
  AboutInfoCard,
  AboutPhoto,
  AboutRegularPillsContainer,
  AboutSideSectionContainer,
  PagesWrapper,
  ProjectCardBodySectionListGroup,
} from "@/components";

export default function Contact() {
  const achievementItems = [
    "English (Professional)",
    "French (Native)",
    "German (Professional)",
  ];
  return (
    <PagesWrapper className={"!px-2 !py-6 sm:!px-4 sm:!py-12 lg:px-8"}>
      <div className="relative z-1 flex h-full w-full max-w-7xl flex-col-reverse gap-4 bg-green-300 p-2 md:grid-cols-3 lg:grid">
        <aside className="left-section col-start-1 col-end-2 flex w-full flex-col items-center bg-orange-200 p-2 sm:p-4 lg:max-w-[340px] lg:p-8">
          <AboutPhoto />
          <AboutSideSectionContainer title="Methodologies & Practices">
            <p className="text-sm text-gray-600">
              Data Science Expert and ML Engineer with over 16 years of experience.
              Specialized in developing innovative AI solutions and transforming complex
              data into actionable insights for businesses.
            </p>
          </AboutSideSectionContainer>
          <AboutSideSectionContainer title="Technologies & Tools">
            <AboutFloatingPillsContainer />
          </AboutSideSectionContainer>
          <AboutSideSectionContainer title="Technologies & Tools">
            <AboutRegularPillsContainer />
          </AboutSideSectionContainer>
          <AboutSideSectionContainer title="Technologies & Tools">
            <ProjectCardBodySectionListGroup listItems={achievementItems} />
          </AboutSideSectionContainer>
        </aside>
        <div className="center-section col-start-2 col-end-4">
          <AboutInfoCard />
        </div>
      </div>
    </PagesWrapper>
  );
}
