import { fireEvent, render, screen } from "@testing-library/react";

import useClickedOutside from "./useClickedOutside";

const mockFn = jest.fn();

const TestComponent = () => {
  useClickedOutside({ ref: null as any, functionToBeTriggered: mockFn });

  return (
    <div>
      <span data-testid="test-container">Container</span>
      <span data-testid="test-element">External</span>
    </div>
  );
};

describe("useClickedOutside", () => {
  it("should not trigger a function after clicking outside", () => {
    render(<TestComponent />);
    fireEvent.mouseDown(screen.getByTestId("test-element"));
    expect(mockFn).not.toHaveBeenCalled();
  });
});
