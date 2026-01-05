import { render } from "@testing-library/react";
import { usePathname } from "next/navigation";

import FooterLink from "./FooterLink";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/de/france"),
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe("FooterLink", () => {
  it("should render correctly", () => {
    const { container } = render(<FooterLink href="/" inactiveClassName="hello" />);
    expect(window.location.pathname).toBe("/");
    expect(container.getElementsByClassName("hello")).toHaveLength(1);
  });

  it("should apply active class correctly", () => {
    const { container } = render(
      <FooterLink href="/france" activeClassName="active" className="welcome" />,
    );
    expect(container.getElementsByClassName("active")).toHaveLength(1);
  });

  it("should match pathnames correctly", () => {
    (usePathname as jest.Mock).mockReturnValue("/de");
    const { container } = render(
      <FooterLink href="/" activeClassName="active" className="welcome" />,
    );
    expect(window.location.pathname).toBe("/");
    expect(container.getElementsByClassName("active")).toHaveLength(1);
  });
});
