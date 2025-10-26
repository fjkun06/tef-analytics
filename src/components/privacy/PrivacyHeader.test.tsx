import { act, render, screen } from "@testing-library/react";

import PrivacyHeader from "./PrivacyHeader";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

jest.mock("../imprint/LegalSectionHeading");

describe("PrivacyHeader", () => {
  beforeEach(async () => {
    const element = await PrivacyHeader();
    await act(() => render(element));
  });
  it("should render correctly", async () => {
    expect(screen.getAllByTestId("cookie-mock")).toHaveLength(2);
  });
  it("should pass props correctly", async () => {
    expect(screen.getByText("1. privacy.topSection.oneTitle")).toBeInTheDocument();
  });
});
