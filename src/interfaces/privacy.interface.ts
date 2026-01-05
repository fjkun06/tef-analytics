/*eslint-disable */
export type PrivacyBodyProps = {
  index: number;
  titleKey: string;
  subtitleKey: string;
  listItems: string[];
};

/**
 * Props for the PrivacyBodySection component.
 * Renders a single privacy policy section with list items.
 * @property translatorCallback - Function to translate i18n keys
 * @property data - Section data containing index, titles, and items
 */
export type PrivacyBodySectionProps = {
  translatorCallback: (code: any) => string;
  data: PrivacyBodyProps;
};
