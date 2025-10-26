import { render, screen } from "@testing-library/react";

import PrivacyBodySection from "./PrivacyBodySection";

const mockTranslatorCallback = jest.fn((key: string) => key);
const mockdata = {
  index: 1,
  titleKey: "privacy.section1.title",
  subtitleKey: "privacy.section1.subtitle",
  listItems: ["privacy.section1.item1", "privacy.section1.item2"],
};
jest.mock("../imprint/LegalSectionHeading");
jest.mock("@/locales/server", () => ({
  getScopedI18n: jest.fn().mockResolvedValue((key: string) => key),
}));

describe("PrivacyBodySection", () => {
  it("should render correctly", () => {
    render(
      <PrivacyBodySection translatorCallback={mockTranslatorCallback} data={mockdata} />,
    );
    expect(screen.getByTestId("privacy-subtitle")).toHaveTextContent(
      mockdata.subtitleKey,
    );
    expect(mockTranslatorCallback).toHaveBeenCalledWith(mockdata.subtitleKey);
  });
});
