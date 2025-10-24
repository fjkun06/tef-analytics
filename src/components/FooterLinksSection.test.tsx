import { render, screen } from "@testing-library/react";

import FooterLinksSection from "./FooterLinksSection";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));
describe("FooterLinkSection", () => {
  it("should render correctly", async () => {
    const element = await FooterLinksSection({
      headingTranslationKey: "about",
      children: <span className="test-class">Footer Links</span>,
    });

    render(element);

    expect(document.querySelector(".test-class")).toBeInTheDocument();
    expect(screen.getByText("about.title")).toBeInTheDocument();
    expect(screen.getByText(/Footer Links/)).toBeInTheDocument();
  });
});
