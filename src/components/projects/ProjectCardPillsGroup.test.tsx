import { render, screen } from "@testing-library/react";

import ProjectCardPillsGroup from "./ProjectCardPillsGroup";

describe("ProjectCardPillsGroup", () => {
  it("should render correctly", () => {
    render(
      <ProjectCardPillsGroup
        technologies={["React", "TypeScript", "JavaScript", "Malysia"]}
      />,
    );
    expect(screen.getAllByTestId("technology-pill")).toHaveLength(4);
  });
});
