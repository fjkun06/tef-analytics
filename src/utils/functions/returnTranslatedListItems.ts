/*eslint-disable */

const returnTranslatedListItems = (
  items: string[],
  translate: (key: any) => string,
): string[] => {
  return items.map((item) => translate(item.trim()));
};
export default returnTranslatedListItems;

const generateTranslationKeys = (
  parentIndexCount: number,
  descriptionItemsCount: number,
  t: (key: any) => string,
): string[] => {
  const mappedArray = Array.from({ length: descriptionItemsCount }).map(
    (_, index) => `work.${parentIndexCount}.descriptionItems.${index}`,
  );
  return returnTranslatedListItems(mappedArray, t);
};
export { generateTranslationKeys };
