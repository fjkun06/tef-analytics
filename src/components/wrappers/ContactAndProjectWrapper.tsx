/**
 * ContactAndProjectWrapper
 *
 * Client component that provides a styled container for contact and project pages.
 * Features a diagonal grid pattern background with centered content layout.
 * Uses full screen height with responsive padding and a maximum width constraint.
 *
 * @param {ContactAndProjectWrapperProps} props - Component props
 * @param {React.ReactNode} props.children - Page content to wrap
 * @param {string} [props.className] - Optional additional CSS classes to apply
 *
 * @returns {React.ReactElement} Styled wrapper container with grid background pattern
 */
import React from "react";

import { ContactAndProjectWrapperProps } from "@/interfaces/contact.interface";

function ContactAndProjectWrapper({
  children,
  className,
}: ContactAndProjectWrapperProps): React.ReactElement {
  return (
    <div
      className={`relative mx-auto flex min-h-screen w-full flex-col items-center bg-slate-100 ${className}`}
    >
      <div
        className={`${className} relative flex min-h-screen w-full flex-col items-center bg-slate-100 px-4 py-16 sm:px-6 lg:px-8`}
      >
        {/* Diagonal Grid with Light Pattern */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `
          repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
        `,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-1 flex h-full w-full max-w-7xl flex-col items-center">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContactAndProjectWrapper;
