import generateTranslationKeys from "./generateTranslationKeys";

describe("generateTranslationKeys", () => {
  it("should return an array of translated items", () => {
    const translate = (key: any) => `translated_${key}`;
    const result = generateTranslationKeys(0, 1, translate);
    expect(result).toEqual(["translated_work.0.descriptionItems.0"]);
  });
});
