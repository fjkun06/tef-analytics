import getAboutMeController from "./getAboutMeController";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

const mockAboutData = {
  experience: [
    {
      title: "experience",
      data: [
        {
          title: "work.0.title",
          company: "work.0.company",
          timeSpan: "work.0.timeSpan",
          descriptionItems: ["work.0.descriptionItems.0"],
        },
      ],
    },
    {
      title: "education",
      data: [
        {
          title: "school.0.title",
          company: "school.0.company",
          timeSpan: "school.0.timeSpan",
          descriptionItems: ["school.0.descriptionItems.0"],
        },
      ],
    },
  ],
  technicalSkills: Object.entries({
    Program: [{ title: "R, R-Studio", percentage: 90 }],
  }),
  languages: ["languages.french", "languages.german", "languages.english"],
};

jest.mock("@/utils/constants", () => ({
  about: {
    work: [{ descriptionItemsCount: 1 }],
    school: [{ descriptionItemsCount: 1 }],
    technicalSkills: {
      Program: [{ title: "R, R-Studio", percentage: 90 }],
    },
  },
}));

describe("getAboutMeController", () => {
  it("should initialize correctly", async () => {
    const result = await getAboutMeController();
    expect(result).toEqual({
      t: expect.any(Function),
      ...mockAboutData,
    });
    expect(result.t("about")).toEqual("about");
  });
});
