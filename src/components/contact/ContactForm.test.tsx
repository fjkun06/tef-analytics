import { act, fireEvent, render, screen } from "@testing-library/react";

import ContactForm from "./ContactForm";

jest.mock("@/locales/client", () => ({
  useScopedI18n: jest.fn((scope: string) => jest.fn((key: string) => `${scope}.${key}`)),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

let parentContainer: HTMLElement;

beforeEach(() => {
  const { container } = render(<ContactForm />);
  parentContainer = container;
});

const inputData = [
  "Frank Jordan Zone Nguemfouo",
  "frankjord23@gmail.com",
  "01771560344",
  "Fehlende Unterlagen",
  "ssdfggdfg",
];

describe("ContactForm", () => {
  it("should render correctly", () => {
    expect(screen.getByText("46149 Oberhausen")).toBeInTheDocument();
    expect(screen.getByText("contact.form.submit")).toBeInTheDocument();
  });
  it("should update text while submitting correctly", async () => {
    const inputs = parentContainer.querySelectorAll("input, textarea");
    await act(() => {
      inputs.forEach((input, index) => {
        fireEvent.change(input, { target: { value: inputData[index] } });
      });

      fireEvent.click(parentContainer.querySelector("button")!);
    });

    expect(screen.getByText("contact.form.submitting")).toBeInTheDocument();
  });
});
