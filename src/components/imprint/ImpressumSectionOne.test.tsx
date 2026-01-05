import { render, screen, act } from "@testing-library/react";

import ImpressumSectionOne from "./ImpressumSectionOne";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

jest.mock("../imprint/LegalSectionHeading");

describe("ImpressumSectionOne (async)", () => {
  it("renders the section with correct heading and content", async () => {
    const element = await ImpressumSectionOne();
    await act(() => render(element));

    expect(screen.getByText(/1. imprint.accordingTo/)).toBeInTheDocument();
  });
});
