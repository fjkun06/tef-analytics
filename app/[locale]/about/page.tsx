import {
  AboutInfoCard,
  AboutPhoto,
  AboutProgressItem,
  AboutSectionContainer,
  AboutSectionContainerItem,
  AboutSideSectionContainer,
  getAboutMeController,
  PagesWrapper,
  ProjectCardBodySectionListGroup,
  AboutProgressItemContainer,
} from "@/components";

export default async function About() {
  const { t, experience, languages, technicalSkills } = await getAboutMeController();

  return (
    <PagesWrapper className={"!px-2 !py-6 sm:!px-4 sm:!py-12 lg:px-8"}>
      <div className="relative z-1 flex h-full min-h-full w-full max-w-[1120px] flex-col gap-12 p-2 md:grid-cols-3 lg:grid lg:gap-4">
        <aside className="left-section col-start-1 col-end-2 flex h-max w-full flex-col items-center gap-12 rounded-xl p-2 shadow-[0_5px_20px_#18204833] backdrop-blur-lg sm:p-4 lg:max-w-[340px] lg:p-8">
          <AboutPhoto />
          <AboutSideSectionContainer title={t("Core Expertise")}>
            <div className="flex w-full flex-col gap-6">
              {technicalSkills.map(([key, value], parentIndex) => (
                <AboutProgressItemContainer title={t(key)} key={key}>
                  {value.map((item, childIndex) => (
                    <AboutProgressItem
                      key={childIndex}
                      percentage={item.percentage}
                      delay={parentIndex * 0.7 + 0.1 * childIndex}
                      title={item.title}
                    />
                  ))}
                </AboutProgressItemContainer>
              ))}
            </div>
          </AboutSideSectionContainer>

          <AboutSideSectionContainer title={t("language")}>
            <ProjectCardBodySectionListGroup listItems={languages} />
          </AboutSideSectionContainer>
        </aside>
        <div className="center-section col-start-2 col-end-4">
          <div className="flex h-full w-full flex-col gap-12">
            <AboutInfoCard />

            <AboutSectionContainer title={t("Profil: Data Scientist & ML Engineer")}>
              <div className="flex gap-4">
                <button type="button" className="bg-green-300">
                  Profil A
                </button>
                <button type="button" className="bg-green-300">
                  Profil B
                </button>
              </div>
              <p className="text-sm text-gray-600">{t("description")}</p>
            </AboutSectionContainer>

            {experience.map(({ title, data }) => (
              <AboutSectionContainer title={title} key={title}>
                {data.map((props, index) => (
                  <AboutSectionContainerItem key={index + Math.random()} {...props} />
                ))}
              </AboutSectionContainer>
            ))}
          </div>
        </div>
      </div>
    </PagesWrapper>
  );
}
