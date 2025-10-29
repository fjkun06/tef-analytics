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
import returnTranslatedListItems from "@/utils/functions/returnTranslatedListItems";

export default async function About() {
  const { t } = await getAboutMeController();
  const achievementItems = [
    "English (Professional)",
    "French (Native)",
    "German (Professional)",
  ];

  const descriptionItems = [
    "Implemented large-scale analytics solutions for clients.",
    "Developed predictive models for various industries",
    "Led a team of data scientists and analysts",
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
          <AboutSideSectionContainer title={t("Technologies & Tools")}>
            <ProjectCardBodySectionListGroup listItems={achievementItems} />
          </AboutSideSectionContainer>
        </aside>
        <div className="center-section col-start-2 col-end-4">
          <AboutInfoCard />
          <AboutSectionContainer title={t("Education")}>
            <AboutSectionContainerItem
              descriptionItems={returnTranslatedListItems(
                [
                  "Focus on Econometrics and Statistical Learning. Thesis on Outliers in GARCH Models.",
                ],
                t,
              )}
              title={t("Ph.D. in Statistics")}
              company={t("Technical University Dortmund")}
              timeSpan="2008 - 2013"
              hasThesis
              thesisUrl="https://frankjordan.vercel.app/en"
            />

            <AboutSectionContainerItem
              descriptionItems={returnTranslatedListItems(
                [
                  "Focus on Econometrics and Statistical Learning. Thesis on Outliers in GARCH Models.",
                ],
                t,
              )}
              title={t("M.Sc. Data Science")}
              company={t("Technical University Dortmund")}
              timeSpan="2005 - 2008"
            />
            <AboutSectionContainerItem
              descriptionItems={returnTranslatedListItems(descriptionItems, t)}
              title={t("Managing Director & Chief Data Scientist")}
              company="MSG Systems AG"
              timeSpan="2014 - 2017"
            />
            <AboutSectionContainerItem
              title={t("Introduction to Git and GitHub")}
              timeSpan="Feb 2013"
            />
          </AboutSectionContainer>
        </div>
      </div>
    </PagesWrapper>
  );
}
