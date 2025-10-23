import React from "react";

import { HomeProjectCard } from "./cards";
import { Project } from "@/interfaces/home.interface";

function HomeProjectCardsContainer({ mainProjects }: { mainProjects: Project[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:flex-nowrap lg:justify-between">
      {mainProjects.map((project) => (
        <HomeProjectCard key={project.icon} {...project} />
      ))}
    </div>
  );
}

export default HomeProjectCardsContainer;
