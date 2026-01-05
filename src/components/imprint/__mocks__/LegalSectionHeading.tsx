import React from "react";

import { LegalSectionHeadingProps } from "@/interfaces/legal.interface";

/**
 * Mock implementation of LegalSectionHeading component for testing.
 *
 * Renders a simple div with test attributes for testing purposes.
 * Displays the heading information as a string combining index, scope, and translationKey.
 *
 * @param index - The section index number
 * @param translationKey - The translation key for the section title
 * @param scope - The translation scope
 * @returns A test div element
 */
export default function LegalSectionHeading({
  index,
  translationKey,
  scope = "default",
}: LegalSectionHeadingProps) {
  return <div data-testid="cookie-mock">{`${index}. ${scope}.${translationKey}`}</div>;
}
