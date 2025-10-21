import { getCurrentYear } from "./getCurrentYear";

describe("getCurrentYear", () => {
  it("returns the current year", () => {
    const expected = new Date().getFullYear();
    expect(getCurrentYear()).toBe(expected);
  });
});
