import { act, render, screen } from "@testing-library/react";

import SocialLinks from "./SocialLinks";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

describe("SocialLinks", () => {
  it("renders correctly", async () => {
    const element = await SocialLinks();
    await act(() => render(element));
    expect(screen.getByText("social.description")).toBeInTheDocument();
  });
});
