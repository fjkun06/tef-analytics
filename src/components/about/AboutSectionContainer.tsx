/**
 * AboutSectionContainer
 *
 * Client component that provides a styled container for about page sections.
 * Features gradient title with border, glassmorphic background, and ordered list layout
 * for timeline-style content like education or experience sections.
 *
 * @param {AboutSideSectionContainerProps} props - Component props
 * @param {string} props.title - Section heading with gradient styling
 * @param {React.ReactNode} props.children - Section content items
 *
 * @returns {React.ReactElement} Styled section container with gradient title
 *
 * @example
 * ```tsx
 * <AboutSectionContainer title="Education">
 *   <AboutSectionContainerItem {...itemProps} />
 * </AboutSectionContainer>
 * ```
 */
import React from "react";

import { AboutSideSectionContainerProps } from "@/interfaces/about.interface";

export default function AboutSectionContainer({
  title,
  children,
}: AboutSideSectionContainerProps) {
  return (
    <div className="flex w-full flex-col gap-8 rounded-2xl p-8 shadow-[0_5px_20px_#18204833] backdrop-blur-lg lg:max-w-[730px]">
      <h2 className="h-max w-full border-b border-blue-300 bg-linear-to-r from-[#2563eb] via-[#6366f1] to-[#14b8a6] bg-clip-text pb-1 text-2xl font-bold text-transparent">
        {title}
      </h2>

      <ol className="relative flex flex-col gap-8">{children}</ol>
    </div>
  );
}
