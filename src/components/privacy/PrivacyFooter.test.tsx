import { act, render, screen } from "@testing-library/react";

import PrivacyFooter from "./PrivacyFooter";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

jest.mock("../imprint/LegalSectionHeading");

describe("PrivacyFooter", () => {
  beforeEach(async () => {
    const element = await PrivacyFooter();
    await act(() => render(element));
  });
  it("should render correctly", async () => {
    expect(screen.getAllByTestId("cookie-mock")).toHaveLength(2);
    expect(document.querySelector("p")).toBeInTheDocument();
  });
  it("should pass props correctly", async () => {
    expect(screen.getByText("6. privacy.footerSection.sixTitle")).toBeInTheDocument();
  });
});
