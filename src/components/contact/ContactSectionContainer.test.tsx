import { act, render } from "@testing-library/react";

import ContactSectionContainer from "./ContactSectionContainer";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

describe("ContactSectionContainer", () => {
  it("should render correctly", async () => {
    const element = await ContactSectionContainer({
      headingKey: "description",
      children: <p>Child Content</p>,
    });

    await act(() => render(element));
    expect(document.querySelector("h2")?.textContent).toBe("description");
    expect(document.querySelector("p")?.textContent).toBe("Child Content");
  });
});
