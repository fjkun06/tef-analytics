/*eslint-disable */
/**
 * projects.interface.ts
 *
 * Type definitions for project-related components including project cards,
 * pagination controls, and category filtering. Provides prop interfaces for
 * components that display, organize, and navigate project information.
 */
import React from "react";

/**
 * ProjectCategoryPillProps
 * Props for ProjectCategoryPill component - a clickable category filter button
 *
 * @property {string} category - Category label to display on the pill
 * @property {boolean} [isActive] - Whether the category pill is currently selected/active
 */
export type ProjectCategoryPillProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  category: string;
  isActive?: boolean;
};

/**
 * ProjectCardSectionListProps
 * Props for ProjectCardSection when displaying list type content
 *
 * @property {string[]} listItems - Array of list items to display
 * @property {string} title - Section heading/title
 * @property {string} [className] - Additional CSS classes
 * @property {"list"} type - Type indicator for list display
 */
export type ProjectCardSectionListProps = {
  listItems: string[];
  type: "list";
};

/**
 * ProjectCardSectionPillsProps
 * Props for ProjectCardSection when displaying pills/tags type content
 *
 * @property {string[]} technologies - Array of technology names to display as pills
 * @property {string} title - Section heading/title
 * @property {string} [className] - Additional CSS classes
 * @property {"pills"} type - Type indicator for pills display
 */
export type ProjectCardSectionPillsProps = {
  technologies: string[];
  type: "pills";
};

/**
 * ProjectCardSectionProps
 * Union type for ProjectCardSection - either list or pills variant
 */

type ProjectCardSectionMainProps =
  | ProjectCardSectionListProps
  | ProjectCardSectionPillsProps;
export type ProjectCardSectionProps = ProjectCardSectionMainProps & {
  title: string;
  className?: string;
};

/**
 * ProjectCardPillsGroupProps
 * Props for ProjectCardPillsGroup component
 *
 * @property {string[]} technologies - Array of technology names to render as gradient pills
 */
export type ProjectCardPillsGroupProps = {
  technologies: string[];
};

/**
 * ProjectCardListGroupProps
 * Props for ProjectCardBodySectionListGroup component
 *
 * @property {string[]} listItems - Array of list item strings to display
 */
export type ProjectCardListGroupProps = {
  listItems: string[];
  isAboutMeItem?: boolean;
};

/**
 * ProjectsPaginationItemProps
 * Props for ProjectsPaginationItem component - individual pagination button
 *
 * @property {React.ReactNode | string} children - Button content (page number, icon, or text)
 * @property {boolean} [isActive] - Whether pagination item is active
 * @property {boolean} [isNavigation] - Whether this is a navigation arrow button
 * @property {boolean} [isCurrent] - Whether this represents the current page
 * @property {number} [animationKey] - Unique key for Framer Motion layout animations
 */
export type ProjectsPaginationItemProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  isActive?: boolean;
  children: React.ReactNode | string;
  isNavigation?: boolean;
  isCurrent?: boolean;
  animationKey?: number;
};

export type ProjectCardBodyProps = {
  description: string;
  descriptionItems: string[];
  achievementItems: string[];
  practicalWorkItems: string[];
  translate: (key: any) => string;
};
export type ProjectCardBodyDataProps = {
  shortDescription: string;
  projectCardBodySections: ProjectCardSectionProps[];
};
