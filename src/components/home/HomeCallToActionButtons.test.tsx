import { act, render, screen } from "@testing-library/react";

import HomeCallToActionButtons from "./HomeCallToActionButtons";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));
describe("HomeCallToActionButtons", () => {
  it("should render and translate correctly", async () => {
    const element = await HomeCallToActionButtons();
    await act(() => render(element));
    expect(screen.getByText("about")).toBeInTheDocument();
  });
});
