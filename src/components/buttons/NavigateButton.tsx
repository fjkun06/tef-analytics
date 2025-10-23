import React from "react";

import Link from "next/link";

import { NavigateButtonProps } from "@/interfaces/buttons.interface";

function NavigateButton({ label, route }: NavigateButtonProps) {
  return (
    <Link
      className="bg-primary hover:bg-primary-600 focus-visible:outline-primary transform rounded-md bg-gradient-to-br from-purple-600 to-blue-500 px-4 py-2 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-95 sm:px-6 sm:py-3 sm:text-sm"
      href={route}
    >
      {label}
    </Link>
  );
}

export default NavigateButton;
