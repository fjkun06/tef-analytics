import { render, screen } from "@testing-library/react";

import HomeSkillsCarousel from "./HomeSkillsCarousel";

const skills = ["JavaScript", "React", "TypeScript", "CSS"];

jest.mock("./HomeSkillsSectionSubHeading", () => ({
  __esModule: true,
  default: () => <h3 className="">HomeSkillsSectionSubHeading Component</h3>,
}));
describe("HomeSkillsCarousel", () => {
  it("should render correctly", () => {
    render(<HomeSkillsCarousel skills={skills} />);

    expect(screen.getByText("HomeSkillsSectionSubHeading Component")).toBeInTheDocument();
    expect(screen.getAllByTestId("skill-pill")).toHaveLength(8);
  });
});
