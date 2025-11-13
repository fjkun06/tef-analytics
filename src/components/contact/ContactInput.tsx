/**
 * ContactInput
 *
 * Client component that renders form input fields for the contact form.
 * Supports both regular input fields and textarea elements with validation,
 * error states, and responsive styling. Integrates with React Hook Form
 * for registration and validation handling.
 *
 * @param {ContactInputProps} props - Component props
 * @param {boolean} [props.isRequired] - Whether the field is required (adds asterisk to label)
 * @param {boolean} [props.isTextArea] - Whether to render as textarea instead of input
 * @param {string} props.labelKey - Label text for the input field
 * @param {FieldError} [props.error] - Validation error object from React Hook Form
 * @param {UseFormRegister} props.register - React Hook Form register function
 * @param {RegisterOptions} [props.validation] - Validation rules for the field
 * @param {SchemaKey} props.schemaName - Schema field name for form registration
 * @param {...HTMLInputElement} props.inputProps - Additional HTML input attributes
 *
 * @returns {React.ReactElement} Form input/textarea with label and error display
 *
 * @example
 * ```tsx
 * <ContactInput
 *   labelKey="Name"
 *   schemaName="name"
 *   isRequired={true}
 *   register={register}
 *   error={errors.name}
 *   validation={{ required: "Name is required" }}
 * />
 * ```
 */
import React from "react";

import { ContactInputProps } from "@/interfaces/contact.interface";

export default function ContactInput({
  isRequired,
  isTextArea,
  labelKey,
  error,
  register,
  validation,
  schemaName,
  ...inputProps
}: ContactInputProps) {
  const styles = error
    ? " border border-red-500 bg-gray-700 px-3 transition-all ease-in-out py-[10px] text-base text-white placeholder-gray-400 caret-red-500 focus:outline-red-500 dark:border-red-500 dark:bg-gray-50 dark:text-gray-900 dark:caret-red-500 dark:focus:outline-red-500"
    : " border border-gray-600 bg-gray-700 px-3 transition-all ease-in-out py-[10px] text-base text-white placeholder-gray-400 caret-gray-400 focus:outline-blue-500 dark:border-gray-600 dark:bg-gray-50 dark:text-gray-900 dark:caret-slate-900 dark:focus:outline-slate-900";
  return (
    <label
      htmlFor={`input-${labelKey}`}
      className="flex w-full max-w-[362px] flex-col gap-px *:text-[15px] max-[400px]:w-full"
    >
      <span className="block text-sm font-semibold text-white capitalize dark:text-gray-700">
        {`${labelKey}${isRequired ? " *" : ""}`}
      </span>

      {isTextArea ? (
        <textarea
          id="Notes"
          className={`w-full resize-y border shadow-sm sm:text-sm${styles}`}
          rows={4}
          {...register(schemaName, validation)}
        />
      ) : (
        <input
          type="text"
          id={`input-${labelKey}`}
          className={`block h-11 w-full${styles}`}
          {...register(schemaName, validation)}
          {...inputProps}
        />
      )}
      {error && <span className="mt-1 text-xs! text-red-500">{error.message}</span>}
    </label>
  );
}
