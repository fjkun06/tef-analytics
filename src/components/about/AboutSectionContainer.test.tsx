import { render, screen } from "@testing-library/react";

import AboutSectionContainer from "./AboutSectionContainer";

describe("AboutSectionContainer", () => {
  it("should render correctly", () => {
    render(
      <AboutSectionContainer title="About">
        <div>Test Content</div>
      </AboutSectionContainer>,
    );

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
