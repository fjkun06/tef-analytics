import { render, screen } from "@testing-library/react";

import ProjectCardSection from "./ProjectCardSection";

const mockListItems = [
  "Implemented user authentication and authorization using JWT and OAuth2 protocols.",
  "Designed and developed RESTful APIs with Node.js and Express.js for seamless frontend-backend communication.",
  "Optimized database queries and indexing strategies in MongoDB to enhance application performance and scalability.",
  "Integrated third-party services such as Stripe for payment processing and SendGrid for email notifications.",
];

const mockTechnologies = ["React", "TypeScript", "Node.js", "GraphQL"];

describe("ProjectCardSection", () => {
  it("should render ProjectCardPillsGroup when type=pills", () => {
    render(
      <ProjectCardSection
        type="pills"
        technologies={mockTechnologies}
        title="Technologies"
      />,
    );
    expect(screen.getAllByTestId("technology-pill")).toHaveLength(
      mockTechnologies.length,
    );
  });
  it("should render ProjectCardBodySectionListGroup when type=list", () => {
    render(
      <ProjectCardSection type="list" listItems={mockListItems} title="List Items" />,
    );
    expect(screen.getAllByRole("listitem")).toHaveLength(mockListItems.length);
  });
});
