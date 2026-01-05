import { render } from "@testing-library/react";

import LegalEmailLocation from "./LegalEmailLocation";

describe("LegalEmailLocation", () => {
  it("should render props correctly", () => {
    const { getByText } = render(<LegalEmailLocation location="Germany" />);
    expect(getByText("Germany")).toBeInTheDocument();
  });
});
