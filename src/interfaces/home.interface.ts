/**
 * Home Page Interface Definitions
 * Type definitions for home page components and their props.
 */

import React from "react";

/**
 * Props for the InfiniteCarousel component.
 * Carousel component with looping animation support.
 * @property children - The carousel items to display
 * @property carouselClassName - Optional classes for carousel container
 * @property carouselItemClassName - Optional classes for individual items
 */
export type InfiniteCarouselProps = {
  children: React.ReactNode;
  carouselClassName?: string;
  carouselItemClassName?: string;
};

/**
 * Structure for individual project data.
 * @property year - Project year or completion date
 * @property icon - Project icon identifier
 * @property translationKey - i18n key for project title/description
 * @property skills - Array of technologies used
 * @property achievmentsCount - Number of achievements or metrics
 */
export type Project = {
  year: number;
  icon: string;
  translationKey: string;
  skills: string[];
  achievmentsCount: number;
};

/**
 * Props for the HomeProjectsSection component.
 * @property mainProjects - Array of featured projects to display
 */
export type HomeProjectsSectionProps = {
  mainProjects: Project[];
};

/**
 * Props for domain detail information.
 * @property domain - Domain or service name
 * @property icon - Domain icon identifier
 * @property detailNumber - Metric or achievement count
 */
export type DomainDetailsProps = {
  domain: string;
  icon: string;
  detailNumber: number;
};

/**
 * Props for the HomeSkillsSection component.
 * Displays skills organized by domain with metrics.
 * @property domainDetails - Array of domain information with metrics
 * @property skills - Array of individual skills to showcase
 */
export type HomeSkillsSectionProps = {
  domainDetails: DomainDetailsProps[];
  skills: string[];
};
