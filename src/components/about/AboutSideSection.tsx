import React from "react";

function AboutSideSectionContainer({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full max-w-[100%] flex-col items-center gap-3 divide-y-4 border border-red-500 lg:max-w-[275px] lg:items-start">
      <h2 className="h-max w-full border-b border-blue-300 bg-linear-to-r from-[#2563eb] via-[#6366f1] to-[#14b8a6] bg-clip-text pb-1 text-sm font-bold text-transparent sm:text-base md:text-xl">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default AboutSideSectionContainer;
