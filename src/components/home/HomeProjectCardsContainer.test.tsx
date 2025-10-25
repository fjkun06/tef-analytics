import { render, screen } from "@testing-library/react";

import HomeProjectCardsContainer from "./HomeProjectCardsContainer";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key + 22),
}));

const details = [
  {
    year: 2024,
    icon: "IconRobot",
    translationKey: "project1",
    skills: ["Python", "TensorFlow", "NLP", "Flask"],
    achievmentsCount: 1,
  },
];
jest.mock("../cards/HomeProjectCard", () => ({
  __esModule: true,
  default: (props: (typeof details)[0]) => {
    return (
      <div>
        <span className="">{props.translationKey}</span>
      </div>
    );
  },
}));

describe("HomeProjectCardsContainer", () => {
  it("should render correctly", () => {
    render(<HomeProjectCardsContainer mainProjects={details} />);

    expect(screen.getByText("project1")).toBeInTheDocument();
  });
});
