import { act, render, screen } from "@testing-library/react";

import FooterCopyright from "@/components/footer/FooterCopyright";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

test("renders copyright year and app name", async () => {
  const year = 2025;
  const appName = "MyApp";

  const element = await FooterCopyright({ appName, year });

  await act(() => render(element));

  expect(screen.getByText(`© ${year} ${appName}`)).toBeInTheDocument();
});
