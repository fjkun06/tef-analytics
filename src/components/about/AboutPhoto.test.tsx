import { render, screen } from "@testing-library/react";

import AboutPhoto from "./AboutPhoto";

describe("AboutPhoto", () => {
  it("should render correctly", () => {
    render(<AboutPhoto />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
