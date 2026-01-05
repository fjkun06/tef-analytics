import { render, screen } from "@testing-library/react";

import ProjectCardBodySectionListGroup from "./ProjectCardBodySectionListGroup";

const mockListItems = [
  "Implemented user authentication and authorization using JWT and OAuth2 protocols.",
  "Designed and developed RESTful APIs with Node.js and Express.js for seamless frontend-backend communication.",
  "Optimized database queries and indexing strategies in MongoDB to enhance application performance and scalability.",
  "Integrated third-party services such as Stripe for payment processing and SendGrid for email notifications.",
];

describe("ProjectCardBodySectionListGroup", () => {
  it("should render correctly", () => {
    render(<ProjectCardBodySectionListGroup listItems={mockListItems} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(mockListItems.length);
  });
});

describe("ProjectCardBodySectionListGroup", () => {
  it("should render about me items correctly", () => {
    render(<ProjectCardBodySectionListGroup listItems={mockListItems} isAboutMeItem />);
    expect(screen.getAllByTestId("about-me-item")).toHaveLength(mockListItems.length);
  });
});
