import { render, screen } from "@testing-library/react";

import LegalPagesWrapper from "./LegalPagesWrapper";

describe("LegalPagesWrapper", () => {
  it("should render children correctly", () => {
    render(
      <LegalPagesWrapper>
        <h2>Test Section</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, possimus.
        </p>
      </LegalPagesWrapper>,
    );

    expect(screen.getByText(/Test Section/)).toBeInTheDocument();
    expect(screen.getByText(/Lorem/)).toBeInTheDocument();
  });
});
