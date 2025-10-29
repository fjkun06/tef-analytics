"use client";

import React from "react";

import { IconProps } from "@/interfaces/icons.interface";

export default function IconDeutschland({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-de"
      viewBox="0 0 640 480"
      className={className}
    >
      <path fill="#fc0" d="M0 320h640v160H0z" />
      <path fill="#000001" d="M0 0h640v160H0z" />
      <path fill="red" d="M0 160h640v160H0z" />
    </svg>
  );
}
