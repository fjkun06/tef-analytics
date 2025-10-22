import { fireEvent, render } from "@testing-library/react";

import LanguageSwtichButton from "./LanguageSwtichButton";

describe("LanguageSwtichButton", () => {
  it("should render correctly", () => {
    const props = {
      open: false,
      setOpen: jest.fn(),
      currentIcon: "🇬🇧",
      current: "en",
    };

    render(<LanguageSwtichButton {...props} />);
    fireEvent.click(document.querySelector("button")!);
    expect(props.setOpen).toHaveBeenCalled();
  });
});
