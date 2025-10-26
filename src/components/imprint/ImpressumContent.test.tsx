import { render, screen, act } from "@testing-library/react";

import ImpressumContent from "./ImpressumContent";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

jest.mock("../imprint/LegalSectionHeading");

describe("ImpressumContent (async)", () => {
  it("renders the section with correct heading and content", async () => {
    const element = await ImpressumContent({ index: 4, titleTranslationKey: "heading" });
    await act(() => render(element));

    expect(screen.getByText("4. imprint.heading")).toBeInTheDocument();
    expect(screen.getByText("four")).toBeInTheDocument();
  });
});
