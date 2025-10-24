import { act, render, screen } from "@testing-library/react";

import HomeHeaderDetails from "./HomeHeaderDetails";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));
describe("HomeHeaderDetails", () => {
  it("should render and translate correctly", async () => {
    const element = await HomeHeaderDetails();
    await act(() => render(element));
    expect(screen.getByText("me")).toBeInTheDocument();
  });
});
