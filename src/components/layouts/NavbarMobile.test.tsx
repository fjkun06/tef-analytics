import { render, screen } from "@testing-library/react";

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
    expect(screen.getByTestId("navbar-mobile")).toBeInTheDocument();
    expect(getByTestId("language-switch")).toBeInTheDocument();
  });
});
