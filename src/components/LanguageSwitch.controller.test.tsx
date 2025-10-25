import { act, fireEvent, render, renderHook } from "@testing-library/react";

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
  useChangeLocale: jest.fn((locale: string) => jest.fn(() => locale)),
  useCurrentLocale: jest.fn(() => "en"),
  useScopedI18n: jest.fn((scope: string) => scope),
}));

jest.mock("@/utils/constants", () => ({
  locales: [],
}));

const TestComponent = () => {
  const { open, setOpen, ref } = useLanguageSwitchController();
  return (
    <div>
      <div className="main" ref={ref}>
        <button onClick={() => setOpen(!open)}>Toggle</button>
        {open ? <div>Language Switch</div> : <div>Language Snitch</div>}
      </div>

      <span className="outsider">Outsider</span>
    </div>
  );
};

describe("useLanguageSwitchController", () => {
  it("should return the correct initial state", () => {
    const { result } = renderHook(() => useLanguageSwitchController());
    expect(result.current).toEqual(sampleReturnValue);
  });

  it("should call onSelect", async () => {
    const { result } = renderHook(() => useLanguageSwitchController());

    await act(() => result.current.setOpen(true));
    expect(result.current.open).toBe(true);

    await act(() => result.current.onSelect("de"));
    expect(result.current.open).toBe(false);
  });

  it("it should close dropdown when clicked on anywhere but dropdown", () => {
    const { container, getByText } = render(<TestComponent />);

    expect(getByText(/Language Snitch/)).toBeInTheDocument();

    const toggleButton = container.querySelector("button")!;
    fireEvent.click(toggleButton);
    expect(getByText(/Language Switch/)).toBeInTheDocument();

    /**
     * Event (mousedown) must match that of the listener in useClickedOutside.
     * Else it won't pass the test.
     */
    const outsiderDiv = container.querySelector(".outsider")!;
    fireEvent.mouseDown(outsiderDiv);
    expect(getByText(/Language Snitch/)).toBeInTheDocument();
  });
});
