import { render, screen } from "@testing-library/react";

import AboutProgressItemContainer from "./AboutProgressItemContainer";

describe("AboutProgressItemContainer", () => {
  it("should render correctly", () => {
    render(
      <AboutProgressItemContainer title="About">
        <div>Test Content</div>
      </AboutProgressItemContainer>,
    );

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
