import { render, screen } from "@testing-library/react";

import HomeDomainDetails from "./HomeDomainDetails";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

const details = [
  {
    domain: "experience",
    icon: "IconTrend",
    detailNumber: 10,
  },
];
jest.mock("../cards/HomeImpactCard", () => ({
  __esModule: true,
  default: (props: (typeof details)[0]) => (
    <div>
      <span className="">{props.domain}</span>
    </div>
  ),
}));

describe("HomeDomainDetails", () => {
  it("should render correctly", () => {
    render(<HomeDomainDetails domainDetails={details} />);

    expect(screen.getByText("experience")).toBeInTheDocument();
  });
});
