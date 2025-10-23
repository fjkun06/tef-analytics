import React from "react";

/**
 * Props for a card wrapper component.
 *
 * @property children - The card content as a single React element or an array of elements.
 * @property className - Optional additional CSS classes for the wrapper.
 */
export type CardWrapperProps = {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
};

/**
 * Props for a section wrapper component.
 *
 * @property children - The section content as a single React element or an array of elements.
 * @property className - Optional additional CSS classes for the wrapper.
 */
export type SectionWrapperProps = {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
};

export type CarouselWrapperProps = {
  children: React.ReactNode;
  index: number;
  className?: string;
};
