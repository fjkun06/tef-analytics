import { render, screen } from "@testing-library/react";

import CardWrapper from "./CardWrapper";

describe("CardWrapper", () => {
  it("should render children correctly", () => {
    render(
      <CardWrapper className="test-class">
        <h3>Card Title</h3>
        <p>Card content...</p>
      </CardWrapper>,
    );

    expect(screen.getByText(/Card Title/)).toBeInTheDocument();
    expect(document.querySelector(".test-class")).toBeInTheDocument();
  });
});
