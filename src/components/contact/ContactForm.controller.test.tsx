import { act, fireEvent, render, renderHook } from "@testing-library/react";

import useContactFormController from "./ContactForm.controller";
import constants from "@/utils/constants";
import postData from "@/utils/sampleApi";

jest.mock("@/locales/client", () => ({
  useScopedI18n: jest.fn((scope: string) => jest.fn((key: string) => `${scope}.${key}`)),
}));
jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));
jest.mock("react-hot-toast", () => ({
  __esModule: true,
  default: {
    success: jest.fn(),
  },
}));
jest.mock("@/utils/sampleApi");

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

const postDataMock = postData as jest.MockedFunction<typeof postData>;

const TestComponent = () => {
  const { handleSubmit, onSubmit, register } = useContactFormController();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} />
      <button type="submit">Submit</button>
    </form>
  );
};

describe("useContactFormController", () => {
  it("should initialize correctly", () => {
    const { result } = renderHook(() => useContactFormController());
    expect(result.current.isSubmitting).toBe(false);
    expect(result.current.isSubmitSuccessful).toBe(false);
    expect(result.current.hasErrors).toBe(false);
    expect(result.current.contactFormItems.length).toBe(
      constants.contactFormItems(jest.fn).length,
    );
    expect(result.current.contactFormItems[0].labelKey).toBe("contact.form.name");
  });

  it("should translate correctly", () => {
    const { result } = renderHook(() => useContactFormController());

    expect(result.current.contactFormItems[0].labelKey).toBe("contact.form.name");
  });

  it("should submit correctly when valid", async () => {
    render(<TestComponent />);
    await act(() => {
      fireEvent.input(document.querySelector("input")!, { target: { value: "hello" } });
      fireEvent.click(document.querySelector("button")!);
    });

    expect(postDataMock).toHaveBeenCalledTimes(1);
  });
});
