import HomeHeader from "@/components/home/HomeHeader";
import HomeProjectsSection from "@/components/home/HomeProjectsSection";
import HomeSkillsSection from "@/components/home/HomeSkillsSection";
import constants from "@/utils/constants";
export default async function Page() {
  return (
    <div
      className={
        "relative mx-auto flex min-h-screen w-full flex-col items-center bg-slate-200 backdrop-blur-md"
      }
    >
      <div
        className={
          "relative flex min-h-screen w-full flex-col items-center bg-slate-200 backdrop-blur-md"
        }
      >
        {/* Diagonal Grid with Light Pattern */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)",
            backgroundSize: "40px 40px",
          }}
        />
        <HomeHeader />
        <div className="flex h-full w-full max-w-7xl flex-1 flex-col">
          <HomeSkillsSection
            domainDetails={constants.domainDetails}
            skills={constants.skills}
          />
          <HomeProjectsSection mainProjects={constants.mainProjects} />
        </div>
      </div>
    </div>
  );
}
