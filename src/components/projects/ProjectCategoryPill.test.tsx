import { render, screen } from "@testing-library/react";

import ProjectCategoryPill from "./ProjectCategoryPill";

describe("ProjectCategoryPill", () => {
  it("should render correctly", () => {
    render(<ProjectCategoryPill category="React" />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });
  it("should render active pill correctly", () => {
    render(<ProjectCategoryPill category="React" isActive />);
    expect(screen.getByText("React")).toHaveClass("bg-slate-900 text-white select-none");
  });
});
