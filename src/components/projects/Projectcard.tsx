/**
 * Projectcard
 *
 * Server component that renders a project card with category pills, title with time span,
 * expandable body content, and technologies section. Displays project information in a
 * styled card with glassmorphic effects and shadow styling.
 *
 * @returns {Promise<React.ReactElement>} Complete project card with all sections
 *
 * @example
 * ```tsx
 * <Projectcard />
 * ```
 */

/*eslint-disable*/
import React from "react";

import ProjectCardBody from "./ProjectCardBody";
import ProjectCardSection from "./ProjectCardSection";
import BasicHeading from "@/components/BasicHeading";
import { SkillPill } from "@/components/buttons";
import { getScopedI18n } from "@/locales/server";
import returnTranslatedListItems from "@/utils/functions/returnTranslatedListItems";

async function Projectcard() {
  // const t = await getScopedI18n("contact");
  const t = await getScopedI18n("projects");
  const t2 = (key: any) => t(key);

  const categories = ["Predictive Maintenance", "Predictive", "Maintenance"];
  const technologies = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Reacty",
    "TypeScripty",
    "Tailwind CSSy",
  ];

  const descriptionItems = [
    "Assist in predictive analytics tools screening",
    "Design and implement predictive models with R and SAS",
    "Provide predictive analytics expertise",
    "Support platform development and deployment",
  ];
  const achievementItems = [
    "Predictive modeling",
    "Weight optimization",
    "Volume forecasting",
  ];
  const practicalWorkItems = [
    "Built real-time invoice assessment system",
    "Optimized API data processing",
    "Implemented ML algorithms for fraud detection",
  ];

  const projectCardBodySections = [
    {
      title: "Description",
      type: "list",
      listItems: ["Item 1", "Item 2"],
    },
    {
      title: "Achievements",
      type: "list",
      listItems: ["Achievement 1", "Achievement 2"],
    },
    {
      title: "Practical Work",
      type: "pills",
      technologies: ["Work 1", "Work 2"],
    },
  ];

  // [
  //   {
  //     title: t2("Description"),
  //     type: "list",
  //     listItems: returnTranslatedListItems(descriptionItems, t2),
  //   },
  //   {
  //     title: t2("Practical Work"),
  //     type: "list",
  //     listItems: returnTranslatedListItems(practicalWorkItems, t2),
  //   },
  //   {
  //     title: t2("Key Achievements"),
  //     type: "pills",
  //     technologies: returnTranslatedListItems(achievementItems, t2),
  //   },
  // ];

  return (
    <div className="flex h-max w-full flex-col justify-start gap-3 rounded-xl p-3 shadow-[0_5px_20px_#18204833] backdrop-blur-lg sm:p-8 md:gap-6 lg:max-w-[382px]">
      <div className="flex w-full flex-col gap-2">
        <div className="flex flex-wrap justify-start gap-2">
          {categories.map((category) => (
            <SkillPill key={category} className="!text-xs sm:!text-sm" label={category} />
          ))}
        </div>
        <BasicHeading
          text="Predictive Maintenance for Industrial Equipment"
          isProjectCardHeading={true}
          projectTimeSpan="04/2022 - 06/2022"
        />
      </div>
      {/* <ProjectCardBody
        shortDescription="Custom LLM fine-tuned on legal domain with RAG-enhanced document processing pipeline."
        projectCardBodySections={projectCardBodySections}
      /> */}
      <ProjectCardSection
        className="max-md:-mt-4"
        title="Technologies"
        type="pills"
        technologies={technologies}
      />
    </div>
  );
}

export default Projectcard;
