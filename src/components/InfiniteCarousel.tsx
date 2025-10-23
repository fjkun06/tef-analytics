import React from "react";

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
}: {
  children: React.ReactNode;
  carouselClassName?: string;
  carouselItemClassName?: string;
}) {
  const CarouselWrapper = ({
    children,
    index,
  }: {
    children: React.ReactNode;
    index: number;
  }) => {
    return (
      <div
        className={`group flex animate-[scrolling_20s_linear_infinite] gap-10 pr-10 ${carouselItemClassName ?? ""} ${index === 1 ? "aria-hidden" : ""}`}
      >
        {children}
      </div>
    );
  };
  /**
   * CarouselWrapper is an internal component that wraps carousel items and applies animation classes.
   *
   * @param children - The carousel items to render.
   * @param index - The index of the wrapper (used for aria-hidden and key).
   */

  return (
    <div
      className={`carousel flex max-w-[800px] overflow-hidden bg-gray-900 hover:[&>.group]:[animation-play-state:paused] ${carouselClassName ?? ""}`}
    >
      {[0, 1].map((index) => (
        <CarouselWrapper key={index} index={index}>
          {children}
        </CarouselWrapper>
      ))}
    </div>
  );
}

export default InfiniteCarousel;
