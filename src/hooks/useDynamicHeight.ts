/**
 * useDynamicHeight
 *
 * Custom hook that dynamically calculates and updates the height of a DOM element
 * based on its scroll height. Recalculates whenever the open state changes,
 * useful for animated expand/collapse components with variable content.
 *
 * @param {boolean} openStateVariable - Boolean state that triggers height recalculation
 *
 * @returns {Object} Hook result object
 * @returns {React.RefObject<HTMLDivElement>} returns.contentRef - Ref to attach to the element being measured
 * @returns {number} returns.height - Current calculated scroll height of the element
 * @example
 * ```tsx
 * const { contentRef, height } = useDynamicHeight(isOpen);
 *
 * return (
 *   <div
 *     ref={contentRef}
 *     style={{ maxHeight: isOpen ? `${height}px` : '0px' }}
 *   >
 *     Content
 *   </div>
 * );
 * ```
 */
import { useRef, useState, useEffect } from "react";

export default function useDynamicHeight(openStateVariable: boolean) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [openStateVariable]);

  return { contentRef, height };
}
