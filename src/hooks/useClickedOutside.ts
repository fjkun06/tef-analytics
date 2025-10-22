import React, { useEffect } from "react";

/**
 * Props for the {@link useClickedOutside} hook.
 * @public
 */
type UseOnClickOutsideProps = {
  /**
   * A React ref object pointing to the element to detect outside clicks for.
   */
  ref: React.MutableRefObject<HTMLElement | null>;
  /**
   * The callback function to execute when an outside click is detected.
   */
  functionToBeTriggered: () => void;
};

/**
 * Custom React hook that triggers a callback when a click occurs outside the referenced element.
 *
 * @param props - {@link UseOnClickOutsideProps} containing the ref and callback.
 * @returns void
 *
 * @example
 * const ref = useRef(null);
 * useClickedOutside({ ref, functionToBeTriggered: () => setOpen(false) });
 */
const useClickedOutside = ({ ref, functionToBeTriggered }: UseOnClickOutsideProps) => {
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) functionToBeTriggered();
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [functionToBeTriggered, ref]);
};

export default useClickedOutside;
