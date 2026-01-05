import { fireEvent, render, screen } from "@testing-library/react";

import ProjectsPagination from "./ProjectsPagination";

const activeClass = "text-white size-9 hover:bg-slate-900";
describe("ProjectsPagination", () => {
  beforeEach(() => render(<ProjectsPagination />));
  it("should render correctly", () => {
    expect(screen.getAllByTestId("pagination-item")).toHaveLength(7);
  });
  it("should increment page index correctly", () => {
    const nextButton = screen.getAllByTestId("pagination-item")[6].firstChild!;
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    expect(screen.getAllByTestId("pagination-item")[3].firstChild!).toHaveClass(
      activeClass,
    );
  });
  it("should decrement page index correctly", () => {
    expect(screen.getAllByTestId("pagination-item")[1].firstChild!).toHaveClass(
      activeClass,
    );
    const nextButton = screen.getAllByTestId("pagination-item")[6].firstChild!;
    const prevButton = screen.getAllByTestId("pagination-item")[0].firstChild!;
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(prevButton);
    expect(screen.getAllByTestId("pagination-item")[2].firstChild!).toHaveClass(
      activeClass,
    );
  });
  it("should move to page when index is clicked index correctly", () => {
    const thirdPage = screen.getAllByTestId("pagination-item")[3].firstChild!;
    fireEvent.click(thirdPage);
    expect(screen.getAllByTestId("pagination-item")[3].firstChild!).toHaveClass(
      activeClass,
    );
  });
});
