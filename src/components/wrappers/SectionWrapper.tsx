import React from "react";

import { SectionWrapperProps } from "@/interfaces/wrappers.interface";

function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default SectionWrapper;
