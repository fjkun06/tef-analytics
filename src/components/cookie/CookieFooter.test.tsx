import { act, render, screen } from "@testing-library/react";

import CookieFooter from "./CookieFooter";
import { LegalSectionHeadingProps } from "@/interfaces/legal.interface";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

jest.mock("../imprint/LegalSectionHeading", () => ({
  __esModule: true,
  default: ({ index, translationKey, scope }: LegalSectionHeadingProps) => (
    <div data-testid="cookie-footer">{`${index}. ${scope}.${translationKey}`}</div>
  ),
}));

describe("CookieFooter", () => {
  beforeEach(async () => {
    const element = await CookieFooter();
    await act(() => render(element));
  });
  it("should render correctly", async () => {
    expect(screen.getAllByTestId("cookie-footer")).toHaveLength(3);
  });
  it("should pass props correctly", async () => {
    expect(screen.getByText("5. cookie.footerSection.fiveTitle")).toBeInTheDocument();
  });
});
