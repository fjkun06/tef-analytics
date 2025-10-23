import { CarouselWrapperProps } from "@/interfaces/wrappers.interface";

export const CarouselWrapper = ({ children, index, className }: CarouselWrapperProps) => {
  return (
    <div
      className={`group flex animate-[scrolling_30s_linear_infinite] gap-10 pr-10 ${className ?? ""} ${index === 1 ? "aria-hidden" : ""}`}
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
