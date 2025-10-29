import getAboutMeController from "./getAboutMeController";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

describe("getAboutMeController", () => {
  it("should initialize correctly", async () => {
    const result = await getAboutMeController();
    expect(result).toEqual({ t: expect.any(Function) });
    expect(result.t("about")).toEqual("about");
  });
});
