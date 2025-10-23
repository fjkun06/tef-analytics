import React from "react";

/**
 * Props for the InfiniteCarousel component.
 *
 * @property children - The carousel items to display (React nodes).
 * @property carouselClassName - Optional additional class names for the carousel container.
 * @property carouselItemClassName - Optional additional class names for each carousel item wrapper.
 */
export type InfiniteCarouselProps = {
  children: React.ReactNode;
  carouselClassName?: string;
  carouselItemClassName?: string;
};
