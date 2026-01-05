import { act, render, screen } from "@testing-library/react";

import AboutInfoCard from "./AboutInfoCard";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

describe("AboutInfoCard", () => {
  it("should render correctly", async () => {
    const element = await AboutInfoCard();

    await act(() => render(element));

    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
    expect(screen.getByText("title")).toBeInTheDocument();
  });
});
