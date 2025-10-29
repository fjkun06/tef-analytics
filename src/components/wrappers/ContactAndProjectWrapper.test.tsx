import { render, screen } from "@testing-library/react";

import ContactAndProjectWrapper from "./ContactAndProjectWrapper";

describe("PagesWrapper", () => {
  it("should render children correctly", () => {
    render(
      <ContactAndProjectWrapper>
        <div>Test Child</div>
      </ContactAndProjectWrapper>,
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
  it("should update className correctly", () => {
    render(
      <ContactAndProjectWrapper className="custom-class">
        <div>Test Child</div>
      </ContactAndProjectWrapper>,
    );

    expect(document.querySelector(".custom-class")).toBeInTheDocument();
  });
});
