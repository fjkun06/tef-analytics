import { render, screen } from "@testing-library/react";

import HomeSkillsSection from "./HomeSkillsSection";

const skills = ["JavaScript", "React", "TypeScript", "CSS"];
const domains = [
  {
    domain: "impact",
    icon: "IconWeb",
    detailNumber: 6,
  },
];

jest.mock("./HomeSkillsSectionDetails", () => ({
  __esModule: true,
  default: () => <h3 className="">HomeSkillsSectionDetails Component</h3>,
}));

jest.mock("./HomeDomainDetails", () => ({
  __esModule: true,
  default: () => <h2 className="">HomeDomainDetails Component</h2>,
}));
jest.mock("./HomeSkillsCarousel", () => ({
  __esModule: true,
  default: ({ skills }: any) => (
    <div data-testid="skills-carousel">
      {skills.map((s: string) => (
        <span key={s}>{s}</span>
      ))}
    </div>
  ),
}));

describe("HomeSkillsSection", () => {
  it("should render correctly", () => {
    render(<HomeSkillsSection domainDetails={domains} skills={skills} />);
    expect(screen.getByText("HomeSkillsSectionDetails Component")).toBeInTheDocument();
    expect(screen.getByText("HomeDomainDetails Component")).toBeInTheDocument();
    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});
