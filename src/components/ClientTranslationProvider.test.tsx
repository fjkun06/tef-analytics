import React from "react";

import { render, screen } from "@testing-library/react";

import ClientTranslationProvider from "./ClientTranslationProvider";

// Mock I18nProviderClient to just render children
jest.mock("@/locales/client", () => ({
  I18nProviderClient: ({ children }: any) => (
    <div data-testid="i18n-provider">{children}</div>
  ),
}));
describe("ClientTranslationProvider", () => {
  it("renders children inside I18nProviderClient", () => {
    const text = "Hello, world!";
    render(
      <ClientTranslationProvider locale="en">
        <span>{text}</span>
      </ClientTranslationProvider>,
    );

    expect(screen.getByTestId("i18n-provider")).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
