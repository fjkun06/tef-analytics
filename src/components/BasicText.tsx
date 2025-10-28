import React from "react";

import { BasicTextProps } from "@/interfaces/contact.interface";

function BasicText({ text, large, className }: BasicTextProps): React.ReactElement {
  return large ? (
    <p
      className={`w-full text-sm text-gray-600 max-[430px]:text-center sm:text-lg ${className}`}
    >
      {text}
    </p>
  ) : (
    <span
      className={`sp2 ${className} mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs lg:text-left dark:text-gray-400`}
    >
      {text}
    </span>
  );
}

export default BasicText;
