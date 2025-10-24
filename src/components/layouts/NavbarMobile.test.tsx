import { render } from "@testing-library/react";

import NavbarMobile from "./NavbarMobile";

jest.mock("@/locales/client", () => ({
  useScopedI18n: jest.fn((scope: string) =>
    jest.fn((translationKey: string) => `${scope}.${translationKey}`),
  ),
  useChangeLocale: jest.fn(),
  useCurrentLocale: jest.fn(),
}));

let isOpen = true;
const toggleIsOpen = () => {
  isOpen = !isOpen;
};
const mockMobileNavbarProps = {
  isMobileOpen: isOpen,
  toggleMobileOpen: toggleIsOpen,
  t: (key: string) => key,
  navbarItems: [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
  ],
  name,
};
describe("NavbarMobile", () => {
  it("should render correctly", () => {
    const { container, getByTestId } = render(
      <NavbarMobile {...mockMobileNavbarProps} />,
    );
    expect(container.querySelectorAll("a")).toHaveLength(2);
    expect(container.getElementsByClassName("max-h-screen")).toHaveLength(1);
    expect(getByTestId("language-switch")).toBeInTheDocument();
  });
  it("should toggle classes when open correctly", () => {
    const { container } = render(
      <NavbarMobile {...mockMobileNavbarProps} isMobileOpen={false} />,
    );
    expect(container.getElementsByClassName("overflow-hidden")).toHaveLength(1);
  });
});
