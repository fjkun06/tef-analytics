/**
 * HomeSkillsCarousel
 *
 * Renders a carousel of skill pills for the homepage skills section.
 *
 * @param skills - Array of skill names to display in the carousel.
 * @returns  A flex container with a subheading and infinite carousel of skills.
 */
import React from "react";

import HomeSkillsSectionSubHeading from "./HomeSkillsSectionSubHeading";
import SkillPill from "../buttons/SkillPill";
import InfiniteCarousel from "../InfiniteCarousel";

/**
 * Component that displays the homepage skills carousel.
 *
 * @param skills - Array of skill names to render as pills in the carousel.
 */
function HomeSkillsCarousel({ skills }: { skills: string[] }): React.ReactNode {
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

/**
 * Exports the HomeSkillsCarousel component for use in the homepage.
 */
export default HomeSkillsCarousel;
