import { render } from "@testing-library/react";

import CarouselWrapper from "./CarouselWrapper";

describe("CarouselWrapper", () => {
  it("should render and apply classes correctly", () => {
    render(
      <CarouselWrapper index={0} className="test-class">
        <span>Test Child</span>
      </CarouselWrapper>,
    );
    expect(document.querySelector(".test-class")).toBeInTheDocument();
  });
  it("should be hidden if part of overflow section", () => {
    render(
      <CarouselWrapper index={1}>
        <span>Test Child</span>
      </CarouselWrapper>,
    );
    expect(document.querySelector(".group")).toHaveClass("aria-hidden");
  });
});
