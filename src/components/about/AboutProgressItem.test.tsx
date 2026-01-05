import { render, screen } from "@testing-library/react";

import AboutProgressItem from "./AboutProgressItem";

describe("AboutProgressItem", () => {
  it("should render correctly", () => {
    const props = {
      title: "Progress Item",
      percentage: 20,
    };

    render(<AboutProgressItem {...props} />);

    expect(screen.getByText("Progress Item")).toBeInTheDocument();
    expect(screen.getByText("20%")).toBeInTheDocument();
  });
  it("should render correctly with delay", () => {
    const props = {
      title: "Progress Item",
      percentage: 85,
      delay: 0.5,
    };

    render(<AboutProgressItem {...props} />);

    expect(screen.getByText("Progress Item")).toBeInTheDocument();
    expect(screen.getByText("85%")).toBeInTheDocument();
  });
});
