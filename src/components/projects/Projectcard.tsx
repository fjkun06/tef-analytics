/**
 * Projectcard
 *
 * Server component that renders a project card with category pills, title with time span,
 * expandable body content, and technologies section. Uses a controller to fetch project
 * data based on the index. Displays project information in a styled card with glassmorphic
 * effects and shadow styling.
 *
 * @param {Object} props - Component props
 * @param {number} props.index - Project index to fetch data for
 *
 * @returns {Promise<React.ReactElement>} Complete project card with all sections
 *
 * @example
 * ```tsx
 * <Projectcard index={0} />
 * <Projectcard index={1} />
 * ```
 */

import React from "react";

import getProjectCardController from "./ProjectCard.controller";
import ProjectCardBody from "./ProjectCardBody";
import ProjectCardSection from "./ProjectCardSection";
import BasicHeading from "@/components/BasicHeading";
import { SkillPill } from "@/components/buttons";

async function Projectcard({ index }: { index: number }) {
  const {
    technologyTitle,
    projectCardBodySections,
    categories,
    technologies,
    projectTimeSpan,
    shortDescription,
    title,
  } = await getProjectCardController(index);

  return (
    <div
      data-testid="project-card"
      className="flex h-max w-full flex-col justify-start gap-3 rounded-xl p-3 shadow-[0_5px_20px_#18204833] backdrop-blur-lg sm:p-8 md:gap-6 lg:max-w-[382px]"
    >
      <div className="flex w-full flex-col gap-2">
        <div className="flex flex-wrap justify-start gap-2">
          {categories.map((category) => (
            <SkillPill key={category} className="!text-xs sm:!text-sm" label={category} />
          ))}
        </div>
        <BasicHeading
          text={title}
          isProjectCardHeading={true}
          projectTimeSpan={projectTimeSpan}
        />
      </div>
      <ProjectCardBody
        shortDescription={shortDescription}
        projectCardBodySections={projectCardBodySections}
      />
      <ProjectCardSection
        className="max-md:-mt-4"
        title={technologyTitle}
        type="pills"
        technologies={technologies}
      />
    </div>
  );
}

export default Projectcard;
