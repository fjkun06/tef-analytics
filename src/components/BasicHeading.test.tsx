import { render } from "@testing-library/react";

import BasicHeading from "./BasicHeading";

describe("BasicHeading", () => {
  it("should render basic heading correctly", () => {
    render(<BasicHeading text="Hello World" large className="hello-world" />);
    expect(document.querySelector("h2")?.textContent).toBe("Hello World");
    expect(document.querySelector("h2")?.classList.contains("hello-world")).toBe(true);
    expect(document.querySelector("h2")?.classList.contains("text-2xl")).toBe(true);
  });
  it("should render project card heading correctly", () => {
    render(
      <BasicHeading isProjectCardHeading text="Hello World" className="hello-world" />,
    );
    expect(document.querySelector("span")?.textContent).toBe("05/2024 - 08/2024");
    expect(document.querySelector("h2")?.textContent).toBe("Hello World");
  });
});
