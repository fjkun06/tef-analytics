import { render, screen, act } from "@testing-library/react";

import ImpressumSectionTwo from "./ImpressumSectionTwo";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

describe("ImpressumSectionTwo (async)", () => {
  it("renders the section with correct heading and content", async () => {
    const element = await ImpressumSectionTwo();
    await act(() => render(element));

    expect(screen.getByText(/2. contactInformation/)).toBeInTheDocument();
  });
});
