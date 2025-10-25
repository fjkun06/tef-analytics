import { act, render, screen, waitFor } from "@testing-library/react";
import { MotionGlobalConfig } from "framer-motion";

import HomeRotateWords from "./HomeRotateWords";

/*Make animations synchronize with the jest timers*/
MotionGlobalConfig.skipAnimations = true;

const mockWords = ["build", "beautiful", "websites"];

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe("first", () => {
  it("should render 'build' initially", async () => {
    await act(() => {
      render(<HomeRotateWords words={mockWords} />);
    });
    expect(screen.getByText("build")).toBeInTheDocument();
  });

  it("should render 'beautiful' after 5000ms", async () => {
    await act(() => {
      render(<HomeRotateWords words={mockWords} />);
    });

    expect(screen.getByText("build")).toBeInTheDocument();

    await act(() => {
      jest.advanceTimersByTime(5000);
    });

    await waitFor(() => expect(screen.getByText("beautiful")).toBeInTheDocument());
  });
});
