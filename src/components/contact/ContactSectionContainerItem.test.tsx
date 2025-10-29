import { act, render } from "@testing-library/react";

import ContactSectionContainerItem from "./ContactSectionContainerItem";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

describe("ContactSectionContainerItem", () => {
  it("should render correctly", async () => {
    const element = await ContactSectionContainerItem({
      icon: <svg></svg>,
      descriptionKey: "description",
    });

    await act(() => render(element));
    expect(document.querySelector("svg")).toBeInTheDocument();
    expect(document.querySelector("p")?.textContent).toBe("description");
  });
});
