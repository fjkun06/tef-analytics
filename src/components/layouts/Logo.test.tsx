import { render } from "@testing-library/react";

import Logo from "./Logo";

jest.mock("@/utils/strings", () => ({
  appName: "Banana",
}));
describe("Logo", () => {
  it("renders Logo with appName", () => {
    const { container } = render(<Logo />);
    expect(container.innerHTML).toContain("Banana");
  });
});
