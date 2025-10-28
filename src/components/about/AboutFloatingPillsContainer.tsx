import React from "react";

import { AboutRegularPillsContainerProps } from "@/interfaces/about.interface";

export default function AboutFloatingPills({
  title,
  pills,
}: AboutRegularPillsContainerProps) {
  return (
    <div className="flex w-full flex-col bg-white lg:max-w-[275px]">
      <h4 className="text-sm text-gray-700">{title}</h4>
      <div className="mt-2 flex flex-wrap gap-2">
        {pills.map((pill, index) => (
          <span
            key={index}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}
