import { render } from "@testing-library/react";

import CookieBodyItem from "./CookieBodyItem";

describe("CookieBodyItem", () => {
  it("should render correctly", () => {
    const { container, getByRole } = render(
      <CookieBodyItem title="Test Title" description="Test Description" />,
    );
    expect(getByRole("heading", { name: "Test Title" })).toBeInTheDocument();
    expect(container.querySelector("p")).toHaveTextContent("Test Description");
  });
});
