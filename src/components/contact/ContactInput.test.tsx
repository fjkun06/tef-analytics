import { render, screen } from "@testing-library/react";

import ContactInput from "./ContactInput";

describe("ContactInput", () => {
  it("should render input correctly", () => {
    render(<ContactInput labelKey="name" schemaName="name" register={jest.fn()} />);
  });
  it("should apply error state styling correctly", () => {
    render(
      <ContactInput
        labelKey="name"
        schemaName="name"
        register={jest.fn()}
        error={{ type: "pattern" }}
      />,
    );
    expect(document.querySelector("input")).toHaveClass(
      "caret-red-500 focus:outline-red-500 dark:border-red-500",
    );
  });
  it("should add * to required elements correctly", () => {
    render(
      <ContactInput labelKey="name" schemaName="name" register={jest.fn()} isRequired />,
    );
    expect(screen.getByText("name *")).toBeInTheDocument();
  });
  it("should render textarea correctly", () => {
    render(
      <ContactInput labelKey="name" schemaName="name" register={jest.fn()} isTextArea />,
    );
    expect(document.querySelector("textarea")).toBeInTheDocument();
  });
});
