import { act, render, screen } from "@testing-library/react";

import HomeImpactCard from "./HomeImpactCard";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

describe("HomeImpactCard", () => {
  it("should render correctly", async () => {
    const element = await HomeImpactCard({
      icon: "IconTrend",
      domain: "experience",
      detailNumber: 16,
    });

    await act(() => render(element));

    expect(screen.getByText("16+")).toBeInTheDocument();
    expect(screen.getByText("experience.subtitle")).toBeInTheDocument();
  });
});
