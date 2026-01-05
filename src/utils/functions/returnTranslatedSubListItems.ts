/*eslint-disable */

import { PracticalWorkItem } from "@/interfaces/projects.interface";

const returnTranslatedSubListItems = (
  items: PracticalWorkItem[],
  translate: (key: any) => string,
): PracticalWorkItem[] =>
  items.map(({ title, descriptionItems }) => ({
    title: translate(title.trim()),
    descriptionItems: descriptionItems.map((item) => translate(item.trim())),
  }));

export default returnTranslatedSubListItems;
