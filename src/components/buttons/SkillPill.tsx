import React from "react";

import { SkillPillProps } from "@/interfaces/buttons.interface";

/**
 * SkillPill component for displaying a skill or tag as a styled pill.
 *
 * @param label - The text to display inside the pill.
 * @param carousel - If true, applies larger text for carousel usage. Defaults to false.
 *
 * @example
 * <SkillPill label="Business Intelligence" />
 * <SkillPill label="Data Science" carousel />
 */
function SkillPill({ label, carousel = false, className }: SkillPillProps) {
  return (
    <span
      data-testid="skill-pill"
      className={`inline-flex w-max items-center rounded-full bg-blue-500/5 px-2 py-0.5 text-[10px] font-medium text-blue-500 sm:px-3 sm:py-1 ${carousel ? "sm:text-sm" : "sm:text-xs"} ${className}`}
    >
      {label}
    </span>
  );
}

export default SkillPill;
