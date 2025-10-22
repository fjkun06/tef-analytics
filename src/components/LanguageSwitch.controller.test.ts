import { renderHook } from "@testing-library/react";

import { useLanguageSwitchController } from "./LanguageSwitch.controller";
const sampleReturnValue = {
  open: false,
  ref: { current: null },
  current: "en",
  currentIcon: "",
  languageLocales: [],
  onSelect: expect.any(Function),
  tLang: "lang",
  setOpen: expect.any(Function),
};
jest.mock("@/locales/client", () => ({
  useChangeLocale: jest.fn(),
  useCurrentLocale: jest.fn(() => "en"),
  useScopedI18n: jest.fn((key: string) => key),
}));

jest.mock("@/utils/constants", () => ({
  locales: [],
}));

jest.mock("@/hooks/useClickedOutside", () => jest.fn());

describe("useLanguageSwitchController", () => {
  it("should return the correct initial state", () => {
    const { result } = renderHook(() => useLanguageSwitchController());
    expect(result.current).toEqual(sampleReturnValue);
  });
  // it("should call onSelect", async () => {
  //   renderHook(() => useLanguageSwitchController());
  //   // const mock = useClickedOutside({
  //   //   ref: { current: null },
  //   //   functionToBeTriggered: jest.fn(),
  //   // });
  //   expect(jest.fn()).toHaveBeenCalled();
  // });
});
