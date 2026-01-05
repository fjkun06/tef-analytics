/**
 * ProjectCardSection
 *
 * Client component that displays a list of technologies/skills used in a project.
 * Shows a heading followed by wrapped technology tags in a flex layout.
 * Used within project cards to showcase technical stack and tools.
 *
 * @param {ProjectCardSectionProps} props - Component props
 * @param {string[]} props.technologies - Array of technology/skill names to display
 * @param {string} props.title - Section heading/title (e.g., "Section", "Stack")
 *
 * @returns {React.ReactElement} Container with heading and wrapped technology tags
 */
import React from "react";

import ProjectCardBodySectionListGroup from "./ProjectCardBodySectionListGroup";
import ProjectCardPillsGroup from "./ProjectCardPillsGroup";
import BasicHeading from "@/components/BasicHeading";
import { ProjectCardSectionProps } from "@/interfaces/projects.interface";

function ProjectCardSection({
  className,
  ...props
}: ProjectCardSectionProps): React.ReactElement {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Section heading for technologies */}
      <BasicHeading text={props.title} className="capitalize" />

      {/* Section Content */}
      {props.type === "list" && (
        <ProjectCardBodySectionListGroup listItems={props.listItems} />
      )}

      {props.type === "pills" && (
        <ProjectCardPillsGroup technologies={props.technologies} />
      )}
    </div>
  );
}

export default ProjectCardSection;
