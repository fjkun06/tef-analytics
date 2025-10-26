/**
 * LegalEmailLocation
 *
 * Renders contact information including name, email address, and location details.
 * Typically used in legal pages like imprint or terms of service.
 *
 * @param location - The location text or address to display.
 * @returns {React.ReactElement} A paragraph element with contact information.
 */
import React from "react";

function LegalEmailLocation({ location }: { location: string }): React.ReactElement {
  return (
    <p>
      Franck Tankouan
      <br />
      Email: an@arsenentiwa.com
      <br />
      <span>{location}</span>
    </p>
  );
}

export default LegalEmailLocation;
