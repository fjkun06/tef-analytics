import { act, render, screen } from "@testing-library/react";

import ContactDomainCard from "./ContactDomainCard";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

describe("ContactDomainCard", () => {
  it("should render correctly", async () => {
    const element = await ContactDomainCard({
      icon: <svg></svg>,
      titleKey: "domainCard",
      descriptionKey:
        "End-to-end machine learning solutions tailored to your business needs.",
    });

    await act(() => render(element));
    expect(document.querySelector("svg")).toBeInTheDocument();
    expect(document.querySelector("h2")?.textContent).toBe("domainCard");
    expect(screen.getByTestId("basic-text")?.textContent).toBe(
      "End-to-end machine learning solutions tailored to your business needs.",
    );
  });
});
