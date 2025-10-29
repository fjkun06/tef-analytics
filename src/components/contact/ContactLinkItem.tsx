/**
 * ContactLinkItem
 *
 * Client component that renders a link item with icon, title, and clickable external link.
 * Displays an icon bubble, title text, and a labeled external link.
 * Useful for social media profiles, email links, or external contact information.
 *
 * @param {ContactLinkItemProps} props - Component props
 * @param {string} props.href - URL for the external link
 * @param {string} props.label - Display text for the link (e.g., "GitHub", "LinkedIn")
 * @param {React.ReactNode} props.icon - SVG or icon component to display
 * @param {string} props.title - Title text displayed above the link
 *
 * @returns {React.ReactElement} Link item with icon, title, and external link
 */
import React from "react";

import ContactIconBubble from "./ContactIconBubble";
import BasicText from "../BasicText";
import { ContactLinkItemProps } from "@/interfaces/contact.interface";

function ContactLinkItem({
  href,
  label,
  icon,
  title,
}: ContactLinkItemProps): React.ReactElement {
  return (
    <div className="flex items-center justify-start gap-4">
      <ContactIconBubble icon={icon} />
      <span className="item-start flex flex-col [&>*]:m-0 [&>*]:text-gray-800">
        <BasicText text={title} className="!text-left" />
        <a
          href={href}
          className="text-sm transition-colors duration-200 hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      </span>
    </div>
  );
}

export default ContactLinkItem;
