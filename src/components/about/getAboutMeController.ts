import { getScopedI18n } from "@/locales/server";
import constants from "@/utils/constants";
import { generateTranslationKeys, returnTranslatedListItems } from "@/utils/functions";

// Define the type for domain keys that have array structure
// needed for proper typing in the mapping function
export type AboutArrayDomain = "work" | "school" | "certificates";

export default async function getAboutMeController() {
  const t = await getScopedI18n("about");
  const t2 = (key: any) => t(key);

  const translatedExperience = (["work", "school", "certificates"] as const).map(
    (domain: AboutArrayDomain) => ({
      title: t2(
        // replacing translation key based on domain
        `${domain === "school" ? "education" : domain === "work" ? "experience" : "certificatesTitle"}`,
      ),
      data: constants.about[domain].map(
        ({ descriptionItemsCount }: { descriptionItemsCount: number }, index: number) => {
          const translationKeys = {
            title: t2(`${domain}.${index}.title`),
            company: t2(`${domain}.${index}.company`),
            timeSpan: t2(`${domain}.${index}.timeSpan`),
            // calling method to translate keys based on domain
            descriptionItems: generateTranslationKeys(
              index,
              domain === "certificates" ? 3 : descriptionItemsCount,
              t2,
              domain,
            ),
          };

          const { company, ...certificateKeys } = translationKeys;
          return domain === "certificates"
            ? {
                hasThesisOrCertificate: t2(
                  `${domain}.${index}.thesisOrCertificateUrl`,
                ).includes("http"),
                thesisOrCertificateUrl: t2(`${domain}.${index}.thesisOrCertificateUrl`),
                thesisOrCertificateText: t2("viewCertificate"),
                ...certificateKeys,
              }
            : { ...translationKeys, company };
        },
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
