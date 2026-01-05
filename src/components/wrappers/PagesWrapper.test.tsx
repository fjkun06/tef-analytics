import { render, screen } from "@testing-library/react";

import PagesWrapper from "./PagesWrapper";

describe("PagesWrapper", () => {
  it("should render children correctly", () => {
    render(
      <PagesWrapper>
        <div>Test Child</div>
      </PagesWrapper>,
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
  it("should update className correctly", () => {
    render(
      <PagesWrapper className="custom-class">
        <div>Test Child</div>
      </PagesWrapper>,
    );

    expect(document.querySelector(".custom-class")).toBeInTheDocument();
  });
});
