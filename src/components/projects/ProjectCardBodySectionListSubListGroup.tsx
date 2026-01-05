import React from "react";

import BasicText from "../BasicText";
import { PracticalWorkItem } from "@/interfaces/projects.interface";

export default function ProjectCardBodySectionListSubListGroup({
  listItems,
}: {
  listItems: PracticalWorkItem[];
}): React.ReactElement {
  return (
    <ul className="flex w-full flex-col gap-1">
      {listItems.map(({ title, descriptionItems }, index) => (
        <li className="flex h-max items-start gap-2" key={index + 545}>
          <span className="mt-[9px] min-h-1 min-w-1 rounded-full bg-slate-700 sm:h-1.5 sm:min-w-1.5" />
          <div className="">
            <BasicText
              text={title}
              className="mt-0! text-sm! font-semibold text-slate-700!"
            />
            <ul className="ml-2 flex w-full flex-col gap-1">
              {descriptionItems.map((descriptionItem, descIndex) => (
                <li className="flex h-max items-start gap-2" key={descIndex + 789}>
                  <span className="mt-[9px] min-h-1 min-w-1 rounded-full bg-slate-700 sm:h-1.5 sm:min-w-1.5" />
                  <BasicText
                    text={descriptionItem}
                    className="mt-0! text-xs! text-slate-700!"
                  />
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
