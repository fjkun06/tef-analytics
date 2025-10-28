import returnPagesToDisplay from "./returnPagesToDisplay";

describe("returnPagesToDisplay", () => {
  it("should return first five pages", () => {
    const result = returnPagesToDisplay(2, 6);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it("should return last five pages", () => {
    const result = returnPagesToDisplay(6, 10);

    expect(result).toEqual([6, 7, 8, 9, 10]);
  });
  it("should return five pages with 6 at the center", () => {
    const result = returnPagesToDisplay(6, 20);

    expect(result).toEqual([4, 5, 6, 7, 8]);
  });

  it("should return four pages", () => {
    const result = returnPagesToDisplay(6, 4);

    expect(result).toEqual([1, 2, 3, 4]);
  });
});
