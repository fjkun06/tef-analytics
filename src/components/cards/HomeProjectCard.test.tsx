import { act, render, screen } from "@testing-library/react";

import HomeProjectCard from "./HomeProjectCard";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));
describe("HomeProjectCard", () => {
  const project = {
    year: 2024,
    icon: "IconRobot",
    translationKey: "project1",
    skills: ["Python", "TensorFlow", "NLP", "Flask"],
    achievmentsCount: 1,
  };
  const project2 = {
    year: 2024,
    icon: "IconRobot",
    translationKey: "project1",
    skills: [],
  };

  it("should render correctly", async () => {
    const element = await HomeProjectCard({ ...project });
    await act(() => render(element));
    expect(screen.getByText(/2024/)).toBeInTheDocument();
    expect(screen.getByText(/project1.description/)).toBeInTheDocument();
  });
  it("should not render skills div", async () => {
    const element = await HomeProjectCard({ ...project2 });
    await act(() => render(element));
    expect(document.querySelector(".skills")).not.toBeInTheDocument();
    expect(document.querySelectorAll("ul")).toHaveLength(0);
  });
});
