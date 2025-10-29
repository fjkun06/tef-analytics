import React from "react";

import { IconProps } from "@/interfaces/icons.interface";

export default function IconFlash({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      ></path>
    </svg>
  );
}
