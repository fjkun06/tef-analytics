import { render } from "@testing-library/react";

import Brand from "./Brand";

jest.mock("@/utils/strings", () => ({
  appName: "Tef Analytics",
}));
describe("Brand", () => {
  it("renders the brand with logo and app name", () => {
    const { container } = render(<Brand />);
    expect(container.innerHTML).toContain("Tef Analytics");
  });
});
