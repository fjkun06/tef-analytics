import { render } from "@testing-library/react";

import FooterContactLinks from "./FooterContactLinks";

describe("FooterContactLinks", () => {
  it("should render correctly", () => {
    render(<FooterContactLinks className="test-class" />);
    expect(document.querySelector("ul.test-class")).toBeInTheDocument();
  });
});
