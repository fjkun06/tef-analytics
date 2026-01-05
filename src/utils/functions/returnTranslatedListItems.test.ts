import returnTranslatedListItems from "./returnTranslatedListItems";

describe("returnTranslatedListItems", () => {
  it("should return an array of translated items", () => {
    const items = ["item1", "item2", "item3"];
    const translate = (key: any) => `translated_${key}`;
    const result = returnTranslatedListItems(items, translate);
    expect(result).toEqual(["translated_item1", "translated_item2", "translated_item3"]);
  });
});
