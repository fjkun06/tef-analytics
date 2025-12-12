import { act, render, screen, waitFor } from "@testing-library/react";

import ProjectCardBody from "./ProjectCardBody";
import ClientTranslationProvider from "../ClientTranslationProvider";

describe("ProjectCardBody", () => {
  beforeEach(async () => {
    await act(async () =>
      render(
        <ClientTranslationProvider locale={"en"}>
          <ProjectCardBody
            shortDescription="Test Description"
            isProjectCardBodyOpen={false}
            projectCardBodySections={[
              {
                title: "Description",
                type: "list",
                listItems: ["Item 1", "Item 2"],
              },
              {
                title: "Achievements",
                type: "list",
                listItems: ["Achievement 1", "Achievement 2"],
              },
              {
                title: "Practical Work",
                type: "pills",
                technologies: ["Work 1", "Work 2"],
              },
            ]}
          />
        </ClientTranslationProvider>,
      ),
    );
  });
  it("should render correctly", async () => {
    await waitFor(() => expect(screen.getByText("Test Description")).toBeInTheDocument());
  });
});
