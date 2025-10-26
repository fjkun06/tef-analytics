import { act, render, screen } from "@testing-library/react";

import PrivacyBody from "./PrivacyBody";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

jest.mock("../imprint/LegalSectionHeading");

describe("PrivacyBody", () => {
  it("should render correctly", async () => {
    const element = await PrivacyBody();
    await act(() => render(element));
    expect(screen.getAllByTestId("privacy-subtitle")).toHaveLength(3);
  });
});
