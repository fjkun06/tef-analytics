import { screen } from "@testing-library/dom";
import { act, render } from "@testing-library/react";

import CookieBody from "./CookieBody";
import { LegalSectionHeadingProps } from "@/interfaces/legal.interface";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

jest.mock("../imprint/LegalSectionHeading", () => ({
  __esModule: true,
  default: ({ index, translationKey, scope }: LegalSectionHeadingProps) => (
    <div data-testid="cookie-body">{`${index}. ${scope}.${translationKey}`}</div>
  ),
}));

describe("CookieBody", () => {
  it("it should render correctly", async () => {
    const element = await CookieBody();
    await act(() => render(element));
    expect(screen.getAllByTestId("cookie-body-item")).toHaveLength(3);

    expect(
      screen.getByRole("heading", { name: "threePointOneTitle" }),
    ).toBeInTheDocument();
    expect(screen.getByText("3. cookie.middleSection.threeTitle")).toBeInTheDocument();
  });
});
