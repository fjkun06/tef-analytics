/**
 * AboutProgressItem
 *
 * Client component that displays an animated progress bar for skills or achievements.
 * Uses Framer Motion for smooth spring animations with configurable delay and stiffness.
 * Shows skill title, percentage value, and animated progress bar fill.
 *
 * @param {AboutProgressItemProps} props - Component props
 * @param {number} [props.percentage] - Progress value from 0-100
 * @param {string} props.title - Skill or achievement name
 * @param {number} [props.delay] - Animation delay in seconds
 *
 * @returns {React.ReactElement} Animated progress bar with title and percentage
 *
 * @example
 * ```tsx
 * <AboutProgressItem title="React" percentage={90} delay={0.2} />
 * ```
 */
"use client";
import React from "react";

import { motion } from "framer-motion";

import { AboutProgressItemProps } from "@/interfaces/about.interface";

export default function AboutProgressItem({
  percentage,
  title,
  delay,
}: AboutProgressItemProps) {
  return (
    <motion.div className="flex w-full flex-col gap-1">
      <span className="flex w-full justify-between">
        <span className="text-sm text-gray-800">{title}</span>
        <span className="text-sm text-blue-600">{percentage}%</span>
      </span>
      <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-[#e5e7eb]">
        <motion.div
          className="h-2.5 w-full rounded-full bg-blue-600"
          style={{ width: `${percentage}%` }}
          initial={{ width: `${0}%` }}
          animate={{ width: `${percentage}%` }}
          transition={{
            type: "spring",
            stiffness: percentage! > 80 ? 170 : 350,
            damping: 25,
            mass: 1.5,
            duration: 1,
            delay: (delay ?? 0) + 1,
          }}
        />
      </div>
    </motion.div>
  );
}
