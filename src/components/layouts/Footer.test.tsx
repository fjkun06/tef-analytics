import { render } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  it("should render correctly", () => {
    const element = <Footer />;
    const { container } = render(element);
    expect(container).toBeInTheDocument();
  });
});
