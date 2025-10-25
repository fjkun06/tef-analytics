import { render, screen, act } from "@testing-library/react";

import ImpressumContent from "./ImpressumContent";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

jest.mock("./LegalSectionHeading", () => ({
  __esModule: true,
  default: ({ translationKey }: { translationKey: string }) => <h1>{translationKey}</h1>,
}));

describe("ImpressumContent (async)", () => {
  it("renders the section with correct heading and content", async () => {
    const element = await ImpressumContent({ index: 4, titleTranslationKey: "heading" });
    act(() => render(element));

    expect(screen.getByText("heading")).toBeInTheDocument();
    expect(screen.getByText("four")).toBeInTheDocument();
  });
});
