/**
 * useProjectCardController
 *
 * Server-side controller hook that fetches and prepares project data for the Projectcard component.
 * Retrieves project information from constants based on the provided index, translates all text
 * content using internationalization, and structures the data for component consumption.
 * Handles categories, technologies, descriptions, achievements, and practical work items.
 *
 * @param {number} index - Project index to fetch data for from constants.projects.projectCardData
 *
 * @returns {Promise<Object>} Project data object containing:
 *   - technologyTitle: Translated "Technologies" section title
 *   - projectCardBodySections: Array of translated sections (Description, Practical Work, Key Achievements)
 *   - categories: Translated project category labels
 *   - technologies: Translated technology/tool names
 *   - projectTimeSpan: Project duration string (e.g., "04/2022 - 06/2022")
 *   - shortDescription: Translated project summary
 *   - title: Translated project title
 *
 * @example
 * ```tsx
 * const projectData = await useProjectCardController(0);
 * // Returns structured data for first project with translations
 * ```
 */

import { ProjectCardSectionProps } from "@/interfaces/projects.interface";
import { getScopedI18n } from "@/locales/server";
import constants from "@/utils/constants";
import generateProjectCardTranslationKeys from "@/utils/functions/generateProjectCardTranslationKeys";

export default async function getProjectCardController(index: number) {
  const t = await getScopedI18n("projects");
  const tCard = await getScopedI18n("projects.cards");
  const t2 = (key: any) => t(key);
  const t1 = (key: any) => tCard(key);
  const cardDetails = constants.projects.projectCardData[index];

  console.log(Array(4).fill(null));

  const categories = generateProjectCardTranslationKeys(
    index,
    cardDetails.categories.length,
    t1,
    "categories",
  );
  // const categories = returnTranslatedListItems(cardDetails.categories, t2);
  const technologies = cardDetails.technologies;

  const descriptionItems = generateProjectCardTranslationKeys(
    index,
    cardDetails.descriptionItems.length,
    t1,
    "descriptionItems",
  );
  const achievementItems = generateProjectCardTranslationKeys(
    index,
    cardDetails.achievementItems.length,
    t1,
    "achievementItems",
  );
  const practicalWorkItems = generateProjectCardTranslationKeys(
    index,
    cardDetails.practicalWorkItems.length,
    t1,
    "practicalWorkItems",
  );

  const projectCardBodySections = [
    {
      title: t("descriptionTitle"),
      type: "list",
      listItems: descriptionItems,
    },
    {
      title: t("practicalWorkTitle"),
      type: "list",
      listItems: practicalWorkItems,
    },
    {
      title: t("achievementTitle"),
      type: "pills",
      technologies: achievementItems,
    },
  ] as ProjectCardSectionProps[];
  return {
    technologyTitle: t2("technologyTitle"),
    projectCardBodySections,
    categories,
    technologies,
    projectTimeSpan: t2(`cards.${index}.projectTimeSpan`),
    shortDescription: t2(`cards.${index}.shortDescription`),
    title: t2(`cards.${index}.title`),
  };
}
