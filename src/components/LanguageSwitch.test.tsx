import { fireEvent, render } from "@testing-library/react";

import LanguageSwitch from "./LanguageSwitch";

jest.mock("@/locales/client", () => ({
  useChangeLocale: jest.fn(),
  useCurrentLocale: jest.fn(() => "en"),
  useScopedI18n: jest.fn((scope: string) => (key: string) => `${scope}.${key}`),
}));

jest.mock("@/utils/constants", () => ({
  locales: [
    { code: "en" as const, label: "English", icon: "🇬🇧" },
    { code: "de" as const, label: "Deutsch", icon: "🇩🇪" },
  ],
}));

describe("LanguageSwitch", () => {
  it("should render correctly", () => {
    render(<LanguageSwitch />);
    expect(document.querySelector("div.relative")).toBeInTheDocument();
  });
  it("should translate correctly", () => {
    const { getAllByTestId } = render(<LanguageSwitch />);
    fireEvent.click(getAllByTestId("language-switch-button")[0]);
    expect(getAllByTestId("data-span")).toHaveLength(2);
  });
});
