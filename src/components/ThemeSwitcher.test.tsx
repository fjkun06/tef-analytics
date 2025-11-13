import { act, fireEvent, render } from "@testing-library/react";
import { useTheme } from "next-themes";

import ThemeSwitcher, { paths } from "./ThemeSwitcher";

jest.mock("@/locales/client", () => ({
  useI18n: jest.fn(() => jest.fn((key: string) => key)),
}));

jest.mock("next-themes", () => ({
  useTheme: jest.fn(() => ({
    theme: "dark",
    setTheme: jest.fn((key: string) => key),
  })),
}));

describe("ThemeSwitcher", () => {
  it("should render dark mode correctly", () => {
    const { container } = render(<ThemeSwitcher />);
    expect(container.querySelector("svg")).toHaveAttribute("viewBox", "0 0 24 24");
    expect(container.querySelector("svg")).toHaveAttribute("stroke", "white");
    expect(container.querySelector("svg path")).toHaveAttribute("d", paths.sun);
    expect(container.querySelector("svg path")).toHaveAttribute("fill", "none");
  });

  it("should render light mode correctly", async () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      setTheme: jest.fn(),
    });
    const setThemeMock = useTheme().setTheme as jest.Mock;

    const { container } = render(<ThemeSwitcher />);
    expect(container.querySelector("button")).toHaveAttribute("title", "toggleTheme");
    expect(container.querySelector("svg")).toHaveAttribute("viewBox", "0 0 8 8");
    expect(container.querySelector("svg path")).toHaveAttribute("d", paths.moon);

    await act(() => fireEvent.click(container.querySelector("button")!));
    expect(setThemeMock).toHaveBeenCalledWith("dark");
  });

  it("should call theme toggle function correctly", async () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: "dark",
      setTheme: jest.fn(),
    });
    const setThemeMock = useTheme().setTheme as jest.Mock;
    const { container } = render(<ThemeSwitcher />);
    await act(() => fireEvent.click(container.querySelector("button")!));
    expect(setThemeMock).toHaveBeenCalledWith("light");
  });
});
