/**
 * ProjectCardBody
 *
 * Client component that displays the expandable body content of a project card.
 * Manages expand/collapse state with height animations and shows description,
 * practical work items, and key achievements sections when expanded.
 * Toggles on mouse enter/leave events.
 *
 * @returns {React.ReactElement} Expandable project card body with sections
 *
 * @example
 * ```tsx
 * <ProjectCardBody />
 * ```
 */
"use client";

import React, { useRef, useState, useEffect } from "react";

import ProjectCardSection from "./ProjectCardSection";
import { ProjectCardBodyDataProps } from "@/interfaces/projects.interface";

export default function ProjectCardBody({
  shortDescription,
  projectCardBodySections,
}: ProjectCardBodyDataProps): React.ReactElement {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isProjectCardBodyOpen, setIsProjectCardBodyOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const toggleSetIsProjectCardBodyOpen = () => {
    setIsProjectCardBodyOpen((prev) => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isProjectCardBodyOpen]);

  return (
    <div
      className={"flex w-full max-w-md flex-col gap-4 transition-all"}
      onMouseEnter={toggleSetIsProjectCardBodyOpen}
      onMouseLeave={toggleSetIsProjectCardBodyOpen}
      data-testid="project-card-body"
    >
      <p className="text-xs font-bold text-gray-600 sm:text-sm">{shortDescription}</p>
      <div
        ref={contentRef}
        style={{
          maxHeight: isProjectCardBodyOpen ? `${height + 100}px` : "0px",
        }}
        className="flex flex-col gap-4 overflow-hidden transition-all duration-500 ease-in-out"
        data-testid="project-card-body-content"
      >
        {projectCardBodySections.map((section) =>
          section.type === "pills" ? (
            <ProjectCardSection
              key={section.title}
              title={section.title}
              type={section.type}
              technologies={section.technologies!}
              className="max-md:mb-6"
            />
          ) : (
            <ProjectCardSection
              key={section.title}
              title={section.title}
              type={section.type as "list"}
              listItems={section.listItems!}
            />
          ),
        )}
      </div>
    </div>
  );
}
