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
import returnTranslatedListItems from "@/utils/functions/returnTranslatedListItems";

export default async function getProjectCardController(index: number) {
  const t = await getScopedI18n("projects");
  const t2 = (key: any) => t(key);

  const categories = returnTranslatedListItems(
    constants.projects.projectCardData[index].categories,
    t2,
  );
  const technologies = returnTranslatedListItems(
    constants.projects.projectCardData[index].technologies,
    t2,
  );

  const descriptionItems = returnTranslatedListItems(
    constants.projects.projectCardData[index].descriptionItems,
    t2,
  );
  const achievementItems = returnTranslatedListItems(
    constants.projects.projectCardData[index].achievementItems,
    t2,
  );
  const practicalWorkItems = returnTranslatedListItems(
    constants.projects.projectCardData[index].practicalWorkItems,
    t2,
  );

  const projectCardBodySections = [
    {
      title: t2("Description"),
      type: "list",
      listItems: descriptionItems,
    },
    {
      title: t2("Practical Work"),
      type: "list",
      listItems: practicalWorkItems,
    },
    {
      title: t2("Key Achievements"),
      type: "pills",
      technologies: achievementItems,
    },
  ] as ProjectCardSectionProps[];
  return {
    technologyTitle: t2("technologyTitle"),
    projectCardBodySections,
    categories,
    technologies,
    projectTimeSpan: constants.projects.projectCardData[index].projectTimeSpan,
    shortDescription: t2(constants.projects.projectCardData[index].shortDescription),
    title: t2(constants.projects.projectCardData[index].title),
  };
}
