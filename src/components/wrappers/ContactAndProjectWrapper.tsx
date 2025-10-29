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

import PagesWrapper from "./PagesWrapper";
import { ContactAndProjectWrapperProps } from "@/interfaces/contact.interface";

function ContactAndProjectWrapper({
  children,
  className,
}: ContactAndProjectWrapperProps): React.ReactElement {
  return (
    <PagesWrapper>
      <div
        className={`relative z-1 flex h-full w-full max-w-7xl flex-col items-center gap-16 lg:px-8 ${className}`}
      >
        {children}
      </div>
    </PagesWrapper>
  );
}

export default ContactAndProjectWrapper;
