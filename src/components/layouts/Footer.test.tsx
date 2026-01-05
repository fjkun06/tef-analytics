import { render } from "@testing-library/react";

import Footer from "./Footer";

jest.mock("../SocialLinks", () => ({
  __esModule: true,
  default: () => <div>SocialLinks Component</div>,
}));

jest.mock("../footer", () => ({
  FooterLinksSection: () => <div>FooterLinksSection Component</div>,
  FooterCopyright: () => <div>FooterCopyright Component</div>,
}));

describe("Footer", () => {
  it("should render correctly", () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });
});
