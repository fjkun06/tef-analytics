/**
 * PagesWrapper
 *
 * Client component that provides a consistent page-level layout wrapper with diagonal grid background.
 * Creates a full-height container with slate background, backdrop blur, and decorative diagonal grid pattern.
 * Centers content with responsive padding and provides consistent styling across all pages.
 *
 * @param {PagesWrapperProps} props - Component props
 * @param {React.ReactNode} props.children - Page content to wrap
 * @param {string} [props.className] - Additional CSS classes to apply to inner wrapper
 *
 * @returns {React.ReactElement} Full-height page wrapper with background and grid pattern
 *
 * @example
 * ```tsx
 * <PagesWrapper className="custom-spacing">
 *   <PageContent />
 * </PagesWrapper>
 * ```
 */
import React from "react";

import { PagesWrapperProps } from "@/interfaces/wrappers.interface";

export default function PagesWrapper({ children, className }: PagesWrapperProps) {
  return (
    <div
      className={
        "relative mx-auto flex min-h-screen w-full flex-col items-center bg-slate-200 backdrop-blur-md"
      }
    >
      <div
        className={`${className} relative flex min-h-screen w-full flex-col items-center bg-slate-200 px-4 py-16 backdrop-blur-md sm:px-6 lg:px-8`}
      >
        {/* Diagonal Grid with Light Pattern */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `v
          repeating-linear-gradient(45deg, rgba(v0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0v, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
        `,
            backgroundSize: "40px 40px",
          }}
        />
        {children}
      </div>
    </div>
  );
}
