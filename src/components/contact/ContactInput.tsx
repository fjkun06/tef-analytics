import React from "react";

import { ContactInputProps } from "@/interfaces/contact.interface";

export default function ContactInput({
  isRequired,
  isTextArea,
  labelKey,
  ...inputProps
}: ContactInputProps) {
  const styles =
    " border border-gray-600 bg-gray-700 px-3 py-[10px] text-base text-white placeholder-gray-400 caret-gray-400 focus:outline-blue-500 dark:border-gray-600 dark:bg-gray-50 dark:text-gray-900 dark:caret-slate-900 dark:focus:outline-slate-900";
  return (
    <label
      htmlFor={`input-${labelKey}`}
      className="flex w-full max-w-[362px] flex-col gap-px max-[400px]:w-full [&>*]:text-[15px]"
    >
      <span className="block text-sm font-semibold text-white capitalize dark:text-gray-900">
        {`${labelKey}${isRequired ? " *" : ""}`}
      </span>

      {isTextArea ? (
        <textarea
          id="Notes"
          className={`w-full resize-y border shadow-sm sm:text-sm${styles}`}
          rows={4}
        />
      ) : (
        <input
          type="text"
          id={`input-${labelKey}`}
          className={`block h-11 w-full${styles}`}
          {...inputProps}
        />
      )}
    </label>
  );
}
