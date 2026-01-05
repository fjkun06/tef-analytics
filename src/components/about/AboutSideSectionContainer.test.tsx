import { render, screen } from "@testing-library/react";

import AboutSideSectionContainer from "./AboutSideSectionContainer";

describe("AboutSideSectionContainer", () => {
  it("should render correctly", () => {
    render(
      <AboutSideSectionContainer title="About">
        <div>Test Content</div>
      </AboutSideSectionContainer>,
    );

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
