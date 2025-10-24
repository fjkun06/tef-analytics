/**
 * HomeProjectCardsContainer
 *
 * Renders a container of project cards for the homepage, displaying each main project.
 *
 * @param mainProjects - Array of project objects to display.
 * @returns  A flex container with HomeProjectCard components.
 */
import React from "react";

import { HomeProjectCard } from "./cards";
import { Project } from "@/interfaces/home.interface";

/**
 * Component that displays a set of project cards on the homepage.
 *
 * @param mainProjects - Array of Project objects to render as cards.
 */
function HomeProjectCardsContainer({
  mainProjects,
}: {
  mainProjects: Project[];
}): React.ReactNode {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:flex-nowrap lg:justify-between">
      {mainProjects.map((project) => (
        <HomeProjectCard key={project.icon} {...project} />
      ))}
    </div>
  );
}

/**
 * Exports the HomeProjectCardsContainer component for use in the homepage.
 */
export default HomeProjectCardsContainer;
