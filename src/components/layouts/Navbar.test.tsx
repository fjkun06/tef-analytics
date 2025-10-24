import { render } from "@testing-library/react";

import Navbar from "./Navbar";

jest.mock("@/locales/client", () => ({
  useScopedI18n: jest.fn((scope: string) =>
    jest.fn((translationKey: string) => `${scope}.${translationKey}`),
  ),
  useChangeLocale: jest.fn(),
  useCurrentLocale: jest.fn(),
}));

jest.mock("@/utils/constants", () => ({
  navItems: [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
  ],
  locales: [],
}));

describe("Navbar", () => {
  it("it should render correctly", () => {
    const { container } = render(<Navbar />);
    expect(container.querySelector("header")).toBeInTheDocument();
    expect(container.querySelectorAll("a")).toHaveLength(5);
  });
});
