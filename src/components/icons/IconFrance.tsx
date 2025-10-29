"use client";

import React from "react";

import { IconProps } from "@/interfaces/icons.interface";

export default function IconFrance({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icons-fr"
      viewBox="0 0 640 480"
      className={className}
    >
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#000091" d="M0 0h213.3v480H0z" />
      <path fill="#e1000f" d="M426.7 0H640v480H426.7z" />
    </svg>
  );
}
