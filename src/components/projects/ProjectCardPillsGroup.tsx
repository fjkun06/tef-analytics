/**
 * ProjectCardPillsGroup
 *
 * Client component that renders a group of technology/skill pills in a flex wrap layout.
 * Displays multiple ProjectCardTechnologyPill components with random gradient backgrounds
 * for a visually appealing technology showcase in project cards.
 *
 * @param {ProjectCardPillsGroupProps} props - Component props
 * @param {string[]} props.technologies - Array of technology names to display as pills
 *
 * @returns {React.ReactElement} Flex container with wrapped technology pills
 *
 * @example
 * ```tsx
 * <ProjectCardPillsGroup technologies={["React", "TypeScript", "Tailwind CSS"]} />
 * ```
 */
import React from "react";

import ProjectCardTechnologyPill from "./ProjectCardTechnologyPill";
import { ProjectCardPillsGroupProps } from "@/interfaces/projects.interface";

function ProjectCardPillsGroup({
  technologies,
}: ProjectCardPillsGroupProps): React.ReactElement {
  return (
    <div className="flex flex-wrap justify-start gap-2">
      {technologies.map((tech) => (
        <ProjectCardTechnologyPill key={tech} tech={tech} />
      ))}
    </div>
  );
}

export default ProjectCardPillsGroup;
