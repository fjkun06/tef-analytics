import { render, screen } from "@testing-library/react";

import ProjectsPaginationItem from "./ProjectsPaginationItem";

describe("ProjectsPaginationItem", () => {
  it("should render correctly", () => {
    render(<ProjectsPaginationItem>1</ProjectsPaginationItem>);
    expect(screen.getByText("1")).toBeInTheDocument();
  });
  it("should style current non-navigation item correctly", () => {
    render(<ProjectsPaginationItem isCurrent>1</ProjectsPaginationItem>);
    expect(screen.getByText("1")).toHaveClass("text-white size-9 hover:bg-slate-900");
  });
});
