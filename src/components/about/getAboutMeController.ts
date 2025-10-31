import { getScopedI18n } from "@/locales/server";
import constants from "@/utils/constants";
import { generateTranslationKeys, returnTranslatedListItems } from "@/utils/functions";

// Define the type for domain keys that have array structure
// needed for proper typing in the mapping function
type AboutArrayDomain = "work" | "school";

export default async function getAboutMeController() {
  const t = await getScopedI18n("about");
  const t2 = (key: any) => t(key);

  const translatedExperience = (["work", "school"] as const).map(
    (domain: AboutArrayDomain) => ({
      title: t2(`${domain === "school" ? "education" : "experience"}`),
      data: constants.about[domain].map(
        (
          { descriptionItemsCount }: { descriptionItemsCount: number },
          index: number,
        ) => ({
          title: t2(`${domain}.${index}.title`),
          company: t2(`${domain}.${index}.company`),
          timeSpan: t2(`${domain}.${index}.timeSpan`),
          descriptionItems: generateTranslationKeys(
            index,
            descriptionItemsCount,
            t2,
            domain,
          ),
        }),
      ),
    }),
  );

  return {
    t: t2,
    experience: translatedExperience,
    languages: returnTranslatedListItems(
      ["languages.french", "languages.german", "languages.english"],
      t2,
    ),
    technicalSkills: Object.entries(constants.about.technicalSkills),
  };
}
