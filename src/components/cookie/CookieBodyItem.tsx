/**
 * CookieBodyItem
 *
 * Client component that renders an individual cookie item with title and description.
 * Displays the cookie name as a bold heading followed by its description text.
 *
 * @param {CookieBodyItemProps} props - Component props
 * @param {string} props.title - The name or title of the cookie
 * @param {string} props.description - Detailed description of the cookie's purpose and usage
 *
 * @returns {React.ReactElement} A div containing the cookie title and description
 */
import React from "react";

import { CookieBodyItemProps } from "@/interfaces/cookie.interface";

function CookieBodyItem({ title, description }: CookieBodyItemProps): React.ReactElement {
  return (
    <div data-testid="cookie-body-item">
      {/* Cookie name displayed as bold heading */}
      <h3 className="font-semibold text-slate-800">{title}</h3>
      {/* Cookie purpose and details */}
      <p className="mt-1">{description}</p>
    </div>
  );
}

export default CookieBodyItem;
