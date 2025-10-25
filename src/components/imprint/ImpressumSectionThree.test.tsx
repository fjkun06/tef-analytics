import { render, screen, act } from "@testing-library/react";

import ImpressumSectionThree from "./ImpressumSectionThree";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

jest.mock("./LegalSectionHeading", () => ({
  __esModule: true,
  default: ({ translationKey, index }: { translationKey: string; index: number }) => (
    <h1>{`${index}. ${translationKey}`}</h1>
  ),
}));

const mockContent = ["threeOne", "threeTwo", "threeThree"];

describe("ImpressumSectionThree (async)", () => {
  it("renders the section with correct heading and content", async () => {
    const element = await ImpressumSectionThree();
    await act(() => render(element));

    expect(screen.getByText("3. professionalInformation")).toBeInTheDocument();

    mockContent.forEach((content) => {
      expect(screen.getByText(content)).toBeInTheDocument();
    });
  });
});
