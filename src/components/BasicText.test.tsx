import { render } from "@testing-library/react";

import BasicText from "./BasicText";

describe("BasicText", () => {
  it("should render correctly", () => {
    render(<BasicText text="Hello World" />);
    expect(document.querySelector("span")?.textContent).toBe("Hello World");
  });
  it("should render correctly", () => {
    render(<BasicText large text="Hello World" />);
    expect(document.querySelector("p")?.textContent).toBe("Hello World");
  });
});
