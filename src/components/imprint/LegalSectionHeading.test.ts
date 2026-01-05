import { render, screen, act } from "@testing-library/react";

import LegalSectionHeading from "./LegalSectionHeading";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

describe("LegalSectionHeading", () => {
  it("renders the heading with correct translation", async () => {
    const element = await LegalSectionHeading({
      scope: "imprint",
      index: 1,
      translationKey: "heading",
    });
    await act(() => render(element));
    expect(screen.getByText("1. heading")).toBeInTheDocument();
  });
});
