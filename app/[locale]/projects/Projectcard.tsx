import React from "react";

import ProjectCardTechnologies from "./ProjectCardTechnologies";
import BasicHeading from "@/components/BasicHeading";
import { SkillPill } from "@/components/buttons";
// import { getScopedI18n } from "@/locales/server";

async function Projectcard() {
  // const t = await getScopedI18n("contact");

  const categories = ["Predictive Maintenance", "Predictive", "Maintenance"];
  return (
    <div className="flex min-h-50 w-full flex-col justify-start gap-6 rounded-xl p-3 shadow-[0_5px_20px_#18204833] backdrop-blur-lg sm:p-8 lg:max-w-[382px]">
      <div className="flex w-full flex-col gap-2">
        <div className="flex flex-wrap justify-start gap-2">
          {categories.map((category) => (
            <SkillPill key={category} className="!text-xs sm:!text-sm" label={category} />
          ))}
        </div>
        <BasicHeading
          text="Predictive Maintenance for Industrial Equipment"
          isProjectCardHeading={true}
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <ProjectCardTechnologies
          title="Technologies"
          technologies={[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "React",
            "TypeScript",
            "Tailwind CSS",
          ]}
        />
      </div>
    </div>
  );
}

export default Projectcard;
