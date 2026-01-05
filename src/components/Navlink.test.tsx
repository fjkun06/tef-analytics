import { render } from "@testing-library/react";
import { usePathname } from "next/navigation";

import NavLink from "./NavLink";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/de/france"),
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe("NavLink", () => {
  it("should render correctly", () => {
    const { container } = render(<NavLink href="/" inactiveClassName="hello" />);
    expect(window.location.pathname).toBe("/");
    expect(container.getElementsByClassName("hello")).toHaveLength(1);
  });

  it("should apply active class correctly", () => {
    const { container } = render(
      <NavLink href="/france" activeClassName="active" className="welcome" />,
    );
    expect(container.getElementsByClassName("active")).toHaveLength(1);
  });

  it("should match pathnames correctly", () => {
    (usePathname as jest.Mock).mockReturnValue("/de");
    const { container } = render(
      <NavLink href="/" activeClassName="active" className="welcome" />,
    );
    expect(window.location.pathname).toBe("/");
    expect(container.getElementsByClassName("active")).toHaveLength(1);
  });
});
