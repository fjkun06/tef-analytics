import React from "react";

import BasicText from "../BasicText";
import { ProjectCardBodySectionListGroup } from "../projects";
import { AAboutSectionContainerItemProps } from "@/interfaces/about.interface";
import { getScopedI18n } from "@/locales/server";

export default async function AboutSectionContainerItem({
  descriptionItems,
  title,
  company,
  timeSpan,
  hasThesis,
  thesisUrl,
}: AAboutSectionContainerItemProps): Promise<React.ReactElement> {
  const t = await getScopedI18n("about");
  const t2 = (code: any) => t(code);

  const mappedDescriptionItems = descriptionItems?.map((item) => t2(item));

  return (
    <li className="relative -ms-1.5 flex items-start gap-4 before:absolute before:ml-[6px] before:h-full before:w-[1px] before:rounded-full before:bg-blue-200">
      <span className="z-1 size-3 shrink-0 rounded-full bg-blue-600"></span>

      <div className="-mt-2 flex w-full flex-col gap-2">
        <h3 className="flex flex-col gap-1 text-lg font-bold text-gray-900">
          <span className="">{t2(title)}</span>
          <time className="text-sm/none font-medium text-blue-600">{timeSpan}</time>
          {company && (
            <BasicText
              text={company}
              className="!mt-0 !text-start !text-sm font-normal !text-gray-600"
            />
          )}
        </h3>

        {mappedDescriptionItems && mappedDescriptionItems.length === 1 && (
          <p className="text-sm text-gray-600">{mappedDescriptionItems[0]}</p>
        )}
        {mappedDescriptionItems && mappedDescriptionItems.length > 1 && (
          <ProjectCardBodySectionListGroup
            listItems={mappedDescriptionItems}
            isAboutMeItem
          />
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
