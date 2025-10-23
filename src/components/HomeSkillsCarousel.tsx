import React from "react";

import SkillPill from "./buttons/SkillPill";
import HomeSkillsSectionSubHeading from "./HomeSkillsSectionSubHeading";
import InfiniteCarousel from "./InfiniteCarousel";

function HomeSkillsCarousel({ skills }: { skills: string[] }) {
  return (
    <div className="flex h-max flex-col items-center overflow-hidden">
      <HomeSkillsSectionSubHeading />
      <InfiniteCarousel carouselClassName="w-[90%] md:w-[85%] max-w-full">
        {skills.map((skill) => (
          <SkillPill carousel key={skill} label={skill} />
        ))}
      </InfiniteCarousel>
    </div>
  );
}

export default HomeSkillsCarousel;
