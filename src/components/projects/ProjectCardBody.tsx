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

import { useRef, useState, useEffect } from "react";

import ProjectCardSection from "./ProjectCardSection";

export default function ProjectCardBody() {
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

  const description =
    "Custom LLM fine-tuned on legal domain with RAG-enhanced document processing pipeline.";
  const descriptionItems = [
    "Assist in predictive analytics tools screening",
    "Design and implement predictive models with R and SAS",
    "Provide predictive analytics expertise",
    "Support platform development and deployment",
  ];
  const achievementItems = [
    "Predictive modeling",
    "Weight optimization",
    "Volume forecasting",
  ];
  const practicalWorkItems = [
    "Built real-time invoice assessment system",
    "Optimized API data processing",
    "Implemented ML algorithms for fraud detection",
  ];

  const projectCardBodySEctions = [
    {
      title: "Description",
      type: "list",
      listItems: descriptionItems,
    },
    {
      title: "Practical Work",
      type: "list",
      listItems: practicalWorkItems,
    },
    {
      title: "Key Achievements",
      type: "pills",
      technologies: achievementItems,
    },
  ];

  return (
    <div
      className={"flex w-full max-w-md flex-col gap-4 transition-all"}
      onMouseEnter={toggleSetIsProjectCardBodyOpen}
      onMouseLeave={toggleSetIsProjectCardBodyOpen}
    >
      <p className="text-xs font-bold text-gray-600 sm:text-sm">{description}</p>
      <div
        ref={contentRef}
        style={{
          maxHeight: isProjectCardBodyOpen ? `${height + 100}px` : "0px",
        }}
        className="flex flex-col gap-4 overflow-hidden transition-all duration-500 ease-in-out"
      >
        {projectCardBodySEctions.map((section) =>
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
