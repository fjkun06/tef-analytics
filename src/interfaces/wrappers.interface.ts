/**
 * Wrapper Components Interface Definitions
 * Type definitions for layout wrapper and container components.
 */

import React from "react";

/**
 * Props for a card wrapper component.
 * Provides consistent styling and layout for card elements.
 * @property children - The card content as one or more React elements
 * @property className - Optional additional CSS classes for the wrapper
 */
export type CardWrapperProps = {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
};

/**
 * Props for a section wrapper component.
 * Provides consistent styling and layout for page sections.
 * @property children - The section content as one or more React elements
 * @property className - Optional additional CSS classes for the wrapper
 */
export type SectionWrapperProps = {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
};

/**
 * Props for the CarouselWrapper component.
 * Wraps carousel items with styling and positioning.
 * @property children - Carousel item content
 * @property index - Item position in carousel
 * @property className - Optional additional CSS classes
 */
export type CarouselWrapperProps = {
  children: React.ReactNode;
  index: number;
  className?: string;
};

export type PagesWrapperProps = {
  children: React.ReactNode;
  className?: string;
};
export type AboutSideSectionContainerProps = {
  children: React.ReactNode;
  title: string;
};
