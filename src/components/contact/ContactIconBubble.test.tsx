import { render } from "@testing-library/react";

import ContactIconBubble from "./ContactIconBubble";

describe("ContactIconBubble", () => {
  it("should render correctly", () => {
    render(<ContactIconBubble icon={<svg data-testid="test-icon" />} />);
    expect(document.querySelector("span")).toHaveClass("rounded-full border-blue-100");
    expect(document.querySelector("svg")).toBeInTheDocument();
  });
});
