import { fireEvent, render, screen } from "@testing-library/react";

import LanguageSwtichDropdown from "./LanguageSwtichDropdown";

describe("LanguageSwtichDropdown", () => {
  const languageLocales = [
    { code: "en" as const, name: "English", icon: "🇬🇧" },
    { code: "fr" as const, name: "Français", icon: "🇫🇷" },
  ];
  const translatedLanguageLocales = { en: "English", fr: "Français" as const };

  const props = {
    current: "en",
    onSelect: jest.fn(),
    tLang: jest.fn((code: "en" | "fr") => translatedLanguageLocales[code]),
    languageLocales,
  };

  beforeEach(() => {
    render(<LanguageSwtichDropdown {...props} />);
  });
  it("it should render correctly", () => {
    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getAllByTestId("data-span")[0].textContent).toBe("🇬🇧");
    expect(screen.getAllByTestId("data-span")).toHaveLength(2);
  });
  it("it should fire switch locale correctly", () => {
    fireEvent.click(screen.getByText("Français"));
    expect(props.onSelect).toHaveBeenCalledWith("fr");
  });
});
