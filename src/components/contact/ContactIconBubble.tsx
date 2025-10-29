/**
 * ContactIconBubble
 *
 * Client component that renders an icon inside a circular bubble with glassmorphism effect.
 * Features a semi-transparent white background with backdrop blur and blue accent styling.
 * Used as a visual container for icons throughout contact and information sections.
 *
 * @param {ContactIconBubbleProps} props - Component props
 * @param {React.ReactNode} props.icon - SVG or icon component to display
 *
 * @returns {React.ReactElement} Circular bubble containing the icon with glassmorphism styling
 */
import React from "react";

import { ContactIconBubbleProps } from "@/interfaces/contact.interface";

function ContactIconBubble({ icon }: ContactIconBubbleProps): React.ReactElement {
  return (
    <span className="flex size-12 min-w-12 items-center justify-center rounded-full border-blue-100 bg-[#2563EB1A] text-blue-600 shadow-sm backdrop-blur-sm [&>svg]:h-2/4 [&>svg]:w-2/4 [&>svg]:text-blue-600">
      {icon}
    </span>
  );
}

export default ContactIconBubble;
