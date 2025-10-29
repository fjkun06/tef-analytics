/**
 * AboutSectionContainerItem
 *
 * Server component that displays individual timeline items for education or experience.
 * Features timeline styling with connected dots, translates content via i18n,
 * and supports optional thesis links. Handles both single descriptions and bullet lists.
 *
 * @param {AAboutSectionContainerItemProps} props - Component props
 * @param {string[]} [props.descriptionItems] - Array of description bullet points
 * @param {string} props.title - Item title (degree, position, etc.)
 * @param {string} [props.company] - Optional company or institution name
 * @param {string} props.timeSpan - Duration or date range
 * @param {boolean} [props.hasThesis] - Whether item includes thesis/dissertation
 * @param {string} [props.thesisUrl] - Optional URL link to thesis document
 *
 * @returns {Promise<React.ReactElement>} Timeline item with dot connector and content
 *
 * @example
 * ```tsx
 * <AboutSectionContainerItem
 *   title="Computer Science Degree"
 *   company="University Name"
 *   timeSpan="2020-2024"
 *   descriptionItems={["item1", "item2"]}
 *   hasThesis={true}
 *   thesisUrl="/thesis.pdf"
 * />
 * ```
 */
import React from "react";

import BasicText from "../BasicText";
import { ProjectCardBodySectionListGroup } from "../projects";
import { AAboutSectionContainerItemProps } from "@/interfaces/about.interface";

export default function AboutSectionContainerItem({
  descriptionItems,
  title,
  company,
  timeSpan,
  hasThesis,
  thesisUrl,
}: AAboutSectionContainerItemProps): React.ReactElement {
  return (
    <li className="relative -ms-1.5 flex items-start gap-4 before:absolute before:ml-[6px] before:h-full before:w-[1px] before:rounded-full before:bg-blue-200">
      <span className="z-1 size-3 shrink-0 rounded-full bg-blue-600" />

      <div className="-mt-2 flex w-full flex-col gap-2">
        <h3 className="flex flex-col gap-1 text-lg font-bold text-gray-900">
          <span className="">{title}</span>
          <time className="text-sm/none font-medium text-blue-600">{timeSpan}</time>
          {company && (
            <BasicText
              text={company}
              className="!mt-0 !text-start !text-sm font-normal !text-gray-600"
            />
          )}
        </h3>

        {descriptionItems && descriptionItems.length === 1 && (
          <p className="text-sm text-gray-600">{descriptionItems[0]}</p>
        )}
        {descriptionItems && descriptionItems.length > 1 && (
          <ProjectCardBodySectionListGroup listItems={descriptionItems} isAboutMeItem />
        )}

        {hasThesis && thesisUrl && (
          <a
            href={thesisUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-blue-700 transition-colors hover:text-blue-500"
          >
            View Thesis →{/* //must be teed too */}
          </a>
        )}
      </div>
    </li>
  );
}
