import { render, screen } from "@testing-library/react";

import InfiniteCarousel from "./InfiniteCarousel";

describe("InfiniteCarousel", () => {
  it("should be hidden if part of overflow section", () => {
    render(
      <InfiniteCarousel>
        <span>Test Child</span>
      </InfiniteCarousel>,
    );
    expect(document.querySelectorAll(".group")).toHaveLength(2);
    expect(screen.getAllByText(/Test Child/)).toHaveLength(2);
  });
});
