import { render, screen } from "@testing-library/react";

import AboutSectionContainerItem from "./AboutSectionContainerItem";

describe("AboutSectionContainerItem", () => {
  it("should render correctly", () => {
    render(
      <AboutSectionContainerItem
        title="About"
        descriptionItems={["Item 1", "Item 2"]}
        timeSpan="2020-2024"
        hasThesis
        thesisUrl="/thesis.pdf"
      />,
    );

    expect(screen.getByRole("heading")).toHaveTextContent("About");
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });
});
