import React from "react";

import SkillPill from "./buttons/SkillPill";
import { HomeImpactCard } from "./cards";
import InfiniteCarousel from "./InfiniteCarousel";
import SectionWrapper from "./wrappers/SectionWrapper";
import { HomeSkillsSectionProps } from "@/interfaces/home.interface";

function HomeSkillsSection({ domainDetails, skills }: HomeSkillsSectionProps) {
  return (
    <SectionWrapper className="flex flex-col gap-6 pt-12 pb-2 sm:gap-12 sm:pt-24 sm:pb-4">
      <div className="flex h-max flex-col items-center text-center">
        <h2 className="font-display flex flex-col items-center justify-center gap-2 text-3xl font-bold tracking-tight sm:flex-row sm:text-4xl">
          <span className="text-slate-900">Verwandelt Daten in</span>
          <span className="w-full text-center sm:w-[180px] sm:text-left">
            <span className="index-module_type__E-SaG text-primary">Erkenntnisse</span>
          </span>
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Transformiert Unternehmen durch datengesteuerte Lösungen und KI-Innovation
        </p>
      </div>
      <div className={"flex flex-wrap justify-center gap-4 sm:gap-6 lg:flex-nowrap"}>
        {domainDetails.map((detail) => (
          <HomeImpactCard key={detail.domain} {...detail} />
        ))}
      </div>
      <div className="flex h-max flex-col items-center overflow-hidden">
        <h3 className="mb-4 text-center text-sm font-semibold text-gray-900 sm:mb-6 sm:text-lg">
          Fachgebiete
        </h3>
        <InfiniteCarousel carouselClassName="w-[90%] md:w-[85%] max-w-full">
          {skills.map((skill) => (
            <SkillPill carousel key={skill} label={skill} />
          ))}
        </InfiniteCarousel>
      </div>
    </SectionWrapper>
  );
}

export default HomeSkillsSection;
