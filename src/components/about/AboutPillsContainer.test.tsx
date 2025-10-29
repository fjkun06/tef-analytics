import { render, screen } from "@testing-library/react";

import AboutPillsContainer from "./AboutPillsContainer";

const mockPills = ["Pill 1", "Pill 2", "Pill 3"];
describe("AboutPillsContainer", () => {
  it("should render correctly", () => {
    render(<AboutPillsContainer title="hello" pills={mockPills} />);

    expect(screen.getByRole("heading")!.textContent).toBe("hello");
    expect(document.querySelectorAll("span").length).toBe(3);
  });
  it("should render floating pills correctly", () => {
    render(<AboutPillsContainer title="hello" pills={mockPills} isFloating />);

    expect(screen.getByRole("heading")).toHaveClass("text-sm text-gray-700");
  });
});
