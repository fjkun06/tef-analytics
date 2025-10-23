import { render, screen } from "@testing-library/react";

import SectionWrapper from "./SectionWrapper";

describe("SectionWrapper", () => {
  it("should render children correctly", () => {
    render(
      <SectionWrapper>
        <h2>Test Section</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, possimus.
        </p>
      </SectionWrapper>,
    );

    expect(screen.getByText(/Test Section/)).toBeInTheDocument();
    expect(screen.getByText(/Lorem/)).toBeInTheDocument();
  });
});
