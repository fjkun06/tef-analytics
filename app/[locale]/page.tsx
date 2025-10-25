import HomeHeader from "@/components/home/HomeHeader";
import HomeProjectsSection from "@/components/home/HomeProjectsSection";
import HomeSkillsSection from "@/components/home/HomeSkillsSection";
import constants from "@/utils/constants";
export default async function Page() {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <HomeHeader />
      <div className="flex h-full w-full max-w-7xl flex-1 flex-col">
        <HomeSkillsSection
          domainDetails={constants.domainDetails}
          skills={constants.skills}
        />
        <HomeProjectsSection mainProjects={constants.mainProjects} />
      </div>
    </div>
  );
}
