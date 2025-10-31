import React from "react";

import { AboutSideSectionContainerProps } from "@/interfaces/about.interface";

export default function AboutProgressItemContainer({
  title,
  children,
}: AboutSideSectionContainerProps) {
  return (
    <div className="flex w-full flex-col items-start gap-2 lg:max-w-[275px]">
      <h4 className="text-sm font-medium text-blue-600">{title}</h4>
      {children}
    </div>
  );
}
