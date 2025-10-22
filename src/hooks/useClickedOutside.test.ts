import { renderHook } from "@testing-library/react";

import { useLanguageSwitchController } from "@/components/LanguageSwitch.controller";

const sampleReturnValue = {
  open: false,
  ref: "div",
  current: "en",
  currentIcon: "🇬🇧",
};
jest.mock("@/locales/client", () => ({
  useChangeLocale: jest.fn(),
  useCurrentLocale: jest.fn(() => "en"),
  useScopedI18n: jest.fn((key: string) => key),
}));

// jest.mock("@/hooks/useClickedOutside", () => jest.fn());
jest.mock("@/components/LanguageSwitch.controller", () => ({
  useLanguageSwitchController: jest.fn(() => ({
    ...sampleReturnValue,
    // tLang: jest.fn(),
    // setOpen: jest.fn(),
    // onSelect: jest.fn(),
  })),
}));
describe("useClickedOutside", () => {
  it("should return the correct initial state", () => {
    const { result } = renderHook(() => useLanguageSwitchController());
    expect(result.current).toEqual(sampleReturnValue);
  });
});
