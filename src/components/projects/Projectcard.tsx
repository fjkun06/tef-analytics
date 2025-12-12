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
import ProjectCardContainer from "./ProjectcardContainer";

async function ProjectCard({ index }: { index: number }) {
  const props = await getProjectCardController(index);

  return <ProjectCardContainer {...props} />;
}

export default ProjectCard;
