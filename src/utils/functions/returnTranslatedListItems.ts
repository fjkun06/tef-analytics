/*eslint-disable */

const returnTranslatedListItems = (
  items: string[],
  translate: (key: any) => string,
): string[] => {
  return items.map((item) => translate(item.trim()));
};
export default returnTranslatedListItems;
