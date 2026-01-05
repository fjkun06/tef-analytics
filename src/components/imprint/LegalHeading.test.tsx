import { act, render, screen } from "@testing-library/react";

import LegalHeading from "./LegalHeading";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn((scope: string) => jest.fn((key: string) => `${scope}.${key}`)),
}));

describe("LegalHeading", () => {
  /**
   * Verifies that the component renders with translated "title" text for the given scope.
   */
  it("should render with translated title", async () => {
    const element = await LegalHeading({ scope: "imprint" });
    await act(() => render(element));
    expect(screen.getByText("imprint.title")).toBeInTheDocument();
  });
});
