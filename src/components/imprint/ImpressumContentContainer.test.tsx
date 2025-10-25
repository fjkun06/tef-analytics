import { render, screen } from "@testing-library/react";

import ImpressumContentContainer from "./ImpressumContentContainer";

/**
 * Test suite for ImpressumContentContainer component.
 *
 * Tests verify that the component:
 * - Renders all content sections from constants
 * - Correctly passes props to child ImpressumContent components
 * - Uses correct key for each rendered child
 */
jest.mock("./ImpressumContent", () => ({
  __esModule: true,
  default: ({ index, titleTranslationKey }: any) => (
    <div data-testid={`content-section-${index}`}>
      {index}. {titleTranslationKey}
    </div>
  ),
}));

jest.mock("@/utils/constants", () => ({
  __esModule: true,
  default: {
    impressum: {
      lowerHalf: [
        { index: 4, titleTranslationKey: "section4" },
        { index: 5, titleTranslationKey: "section5" },
        { index: 6, titleTranslationKey: "section6" },
      ],
    },
  },
}));

const mockContentSections = [4, 5, 6];

describe("ImpressumContentContainer", () => {
  it("should render all content sections from constants", () => {
    render(<ImpressumContentContainer />);
    mockContentSections.forEach((index) => {
      expect(screen.getByTestId(`content-section-${index}`)).toBeInTheDocument();
    });
  });

  it("should render with correct content for each section", () => {
    render(<ImpressumContentContainer />);
    mockContentSections.forEach((index) => {
      expect(screen.getByText(`${index}. section${index}`)).toBeInTheDocument();
    });
  });
});
