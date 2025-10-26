/**
 * ProjectCardTechnologies
 *
 * Client component that displays a list of technologies/skills used in a project.
 * Shows a heading followed by wrapped technology tags in a flex layout.
 * Used within project cards to showcase technical stack and tools.
 *
 * @param {ProjectCardTechnologiesProps} props - Component props
 * @param {string[]} props.technologies - Array of technology/skill names to display
 * @param {string} props.title - Section heading/title (e.g., "Technologies", "Stack")
 *
 * @returns {React.ReactElement} Container with heading and wrapped technology tags
 */
import React from "react";

import ProjectCardTechnologyPill from "./ProjectCardTechnologyPill";
import BasicHeading from "@/components/BasicHeading";
import { ProjectCardTechnologiesProps } from "@/interfaces/projects.interface";

function ProjectCardTechnologies({
  technologies,
  title,
}: ProjectCardTechnologiesProps): React.ReactElement {
  return (
    <div className="flex flex-col gap-3">
      {/* Section heading for technologies */}
      <BasicHeading text={title} className="capitalize" />

      {/* Wrapped list of technology tags */}
      <div className="flex flex-wrap justify-start gap-2">
        {technologies.map((tech) => (
          <ProjectCardTechnologyPill key={tech} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default ProjectCardTechnologies;
