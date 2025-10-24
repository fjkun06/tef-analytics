import React from "react";

import { CarouselWrapper } from "./wrappers/CarouselWrapper";
import { InfiniteCarouselProps } from "@/interfaces/home.interface";

/**
 * InfiniteCarousel component for creating an infinitely scrolling horizontal carousel.
 *
 * @param children - The carousel items to display. Should be a list of React nodes.
 * @param carouselClassName - Optional additional class names for the carousel container.
 * @param carouselItemClassName - Optional additional class names for each carousel item wrapper.
 *
 * @example
 * <InfiniteCarousel>
 *   <span>Item 1</span>
 *   <span>Item 2</span>
 * </InfiniteCarousel>
 */
function InfiniteCarousel({
  children,
  carouselClassName,
  carouselItemClassName,
}: InfiniteCarouselProps) {
  return (
    <div
      className={`carousel flex max-w-[800px] overflow-hidden hover:[&>.group]:[animation-play-state:paused] ${carouselClassName ?? ""}`}
    >
      {[0, 1].map((index) => (
        <CarouselWrapper key={index} index={index} className={carouselItemClassName}>
          {children}
        </CarouselWrapper>
      ))}
    </div>
  );
}

export default InfiniteCarousel;
