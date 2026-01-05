import { fireEvent, render, waitFor } from "@testing-library/react";

import NavigateButton from "./NavigateButton";

describe("NavigateButton", () => {
  it("should render correctly", () => {
    const props = {
      label: "name",
      route: "client",
    };

    render(<NavigateButton {...props} />);
    fireEvent.click(document.querySelector("a")!);
    waitFor(async () => {
      expect(window.location.pathname).toBe("/client");
    });
  });
});
