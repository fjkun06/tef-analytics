import React from "react";

import { render, screen } from "@testing-library/react";

import SocialIconLink from "./SocialIconLink";

describe("SocialIconLink", () => {
  it("renders a link with the correct href and label", async () => {
    const href = "https://example.com";
    const label = "Example Social";
    const icon = <svg data-testid="icon" />;

    render(<SocialIconLink href={href} label={label} icon={icon} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", href);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
    expect(screen.getByText(label)).toHaveClass("sr-only");
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
