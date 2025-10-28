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
            delay: delay! + 1,
          }}
        />
      </div>
    </motion.div>
  );
}
