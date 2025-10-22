import { render } from "@testing-library/react";

import LanguageSwitch from "./LanguageSwitch";

jest.mock("@/locales/client", () => ({
  useChangeLocale: jest.fn(),
  useCurrentLocale: jest.fn(() => "en"),
  useScopedI18n: jest.fn((key: string) => key),
}));

describe("LanguageSwitch", () => {
  it("should render correctly", () => {
    render(<LanguageSwitch />);
    expect(document.querySelector("div.relative")).toBeInTheDocument();
  });
});
