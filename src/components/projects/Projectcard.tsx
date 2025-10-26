/**
 * Projectcard
 *
 * Server component that renders a project card with category pills, title with time span,
 * expandable body content, and technologies section. Displays project information in a
 * styled card with glassmorphic effects and shadow styling.
 *
 * @returns {Promise<React.ReactElement>} Complete project card with all sections
 *
 * @example
 * ```tsx
 * <Projectcard />
 * ```
 */
import React from "react";

import ProjectCardBody from "./ProjectCardBody";
import ProjectCardSection from "./ProjectCardSection";
import BasicHeading from "@/components/BasicHeading";
import { SkillPill } from "@/components/buttons";
// import { getScopedI18n } from "@/locales/server";

async function Projectcard() {
  // const t = await getScopedI18n("contact");

  const categories = ["Predictive Maintenance", "Predictive", "Maintenance"];
  const technologies = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Reacty",
    "TypeScripty",
    "Tailwind CSSy",
  ];
  return (
    <div className="flex h-max w-full flex-col justify-start gap-3 rounded-xl p-3 shadow-[0_5px_20px_#18204833] backdrop-blur-lg sm:p-8 md:gap-6 lg:max-w-[382px]">
      <div className="flex w-full flex-col gap-2">
        <div className="flex flex-wrap justify-start gap-2">
          {categories.map((category) => (
            <SkillPill key={category} className="!text-xs sm:!text-sm" label={category} />
          ))}
        </div>
        <BasicHeading
          text="Predictive Maintenance for Industrial Equipment"
          isProjectCardHeading={true}
          projectTimeSpan="04/2022 - 06/2022"
        />
      </div>
      <ProjectCardBody />
      <ProjectCardSection
        className="max-md:-mt-4"
        title="Technologies"
        type="pills"
        technologies={technologies}
      />
    </div>
  );
}

export default Projectcard;
