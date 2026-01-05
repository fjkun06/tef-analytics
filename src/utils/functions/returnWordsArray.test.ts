import returnWordsArray from "./returnWordsArray";

/**
 * Test suite for returnWordsArray utility function.
 *
 * Tests verify that the function:
 * - Correctly maps translation keys through the provided callback
 * - Returns an array of four translated words
 * - Preserves the callback logic for each word
 */
describe("returnWordsArray", () => {
  /**
   * Verifies that the function returns an array of four elements.
   */
  it("should return an array of four words", () => {
    const mockCallback = jest.fn((word: string) => word);
    const result = returnWordsArray(mockCallback);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(4);
  });

  /**
   * Checks that the callback is called with the correct translation keys.
   */
  it("should call the callback with correct translation keys", () => {
    const mockCallback = jest.fn((word: string) => word);
    returnWordsArray(mockCallback);
    expect(mockCallback).toHaveBeenCalledWith("content.one");
    expect(mockCallback).toHaveBeenCalledWith("content.two");
    expect(mockCallback).toHaveBeenCalledWith("content.three");
    expect(mockCallback).toHaveBeenCalledWith("content.four");
    expect(mockCallback).toHaveBeenCalledTimes(4);
  });

  /**
   * Verifies that the callback results are correctly stored in the returned array.
   */
  it("should return array with callback results", () => {
    const mockCallback = jest.fn((word: string) => `translated_${word}`);
    const result = returnWordsArray(mockCallback);
    expect(result).toEqual([
      "translated_content.one",
      "translated_content.two",
      "translated_content.three",
      "translated_content.four",
    ]);
  });
});
