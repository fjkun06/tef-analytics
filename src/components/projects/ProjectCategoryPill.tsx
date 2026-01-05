/**
 * ProjectCategoryPill
 *
 * Client component that renders a clickable category filter pill button.
 * Displays different styling based on the `isActive` state - either highlighted when active
 * or with hover effects when inactive. Used for filtering projects by category.
 *
 * @param {ProjectCategoryPillProps} props - Component props
 * @param {string} props.category - Category label to display
 * @param {boolean} [props.isActive=false] - Whether the pill is in active/selected state
 * @param {...any} props - Additional button HTML attributes
 *
 * @returns {React.ReactElement} Styled button element with category label
 *
 * @example
 * ```tsx
 * <ProjectCategoryPill category="Frontend" isActive={true} onClick={() => {}} />
 * ```
 */
import React from "react";

import { ProjectCategoryPillProps } from "@/interfaces/projects.interface";

function ProjectCategoryPill({
  category,
  isActive = false,
  ...props
}: ProjectCategoryPillProps) {
  const finalClass = `${isActive ? "bg-slate-900 text-white select-none" : "transition-colors cursor-pointer backdrop-blur-lg hover:bg-slate-500 hover:text-white "}`;
  return (
    <button
      className={`w-max rounded-4xl bg-slate-100 px-6 py-2.5 text-sm shadow-[0_10px_20px_#18204833] ${finalClass}`}
      {...props}
    >
      {category}
    </button>
  );
}

export default ProjectCategoryPill;
