import { render, screen } from "@testing-library/react";

import ContactLinkItem from "./ContactLinkItem";

describe("ContactLinkItem", () => {
  it("should render basic heading correctly", () => {
    render(
      <ContactLinkItem
        label="Hello World"
        icon={<svg />}
        title="hello-world"
        href="www.google.com"
      />,
    );
    expect(screen.getByTestId("basic-text")?.textContent).toBe("hello-world");
    expect(document.querySelector("a")?.textContent).toBe("Hello World");
    expect(document.querySelector("a")?.href).toBe("http://localhost/www.google.com");
  });
});
