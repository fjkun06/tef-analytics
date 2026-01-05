import { render, screen, act } from "@testing-library/react";

import LastUpdated from "./LastUpdated";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn((scope: string) => jest.fn((key: string) => `${scope}.${key}`)),
}));

describe("LastUpdated", () => {
  /**
   * Verifies that the component renders with translated "lastUpdated" text.
   */
  it("should render with translated text", async () => {
    const element = await LastUpdated();
    await act(() => render(element));
    expect(screen.getByText("imprint.lastUpdated")).toBeInTheDocument();
  });
});
