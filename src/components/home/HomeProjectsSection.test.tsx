import { render, screen } from "@testing-library/react";

import HomeProjectsSection from "./HomeProjectsSection";
import { Project } from "@/interfaces/home.interface";

jest.mock("./HomeCallToActionButtons", () => ({
  __esModule: true,
  default: () => (
    <div>
      <span className="">HomeCallToActionButtons Component</span>
    </div>
  ),
}));
jest.mock("./HomeProjectCardsContainer", () => ({
  __esModule: true,
  default: (props: { mainProjects: Project[] }) => (
    <div>
      <span className="">HomeProjectCardsContainer Component</span>
      <span className="">{props.mainProjects[0].year}</span>
    </div>
  ),
}));
jest.mock("./HomeProjectsSectionHeader", () => ({
  __esModule: true,
  default: () => (
    <div>
      <span className="">HomeProjectsSectionHeader Component</span>
    </div>
  ),
}));
describe("HomeProjectsSection", () => {
  it("should render correctly", () => {
    render(
      <HomeProjectsSection
        mainProjects={[
          {
            year: 2024,
            icon: "IconRobot",
            translationKey: "project1",
            skills: ["Python", "TensorFlow", "NLP", "Flask"],
            achievmentsCount: 1,
          },
        ]}
      />,
    );
    expect(screen.getByText("2024")).toBeInTheDocument();
    expect(screen.getByText("HomeProjectsSectionHeader Component")).toBeInTheDocument();
  });
});
