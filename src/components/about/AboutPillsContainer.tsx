/**
 * AboutPillsContainer
 *
 * Client component that displays a collection of skill/technology pills with configurable styling.
 * Supports both floating (blue rounded) and regular (gray square) pill styles based on the
 * `isFloating` prop. Renders pills in a flexible wrap layout under a section title.
 *
 * @param {AboutRegularPillsContainerProps} props - Component props
 * @param {string} props.title - Section title/heading for the pills group
 * @param {string[]} props.pills - Array of pill labels to display
 * @param {boolean} [props.isFloating] - Whether to use floating style (blue rounded) or regular style (gray square)
 *
 * @returns {React.ReactElement} Container with conditional styling based on isFloating prop
 *
 * @example
 * ```tsx
 * // Floating style with blue rounded pills
 * <AboutPillsContainer title="Skills" pills={["React", "TypeScript"]} isFloating={true} />
 *
 * // Regular style with gray square pills
 * <AboutPillsContainer title="Tools" pills={["Git", "Docker"]} isFloating={false} />
 * ```
 */
import React from "react";

import { AboutRegularPillsContainerProps } from "@/interfaces/about.interface";

export default function AboutPillsContainer({
  title,
  pills,
  isFloating,
}: AboutRegularPillsContainerProps) {
  const headingStyle = isFloating
    ? "text-sm text-gray-700"
    : "text-sm font-medium text-blue-600";
  const pillStyle = isFloating
    ? "rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
    : "rounded bg-gray-100 px-2 py-1 text-xs";
  return (
    <div className="flex w-full flex-col bg-white lg:max-w-[275px]">
      <h4 className={headingStyle}>{title}</h4>
      <div className="mt-2 flex flex-wrap gap-2">
        {pills.map((pill, index) => (
          <span key={index} className={pillStyle}>
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}
