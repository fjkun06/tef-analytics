import { act, render, screen } from "@testing-library/react";

import HomeSkillsSectionDetails from "./HomeSkillsSectionDetails";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));
describe("HomeSkillsSectionDetails", () => {
  it("should render and translate correctly", async () => {
    const element = await HomeSkillsSectionDetails();
    await act(() => render(element));

    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("content.one")).toBeInTheDocument();
    expect(screen.getByText("subtitle")).toBeInTheDocument();
  });
});
