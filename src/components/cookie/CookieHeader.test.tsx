import { act, render, screen } from "@testing-library/react";

import CookieHeader from "./CookieHeader";
import { LegalSectionHeadingProps } from "@/interfaces/legal.interface";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

jest.mock("../imprint/LegalSectionHeading", () => ({
  __esModule: true,
  default: ({ index, translationKey, scope }: LegalSectionHeadingProps) => (
    <div data-testid="cookie-header">{`${index}. ${scope}.${translationKey}`}</div>
  ),
}));

describe("CookieHeader", () => {
  beforeEach(async () => {
    const element = await CookieHeader();
    await act(() => render(element));
  });
  it("should render correctly", async () => {
    expect(screen.getAllByTestId("cookie-header")).toHaveLength(2);
  });
  it("should pass props correctly", async () => {
    expect(screen.getByText("1. cookie.topSection.oneTitle")).toBeInTheDocument();
  });
});
