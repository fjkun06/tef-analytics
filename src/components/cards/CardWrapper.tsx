import React from "react";

import { CardWrapperProps } from "@/interfaces/wrappers.interface";

/**
 * CardWrapper component for displaying content inside a styled, animated card container.
 *
 * @param children - The content to render inside the card.
 * @param className - Optional additional CSS classes for the card div.
 *
 * @example
 * <CardWrapper>
 *   <h3>Card Title</h3>
 *   <p>Card content...</p>
 * </CardWrapper>
 */
function CardWrapper({ children, className }: CardWrapperProps) {
  return (
    <div
      className={`transform rounded-lg bg-white p-3 shadow-lg shadow-gray-400/30 transition-transform duration-200 ease-linear hover:shadow-lg sm:p-6 md:hover:scale-110 ${className}`}
    >
      {children}
    </div>
  );
}

export default CardWrapper;
