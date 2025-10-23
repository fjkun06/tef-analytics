import { render, screen } from "@testing-library/react";

import SkillPill from "./SkillPill";

describe("CardWrapper", () => {
  it("should render label correctly", () => {
    render(<SkillPill label="Paul" />);

    expect(screen.getByText(/Paul/)).toBeInTheDocument();
  });
  it("should apply carousel style correctly", () => {
    render(<SkillPill label="Paul" carousel />);

    expect(screen.getByText(/Paul/)).toHaveClass("sm:text-sm");
  });
});
