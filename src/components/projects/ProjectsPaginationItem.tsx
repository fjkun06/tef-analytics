/**
 * ProjectsPaginationItem
 *
 * Client component that renders an individual pagination button item with smooth animations.
 * Supports navigation arrows, numbered pages, and current page highlighting.
 * Uses Framer Motion for layout animations with popLayout effect when items change.
 *
 * @param {ProjectsPaginationItemProps} props - Component props
 * @param {React.ReactNode | string} props.children - Button content (number, icon, or text)
 * @param {string} [props.className] - Additional CSS classes to apply to button
 * @param {boolean} [props.isNavigation] - Whether this is a navigation arrow button
 * @param {boolean} [props.isCurrent] - Whether this is the currently active page
 * @param {number} [props.animationKey] - Unique key for Framer Motion layout animations
 * @param {...HTMLButtonElement} props - Standard HTML button attributes
 *
 * @returns {React.ReactElement} Animated pagination item button
 *
 * @example
 * ```tsx
 * <ProjectsPaginationItem isCurrent={true} animationKey={1}>1</ProjectsPaginationItem>
 * <ProjectsPaginationItem onClick={() => setPage(1)}><IconChevronLeft /></ProjectsPaginationItem>
 * ```
 */
"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { ProjectsPaginationItemProps } from "@/interfaces/projects.interface";

function ProjectsPaginationItem({
  children,
  className,
  isNavigation,
  isCurrent,
  animationKey,
  ...props
}: ProjectsPaginationItemProps) {
  const currentItemStyle =
    isCurrent && !isNavigation
      ? "border-slate-900 bg-slate-900 text-white size-9 hover:bg-slate-900"
      : "border-slate-400 ";
  return (
    <AnimatePresence mode="popLayout">
      <motion.li layout key={animationKey}>
        <button
          className={`grid cursor-pointer disabled:cursor-not-allowed disabled:text-gray-500 disabled:hover:bg-transparent ${currentItemStyle} size-8 place-content-center rounded border transition-colors hover:bg-slate-400 rtl:rotate-180 ${className}`}
          {...props}
        >
          {children}
        </button>
      </motion.li>
    </AnimatePresence>
  );
}

export default ProjectsPaginationItem;
