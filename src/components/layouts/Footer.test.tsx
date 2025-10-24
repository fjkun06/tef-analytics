import { render } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  it("should render correctly", async () => {
    const element = await Footer();
    const { container } = render(element);
    expect(container).toBeInTheDocument();
  });
});
