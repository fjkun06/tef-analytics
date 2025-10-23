import { mapAchievements } from "./mapAchievements";

describe("mapAchievements", () => {
  it("should return array of achievements", () => {
    const t = jest.fn((code: string, index?: number) => `${code} ${index}`);
    const achievements = mapAchievements(t, 3, "testKey");

    expect(achievements).toHaveLength(3);
    expect(achievements[0].props.children[1].props.children).toBe(
      "testKey.achievements 0",
    );
  });
  it("should empty array when achievementsCount is 0", () => {
    const t = jest.fn((code: string, index?: number) => `${code} ${index}`);
    const achievements = mapAchievements(t, 0, "testKey");

    expect(achievements).toHaveLength(0);
  });
});
