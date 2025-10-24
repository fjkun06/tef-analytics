import { render, screen } from "@testing-library/react";

import HomeProjectsSectionHeader from "./HomeProjectsSectionHeader";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));
describe("HomeProjectsSectionHeader", () => {
  it("should render and translate correctly", async () => {
    const element = await HomeProjectsSectionHeader();
    render(element);
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("subtitle")).toBeInTheDocument();
  });
});
