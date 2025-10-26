import { screen } from "@testing-library/dom";
import { act, render } from "@testing-library/react";

import CookieBody from "./CookieBody";

/**
 * Mock LegalSectionHeading component for testing.
 * Simplifies the component to a div for easier assertion in tests.
 */
jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

jest.mock("../imprint/LegalSectionHeading");

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
