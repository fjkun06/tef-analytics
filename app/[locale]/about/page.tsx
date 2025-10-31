import {
  AboutPillsContainer,
  AboutInfoCard,
  AboutPhoto,
  AboutProgressItem,
  AboutSectionContainer,
  AboutSectionContainerItem,
  AboutSideSectionContainer,
  getAboutMeController,
  PagesWrapper,
  ProjectCardBodySectionListGroup,
} from "@/components";
import {
  // import returnTranslatedListItems, {
  generateTranslationKeys,
} from "@/utils/functions/returnTranslatedListItems";

export default async function About() {
  const { t, school, work } = await getAboutMeController();
  const achievementItems = [
    "English (Professional)",
    "French (Native)",
    "German (Professional)",
  ];

  return (
    <PagesWrapper className={"!px-2 !py-6 sm:!px-4 sm:!py-12 lg:px-8"}>
      <div className="relative z-1 flex h-full w-full max-w-[1120px] flex-col gap-4 p-2 md:grid-cols-3 lg:grid">
        <aside className="left-section col-start-1 col-end-2 flex w-full flex-col items-center rounded-xl p-2 shadow-[0_5px_20px_#18204833] backdrop-blur-lg sm:p-4 lg:max-w-[340px] lg:p-8">
          <AboutPhoto />
          <AboutSideSectionContainer title={t("Core Expertise")}>
            <AboutProgressItem percentage={90} delay={0.1} title="Data Science" />
            <AboutProgressItem percentage={95} delay={0.2} title="Machine Learning" />
            <AboutProgressItem percentage={90} delay={0.3} title="Deep Learning" />
            <AboutProgressItem percentage={85} delay={0.4} title="LLM" />
            <AboutProgressItem percentage={85} delay={0.5} title="MLOps" />
          </AboutSideSectionContainer>
          <AboutSideSectionContainer title={t("Methodologies & Practices")}>
            <p className="text-sm text-gray-600">
              {t(
                "Data Science Expert and ML Engineer with over 16 years of experience. Specialized in developing innovative AI solutions and transforming complex data into actionable insights for businesses.",
              )}
            </p>
          </AboutSideSectionContainer>
          <AboutSideSectionContainer title={t("Technologies & Tools")}>
            <AboutPillsContainer
              isFloating
              title={t("ML Frameworks")}
              pills={["TensorFlow", "Kubernetes", "Docker", "MLflow"]}
            />
          </AboutSideSectionContainer>
          <AboutSideSectionContainer title={t("Technologies & Tools")}>
            <AboutPillsContainer
              title={t("ML Frameworks")}
              pills={["TensorFlow", "Kubernetes", "Docker", "MLflow"]}
            />
          </AboutSideSectionContainer>
          <AboutSideSectionContainer title={t("languages")}>
            <ProjectCardBodySectionListGroup listItems={achievementItems} />
          </AboutSideSectionContainer>
        </aside>
        <div className="center-section col-start-2 col-end-4">
          <AboutInfoCard />

          <AboutSectionContainer title={t("experience")}>
            {work.map(({ descriptionItemsCount }, index) => (
              <AboutSectionContainerItem
                key={index + Math.random()}
                descriptionItems={generateTranslationKeys(
                  index,
                  descriptionItemsCount,
                  t,
                )}
                title={t(`work.${index}.title`)}
                company={t(`work.${index}.company`)}
                timeSpan={t(`work.${index}.timeSpan`)}
              />
            ))}
          </AboutSectionContainer>

          <AboutSectionContainer title={t("education")}>
            {school.map(({ descriptionItemsCount }, index) => (
              <AboutSectionContainerItem
                key={index + Math.random()}
                descriptionItems={generateTranslationKeys(
                  index,
                  descriptionItemsCount,
                  t,
                )}
                title={t(`work.${index}.title`)}
                company={t(`work.${index}.company`)}
                timeSpan={t(`work.${index}.timeSpan`)}
              />
            ))}
          </AboutSectionContainer>
        </div>
      </div>
    </PagesWrapper>
  );
}
