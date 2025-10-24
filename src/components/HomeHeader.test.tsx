import { act, render, screen } from "@testing-library/react";

import HomeHeader from "./HomeHeader";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

//Mock async server components

jest.mock("./HomeHeaderDetails", () => ({
  __esModule: true,
  default: () => <div>HomeHeaderDetails Component</div>,
}));

jest.mock("./HomeCallToActionButtons", () => ({
  __esModule: true,
  default: () => <div>HomeCallToActionButtons Component</div>,
}));

describe("HomeHeader", () => {
  it("should render correctly", async () => {
    await act(() => render(<HomeHeader />));
    expect(document.querySelector("div.test")).toBeInTheDocument();
    expect(document.querySelector("header")).toBeInTheDocument();
    expect(screen.getByText("HomeHeaderDetails Component")).toBeInTheDocument();
  });
});
