import getAboutMeController from "./getAboutMeController";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

const mockAboutData = {
  work: [{ descriptionItemsCount: 2 }],
  school: [{ descriptionItemsCount: 3 }],
};

jest.mock("@/utils/constants", () => ({
  about: {
    work: [{ descriptionItemsCount: 2 }],
    school: [{ descriptionItemsCount: 3 }],
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
