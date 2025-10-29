import React from "react";

/**
 * Props for AboutSideSectionContainer component.
 * Container for side sections with a title in about page layouts.
 * @property children - Section content as React nodes
 * @property title - Section heading/title text
 */
export type AboutSideSectionContainerProps = {
  children: React.ReactNode;
  title: string;
};

/**
 * Props for AboutSectionContainerItem component.
 * Individual item within about section displaying education or experience.
 * @property title - Item title (degree, position, etc.)
 * @property timeSpan - Duration or date range (e.g., "2020-2024")
 * @property descriptionItems - Optional array of description bullet points
 * @property company - Optional company or institution name
 * @property hasThesis - Whether this item includes a thesis/dissertation
 * @property thesisUrl - Optional URL link to thesis document
 */
export type AAboutSectionContainerItemProps = {
  title: string;
  timeSpan: string;
  descriptionItems?: string[];
  company?: string;
  hasThesis?: boolean;
  thesisUrl?: string;
};

/**
 * Props for AboutProgressItem component.
 * Displays a progress bar with percentage and title for skills or achievements.
 * @property percentage - Progress value (0-100) for the progress bar
 * @property delay - Optional animation delay in milliseconds
 * @property title - Skill or achievement name/label
 */
export type AboutProgressItemProps = {
  percentage?: number;
  delay?: number;
  title: string;
};

export type AboutRegularPillsContainerProps = {
  pills: string[];
  title: string;
  isFloating?: boolean;
};
