import generateProjectCardTranslationKeys from "./generateProjectCardTranslationKeys";

// Mock the returnTranslatedListItems function
jest.mock("./returnTranslatedListItems", () => {
  // eslint-disable-next-line no-unused-vars
  return jest.fn((keys: string[], t: (key: string) => string) =>
    keys.map((key) => t(key)),
  );
});

describe("generateProjectCardTranslationKeys - Basic Tests", () => {
  const mockT = jest.fn((key: string) => `translated_${key}`);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should generate translation keys and return translated values", () => {
    const result = generateProjectCardTranslationKeys(0, 3, mockT, "practicalWorkItems");

    // Verify the translation function was called with correct keys
    expect(mockT).toHaveBeenCalledWith("0.practicalWorkItems.0");
    expect(mockT).toHaveBeenCalledWith("0.practicalWorkItems.1");
    expect(mockT).toHaveBeenCalledWith("0.practicalWorkItems.2");
    expect(mockT).toHaveBeenCalledTimes(3);

    // Verify the returned values
    expect(result).toEqual([
      "translated_0.practicalWorkItems.0",
      "translated_0.practicalWorkItems.1",
      "translated_0.practicalWorkItems.2",
    ]);
  });

  it("should create correct key format with parentIndex.domain.itemIndex", () => {
    generateProjectCardTranslationKeys(2, 2, mockT, "achievementItems");

    expect(mockT).toHaveBeenCalledWith("2.achievementItems.0");
    expect(mockT).toHaveBeenCalledWith("2.achievementItems.1");
  });

  it("should handle empty array when count is 0", () => {
    const result = generateProjectCardTranslationKeys(0, 0, mockT, "categories");

    expect(mockT).not.toHaveBeenCalled();
    expect(result).toEqual([]);
  });
});
