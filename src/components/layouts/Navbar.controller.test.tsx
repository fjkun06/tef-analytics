import { act, fireEvent, render, renderHook } from "@testing-library/react";

import useNavbarController from "./Navbar.controller";

jest.mock("@/locales/client", () => ({
  useScopedI18n: jest.fn((scope: string) =>
    jest.fn((translationKey: string) => `${scope}.${translationKey}`),
  ),
}));

jest.mock("@/utils/constants", () => ({
  __esModule: true,
  default: { navItems: ["Home", "About"] },
}));

/**
 * Test suite for useNavbarController custom hook.
 *
 * - Mocks translation and constants modules for isolation.
 * - Verifies initial state, toggling, translation, and click-outside behavior.
 */

/**
 * TestComponent
 *
 * Helper component to test useNavbarController hook in a DOM context.
 * Provides toggler and state display for interaction tests.
 */
function TestComponent() {
  const { ref, toggleMobileOpen, isMobileOpen } = useNavbarController();

  return (
    <div className="parent">
      <div className="referred-child" ref={ref}>
        <span className="toggler" onClick={toggleMobileOpen}>
          Toggle
        </span>
      </div>
      <span className="state-child">{isMobileOpen ? "Open" : "Closed"}</span>
    </div>
  );
}

describe("useNavbarController", () => {
  /**
   * Verifies initial state and returned properties of the hook.
   */
  it("should initialize correctly", () => {
    const { result } = renderHook(useNavbarController);
    expect(result.current.isMobileOpen).toBe(false);
    expect(result.current.navbarItems.length).toBe(2);
    expect(typeof result.current.ref).toBe("object");
  });

  /**
   * Checks that toggling the mobile menu updates state as expected.
   */
  it("should toggle mobile navbar state correctly", async () => {
    const { result } = renderHook(useNavbarController);
    await act(() => result.current.toggleMobileOpen());
    expect(result.current.isMobileOpen).toBe(true);
  });

  /**
   * Ensures the translation function returns the correct scoped key.
   */
  it("should translate correctly", () => {
    const { result } = renderHook(useNavbarController);
    expect(result.current.t("home")).toBe("nav.home");
  });

  /**
   * Simulates user interaction and click-outside to verify state changes in a DOM context.
   */
  it("should handle toggling and click-outside correctly", () => {
    const { container } = render(<TestComponent />);
    expect(container.querySelector(".state-child")?.textContent).toBe("Closed");
    fireEvent.click(container.querySelector(".toggler")!);
    expect(container.querySelector(".state-child")?.textContent).toBe("Open");

    /**
     * Event (mousedown) must match that of the listener in useClickedOutside.
     * Else it won't pass the test.
     */
    fireEvent.mouseDown(container.querySelector(".state-child")!);
    expect(container.querySelector(".state-child")?.textContent).toBe("Closed");
  });
});
