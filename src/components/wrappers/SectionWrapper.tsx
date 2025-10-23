import React from "react";

import { SectionWrapperProps } from "@/interfaces/wrappers.interface";

/**
 * SectionWrapper component for constraining content to a centered, responsive max width with padding.
 *
 * @param children - The content to render inside the section.
 * @param className - Optional additional CSS classes for the wrapper div.
 *
 * @example
 * <SectionWrapper>
 *   <h2>Section Title</h2>
 *   <p>Section content...</p>
 * </SectionWrapper>
 */
function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default SectionWrapper;
