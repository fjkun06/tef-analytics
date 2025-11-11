/*eslint-disable */
import returnTranslatedListItems from "./returnTranslatedListItems";

const generateTranslationKeys = (
  parentIndexCount: number,
  descriptionItemsCount: number,
  t: (key: any) => string,
  domain: "work" | "school" = "work",
): string[] => {
  const mappedArray = Array.from({ length: descriptionItemsCount }).map(
    (_, index) => `${domain}.${parentIndexCount}.descriptionItems.${index}`,
  );
  return returnTranslatedListItems(mappedArray, t);
};
export default generateTranslationKeys;
