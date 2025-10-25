import React from "react";

import { LegalSectionHeading } from "../imprint";
import { PrivacyBodySectionProps } from "@/interfaces/privacy.interface";

export default function PrivacyBodySection({
  translatorCallback,
  data,
}: PrivacyBodySectionProps) {
  const { index, titleKey, subtitleKey, listItems } = data;
  return (
    <section>
      <LegalSectionHeading
        index={index}
        translationKey={titleKey}
        scope="privacy.middleSection"
      />

      <p>{translatorCallback(subtitleKey)}</p>
      <ul className="mt-2 list-disc pl-6">
        {listItems.map((item: string) => (
          <li key={item}>{translatorCallback(item)}</li>
        ))}
      </ul>
    </section>
  );
}
