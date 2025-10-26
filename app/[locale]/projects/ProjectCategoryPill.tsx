import React from "react";

import { ProjectCategoryPillProps } from "@/interfaces/projects.interface";

function ProjectCategoryPill({
  category,
  isActive = false,
  ...props
}: ProjectCategoryPillProps) {
  const finalClass = `${isActive ? "bg-slate-900 text-white select-none" : "transition-all duration-200 cursor-pointer hover:bg-slate-500 hover:text-white "}`;
  return (
    <button
      className={`rounded-4xl px-6 py-2.5 text-sm shadow-[0_10px_20px_#18204833] ${finalClass}`}
      {...props}
    >
      {category}
    </button>
  );
}

export default ProjectCategoryPill;
