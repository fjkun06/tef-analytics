import { render } from "@testing-library/react";

import NavbarDesktop from "./NavbarDesktop";

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
const mockNavbarProps = {
  isMobileOpen: isOpen,
  toggleMobileOpen: toggleIsOpen,
  t: (key: string) => key,
  navbarItems: [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
  ],
  name,
};

describe("NavbarDesktop", () => {
  it("should render correctly", () => {
    const { container, getByTestId } = render(<NavbarDesktop {...mockNavbarProps} />);
    expect(container.querySelectorAll("a")).toHaveLength(3);
    expect(getByTestId("language-switch")).toBeInTheDocument();
    expect(getByTestId("icon-close")).toBeInTheDocument();
  });
  it("should toggle icons when open correctly", () => {
    const { getByTestId } = render(
      <NavbarDesktop {...mockNavbarProps} isMobileOpen={false} />,
    );
    expect(getByTestId("icon-menu")).toBeInTheDocument();
  });
});
