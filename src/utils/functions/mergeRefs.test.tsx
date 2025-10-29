// mergeRefs.test.ts

import mergeRefs from "./mergeRefs";

describe("mergeRefs", () => {
  it("assigns node to multiple object refs", () => {
    const ref1 = { current: null };
    const ref2 = { current: null };
    const node = document.createElement("div");

    const merged = mergeRefs(ref1, ref2);
    merged(node as any);

    expect(ref1.current).toBe(node);
    expect(ref2.current).toBe(node);
  });

  it("calls all function refs with node", () => {
    const refFn1 = jest.fn();
    const refFn2 = jest.fn();
    const node = document.createElement("span");

    const merged = mergeRefs(refFn1, refFn2);
    merged(node);

    expect(refFn1).toHaveBeenCalledWith(node);
    expect(refFn2).toHaveBeenCalledWith(node);
  });

  it("works with a mix of function and object refs", () => {
    const ref1 = { current: null };
    const refFn = jest.fn();
    const node = document.createElement("p");

    const merged = mergeRefs(ref1, refFn);
    merged(node);

    expect(ref1.current).toBe(node);
    expect(refFn).toHaveBeenCalledWith(node);
  });

  it("handles null refs gracefully", () => {
    const ref1 = { current: null };
    const node = document.createElement("div");

    const merged = mergeRefs(ref1, null);
    expect(() => merged(node as any)).not.toThrow();
    expect(ref1.current).toBe(node);
  });
});
