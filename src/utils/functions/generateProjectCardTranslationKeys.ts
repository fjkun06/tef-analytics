/*eslint-disable */
import returnTranslatedListItems from "./returnTranslatedListItems";

/**
 * Represents the valid domains for project array properties that can be translated.
 * @public
 */
export type ProjectArrayDomain =
  | "practicalWorkItems"
  | "achievementItems"
  | "categories"
  | "descriptionItems";

/**
 * Generates an array of translated strings for project card content based on translation keys.
 *
 * This function creates translation keys in the format `{parentIndex}.{domain}.{itemIndex}`
 * and returns the translated content for each key. It's specifically designed for translating
 * array-based content in project cards such as description items, practical work items,
 * achievement items, and categories.
 *
 * @param parentIndexCount - The parent index identifying the specific project (e.g., 0, 1, 2...)
 * @param descriptionItemsCount - The number of items in the array to generate translations for
 * @param t - Translation function that takes a key and returns the translated string
 * @param domain - The specific array domain to generate translations for
 *
 * @returns An array of translated strings corresponding to the generated translation keys
 *
 * @example
 * ```typescript
 * // Generate translations for achievement items of the first project (index 0)
 * const achievements = generateProjectCardTranslationKeys(
 *   0,
 *   3,
 *   t,
 *   'achievementItems'
 * );
 * // This would generate keys: "0.achievementItems.0", "0.achievementItems.1", "0.achievementItems.2"
 * // And return their translated values
 * ```
 *
 * @example
 * ```typescript
 * // Generate translations for practical work items of the second project (index 1)
 * const practicalWork = generateProjectCardTranslationKeys(
 *   1,
 *   5,
 *   t,
 *   'practicalWorkItems'
 * );
 * // This would generate keys: "1.practicalWorkItems.0", "1.practicalWorkItems.1", etc.
 * ```
 *
 * @public
 */
const generateProjectCardTranslationKeys = (
  parentIndexCount: number,
  descriptionItemsCount: number,
  t: (key: any) => string,
  domain: ProjectArrayDomain,
): string[] => {
  const mappedArray = Array.from({ length: descriptionItemsCount }).map(
    (_, index) => `${parentIndexCount}.${domain}.${index}`,
  );
  return returnTranslatedListItems(mappedArray, t);
};
export default generateProjectCardTranslationKeys;
