import React from "react";

import { SkillPillProps } from "@/interfaces/buttons.interface";

function SkillPill({ label }: SkillPillProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-500/5 px-2 py-0.5 text-[10px] font-medium text-blue-500 sm:px-3 sm:py-1 sm:text-xs">
      {label}
    </span>
  );
}

export default SkillPill;
