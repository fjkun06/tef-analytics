import { render, screen } from "@testing-library/react";

import FooterLegalLinks from "./FooterLegalLinks";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));
describe("FooterLegalLinks", () => {
  it("should render correctly", async () => {
    const element = await FooterLegalLinks();

    render(element);

    expect(document.querySelector(".legal")).toBeInTheDocument();
    expect(screen.getByText("about.cookie")).toBeInTheDocument();
    expect(document.querySelectorAll("ul li").length).toBe(3);
  });
});
