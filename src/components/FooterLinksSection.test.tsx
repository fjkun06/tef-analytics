import { render, screen } from "@testing-library/react";

import FooterLinksSection from "./FooterLinksSection";
import constants from "@/utils/constants";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));
describe("FooterLinkSection", () => {
  it("should render correctly", async () => {
    const element = await FooterLinksSection({
      links: constants.aboutLinks,
      className: "test-class",
      headingTranslationKey: "about",
    });

    render(element);

    expect(document.querySelector(".test-class")).toBeInTheDocument();
    expect(document.querySelectorAll(".test-class li").length).toBe(4);
    expect(screen.getByText("about.title")).toBeInTheDocument();
  });
});
