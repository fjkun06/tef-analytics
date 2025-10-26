/**
 * Legal Pages Interface Definitions
 * Type definitions for legal page components (imprint, privacy, etc.).
 */

/**
 * Props for the ImpressumContent component.
 * Displays impressum/imprint sections with indexed headings.
 * @property index - Section number/index
 * @property titleTranslationKey - i18n key for the section title
 */
export type ImpressumContentProps = {
  index: number;
  titleTranslationKey: string;
};

/**
 * Props for the LegalSectionHeading component.
 * Renders numbered legal page section headings with i18n support.
 * @property scope - i18n scope for translations
 * @property index - Section number for heading
 * @property translationKey - i18n key for heading text
 */
export type LegalSectionHeadingProps = {
  scope: string;
  index: number;
  translationKey: string;
};
