import React from "react";

import { CardWrapperProps } from "@/interfaces/wrappers.interface";

function CardWrapper({ children, className }: CardWrapperProps) {
  return (
    <div
      className={`transform rounded-lg bg-white p-3 shadow-md shadow-cyan-200/30 transition-all duration-300 ease-in hover:scale-105 hover:shadow-lg sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export default CardWrapper;
