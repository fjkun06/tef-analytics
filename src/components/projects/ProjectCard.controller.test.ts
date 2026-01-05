import { renderHook } from "@testing-library/react";

import getProjectCardController from "./ProjectCard.controller";

jest.mock("@/locales/server", () => ({
  getScopedI18n: jest
    .fn()
    .mockResolvedValue((scope: string) => (key: string) => `${scope}.${key}`),
}));

jest.mock("@/utils/constants", () => ({
  projects: {
    projectCardData: [
      {
        title: "Project Title",
        shortDescription: "Short description",
        projectTimeSpan: "01/2022 - 12/2022",
        categories: ["Category 1", "Category 2"],
        technologies: ["Tech 1", "Tech 2"],
        descriptionItems: ["Description item 1", "Description item 2"],
        achievementItems: ["Achievement item 1", "Achievement item 2"],
        practicalWorkItems: [
          {
            title: "Practical Work Title 1",
            descriptionItems: [
              "Nutzung eines Kaggle-Datensatzes (≈140k Artikel, Zeitraum 2016–07/2017).",
              "Konsolidierung der Metadaten (Quelle, Datum, Autor:innen, Titel, Text).",
              "Text-Cleaning (Encoding, Sonderzeichen, Lowercasing, Stopwörter, einfache Normalisierung).",
            ],
          },

          {
            title: "Practical Work Title 2",
            descriptionItems: [
              "Nutzung eines Kaggle-Datensatzes (≈140k Artikel, Zeitraum 2016–07/2017).",
              "Konsolidierung der Metadaten (Quelle, Datum, Autor:innen, Titel, Text).",
              "Text-Cleaning (Encoding, Sonderzeichen, Lowercasing, Stopwörter, einfache Normalisierung).",
            ],
          },
        ],
      },
    ],
  },
}));

describe("getProjectCardController", () => {
  it("should initialize correctly", async () => {
    const { result } = renderHook(async () => await getProjectCardController(0));
    expect(result.current).toBeDefined();
  });
});
