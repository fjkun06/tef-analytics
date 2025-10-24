import { act, render, screen } from "@testing-library/react";

import HomeSkillsSectionSubHeading from "./HomeSkillsSectionSubHeading";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));
describe("HomeSkillsSectionSubHeading", () => {
  it("should render and translate correctly", async () => {
    const element = await HomeSkillsSectionSubHeading();
    await act(() => render(element));
    expect(screen.getByText("subheading")).toBeInTheDocument();
  });
});
