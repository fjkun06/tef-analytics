/**
 * PrivacyBodySection
 *
 * Client component that renders a single section of the privacy policy body.
 * Each section includes a numbered heading, subtitle, and bulleted list of items.
 *
 * @param {PrivacyBodySectionProps} props - Component props containing translator callback and section data
 * @param {Function} props.translatorCallback - Function that translates keys to localized strings
 * @param {Object} props.data - Section data object with index, titleKey, subtitleKey, and listItems
 * @param {number} props.data.index - Section number for the heading
 * @param {string} props.data.titleKey - Translation key for the section title
 * @param {string} props.data.subtitleKey - Translation key for the section subtitle
 * @param {string[]} props.data.listItems - Array of translation keys for list items
 *
 * @returns {React.ReactElement} Section with heading, subtitle, and bulleted list
 */
import React from "react";

import { LegalSectionHeading } from "../imprint";
import { PrivacyBodySectionProps } from "@/interfaces/privacy.interface";

export default function PrivacyBodySection({
  translatorCallback,
  data,
}: PrivacyBodySectionProps): React.ReactElement {
  const { index, titleKey, subtitleKey, listItems } = data;
  return (
    <section>
      <LegalSectionHeading
        index={index}
        translationKey={titleKey}
        scope="privacy.middleSection"
      />

      <p data-testid="privacy-subtitle">{translatorCallback(subtitleKey)}</p>
      <ul className="mt-2 list-disc pl-6">
        {listItems.map((item: string) => (
          <li key={item}>{translatorCallback(item)}</li>
        ))}
      </ul>
    </section>
  );
}
