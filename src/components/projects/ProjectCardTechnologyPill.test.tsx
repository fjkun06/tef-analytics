import { render, screen } from "@testing-library/react";

import ProjectCardTechnologyPill from "./ProjectCardTechnologyPill";

describe("ProjectCardTechnologyPill", () => {
  it("should render correctly", () => {
    render(<ProjectCardTechnologyPill tech="React" />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });
});
