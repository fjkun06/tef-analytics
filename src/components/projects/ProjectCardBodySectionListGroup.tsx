/**
 * ProjectCardBodySectionListGroup
 *
 * Client component that renders a list group with bullet points for project card sections.
 * Displays a vertical list of items with slate-colored bullets, suitable for descriptions,
 * achievements, or practical work items within project cards.
 *
 * @param {ProjectCardListGroupProps} props - Component props
 * @param {string[]} props.listItems - Array of items to display as list
 *
 * @returns {React.ReactElement} Unordered list with styled bullet points
 *
 * @example
 * ```tsx
 * <ProjectCardBodySectionListGroup listItems={["Item 1", "Item 2", "Item 3"]} />
 * ```
 */
import React from "react";

import BasicText from "@/components/BasicText";
import { ProjectCardListGroupProps } from "@/interfaces/projects.interface";

function ProjectCardBodySectionListGroup({
  listItems,
}: ProjectCardListGroupProps): React.ReactElement {
  return (
    <ul className="flex w-full flex-col gap-1">
      {listItems.map((item, index) => (
        <li className="flex h-max items-start gap-2" key={index}>
          <span className="mt-[9px] h-1 w-1 rounded-full bg-slate-700 sm:h-1.5 sm:w-1.5" />
          <BasicText text={item} className="!mt-0 !text-sm !text-slate-700" />
        </li>
      ))}
    </ul>
  );
}

export default ProjectCardBodySectionListGroup;
