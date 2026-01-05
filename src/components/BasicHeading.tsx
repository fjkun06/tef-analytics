import React from "react";

import { BasicHeadingProps } from "@/interfaces/contact.interface";

function BasicHeading({
  text,
  large,
  className,
  isProjectCardHeading,
  projectTimeSpan = "05/2024 - 08/2024",
}: BasicHeadingProps) {
  const basicClass = "font-semibold text-slate-900";
  const finalClass = large ? `text-2xl ${basicClass}` : `text-xl ${basicClass}`;
  const projectCardClass = isProjectCardHeading
    ? "bg-linear-to-r from-[#2563eb] via-[#6366f1] to-[#14b8a6] bg-clip-text text-4xl font-bold text-transparent sm:text-2xl  text-lg"
    : "";

  if (isProjectCardHeading) {
    return (
      <div className="flex flex-col gap-2">
        <h2 className="bg-linear-to-r from-[#2563eb] via-[#6366f1] to-[#14b8a6] bg-clip-text text-lg font-bold text-transparent sm:text-2xl">
          {text}
        </h2>
        <span className="text-xs text-blue-600/80 sm:text-sm">{projectTimeSpan}</span>
      </div>
    );
  }
  return <h2 className={`${finalClass} ${className} ${projectCardClass}`}>{text}</h2>;
}

export default BasicHeading;
