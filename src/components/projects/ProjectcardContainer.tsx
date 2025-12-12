"use client";
import React from "react";

import ProjectCardBody from "./ProjectCardBody";
import ProjectCardSection from "./ProjectCardSection";
import BasicHeading from "@/components/BasicHeading";
import { SkillPill } from "@/components/buttons";
import { ProjectCardContainerProps } from "@/interfaces/projects.interface";

export default function ProjectCardContainer({
  technologyTitle,
  projectCardBodySections,
  categories,
  technologies,
  projectTimeSpan,
  shortDescription,
  title,
}: ProjectCardContainerProps): React.ReactElement {
  const [isProjectCardBodyOpen, setIsProjectCardBodyOpen] = React.useState(false);

  const toggleSetIsProjectCardBodyOpen = () => {
    setIsProjectCardBodyOpen((prev) => !prev);
  };

  return (
    <div
      data-testid="project-card"
      className="flex h-max w-full flex-col justify-start gap-3 rounded-xl p-3 shadow-[0_5px_20px_#18204833] backdrop-blur-lg sm:p-8 md:gap-6 lg:max-w-[382px]"
      onMouseEnter={toggleSetIsProjectCardBodyOpen}
      onMouseLeave={toggleSetIsProjectCardBodyOpen}
    >
      <div className="flex w-full flex-col gap-2">
        <div className="flex flex-wrap justify-start gap-2">
          {categories.map((category) => (
            <SkillPill key={category} className="text-xs! sm:text-sm!" label={category} />
          ))}
        </div>
        <BasicHeading
          text={title}
          isProjectCardHeading={true}
          projectTimeSpan={projectTimeSpan}
        />
      </div>
      <ProjectCardBody
        isProjectCardBodyOpen={isProjectCardBodyOpen}
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
