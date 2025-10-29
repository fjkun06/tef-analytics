/**
 * Card Interface Definitions
 * Type definitions for card components and their props.
 */

/**
 * Props for the HomeImpactCard component.
 * Displays domain impact metrics and achievements.
 * @property icon - Icon identifier or path
 * @property domain - Domain or service name
 * @property detailNumber - Numeric metric or achievement count
 */
export type HomeImpactCardProps = {
  icon: string;
  domain: string;
  detailNumber: number;
};

/**
 * Props for the HomeProjectCard component.
 * Displays individual project information with skills and achievements.
 * @property year - Project year or completion date
 * @property icon - Project icon identifier
 * @property translationKey - i18n key for project title/description
 * @property skills - Array of technology/skill names used in project
 * @property achievmentsCount - Optional count of project achievements
 */
export type HomeProjectCardProps = {
  year: number;
  icon: string;
  translationKey: string;
  skills: string[];
  achievmentsCount?: number;
};

/**
 * Utility type for creating numeric ranges.
 * Creates a union type of numbers from 0 to N.
 */
type Range<N extends number, Result extends number[] = []> = Result["length"] extends N
  ? [...Result, N][number]
  : Range<N, [...Result, Result["length"]]>;

/**
 * Numeric range type for constraining values to 0-N.
 * Usage: NumRange<5> creates 0 | 1 | 2 | 3 | 4 | 5
 */
export type NumRange<N extends number> = Range<N>;
