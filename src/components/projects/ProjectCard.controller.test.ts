import { renderHook } from "@testing-library/react";

import getProjectCardController from "./ProjectCard.controller";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest
    .fn()
    .mockResolvedValue((scope: string) => (key: string) => `${scope}.${key}`),
}));

jest.mock("@/utils/constants", () => ({
  projects: {
    projectCardData: [
      {
        title: "Project Title",
        shortDescription: "Short description",
        projectTimeSpan: "01/2022 - 12/2022",
        categories: ["Category 1", "Category 2"],
        technologies: ["Tech 1", "Tech 2"],
        descriptionItems: ["Description item 1", "Description item 2"],
        achievementItems: ["Achievement item 1", "Achievement item 2"],
        practicalWorkItems: ["Practical work item 1", "Practical work item 2"],
      },
    ],
  },
}));

describe("getProjectCardController", () => {
  it("should initialize correctly", async () => {
    const { result } = renderHook(async () => await getProjectCardController(0));
    expect(result.current).toBeDefined();
  });
});
