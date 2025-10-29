/**
 * mergeRefs
 *
 * Utility function that merges multiple React refs into a single ref callback.
 * Handles both function refs and mutable ref objects, ensuring all refs receive
 * the same node reference. Useful for components that need to forward refs while
 * also maintaining internal ref usage.
 *
 * @template T - The type of the DOM element or component instance
 * @param {...React.Ref<T>[]} refs - Variable number of refs to merge
 *
 * @returns {React.RefCallback<T>} A ref callback that applies to all provided refs
 * @example
 * ```tsx
 * const internalRef = useRef<HTMLDivElement>(null);
 * const mergedRef = mergeRefs(forwardedRef, internalRef);
 *
 * return <div ref={mergedRef}>Content</div>;
 * ```
 */
import React from "react";

function mergeRefs<T = any>(...refs: React.Ref<T>[]): React.RefCallback<T> {
  return (node: T) => {
    for (const ref of refs) {
      if (!ref) continue;
      if (typeof ref === "function") {
        ref(node);
      } else {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    }
  };
}
export default mergeRefs;
