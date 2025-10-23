import React from "react";

import NavigateButton from "./buttons/NavigateButton";
import { HomeProjectCard } from "./cards";
import SectionWrapper from "./wrappers/SectionWrapper";
import { HomeProjectsSectionProps } from "@/interfaces/home.interface";

function HomeProjectsSection({ mainProjects }: HomeProjectsSectionProps) {
  return (
    <SectionWrapper className="flex flex-col gap-5 pt-4 pb-16 sm:gap-10 sm:pt-8">
      <div className="text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          Ausgewählte Projekte
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:mt-4 sm:text-base sm:leading-8 md:text-lg">
          Innovative Lösungen branchenübergreifend unter Einsatz modernster KI- und
          ML-Technologien
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:flex-nowrap lg:justify-between">
        {mainProjects.map((project) => (
          <HomeProjectCard key={project.icon} {...project} />
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <NavigateButton label="Link Text" route="#" />
        <NavigateButton label="Link Text2" route="#" />
        <NavigateButton label="Link Text3" route="#" />

        {/* <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
          <div className="translate-y-0 transition group-hover:-translate-y-[150%]">
            Hover me
          </div>
          <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">
            Hover me
          </div>
        </button>
        <button
          type="button"
          className="me-2 mb-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
        >
          Purple to Blue
        </button> */}
      </div>
    </SectionWrapper>
  );
}

export default HomeProjectsSection;
