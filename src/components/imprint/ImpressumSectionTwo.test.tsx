import { render, screen, act } from "@testing-library/react";

import ImpressumSectionTwo from "./ImpressumSectionTwo";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

jest.mock("./LegalSectionHeading", () => ({
  __esModule: true,
  default: ({ translationKey, index }: { translationKey: string; index: number }) => (
    <h1>{`${index}. ${translationKey}`}</h1>
  ),
}));

describe("ImpressumSectionTwo (async)", () => {
  it("renders the section with correct heading and content", async () => {
    const element = await ImpressumSectionTwo();
    act(() => render(element));

    expect(screen.getByText(/2. contactInformation/)).toBeInTheDocument();
  });
});
