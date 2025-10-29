import { act, render } from "@testing-library/react";

import PageHeader from "./PageHeader";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

describe("PageHeader", () => {
  it("should render correctly", async () => {
    const element = await PageHeader({ scope: "projects" });

    await act(() => render(element));
    expect(document.querySelector("h1")?.textContent).toBe("title");
  });
});
