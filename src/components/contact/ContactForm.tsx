/**
 * ContactForm
 *
 * Client component that renders a complete contact form with address information
 * and form fields. Uses React Hook Form for validation and submission handling,
 * displays toast notifications for success/error states, and includes contact
 * information alongside the form inputs.
 *
 * @returns {React.ReactElement} Complete contact form with address info and input fields
 *
 * @example
 * ```tsx
 * <ContactForm />
 * ```
 */
"use client";
import { Toaster } from "react-hot-toast";

import ContactInput from "./ContactInput";
import { IconSpinner } from "../icons";
import useContactFormController from "./ContactForm.controller";
import { SchemaKey } from "@/interfaces/contact.interface";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    onSubmit,
    contactFormItems,
    errors,
    isSubmitting,
    contactFormStrings,
    isSubmitSuccessful,
    hasErrors,
  } = useContactFormController();

  return (
    <div className="bg-reds-500 flex w-full justify-center gap-5 max-lg:flex-col max-lg:items-center lg:gap-30">
      <Toaster />

      <div className="flex h-max max-w-[362px] flex-col items-start gap-6 max-lg:w-full max-lg:flex-wrap lg:items-start dark:*:text-gray-700">
        <p className="flex flex-col items-start gap-1 max-[360px]:*:text-sm">
          <span className="text-base! font-bold text-wrap lg:text-lg">
            {contactFormStrings.address}
          </span>
          <span className="">Königstrasse 30</span>
          <span className="">46149 Oberhausen</span>
          <span className="">
            Telefon: <span className="font-extrabold">015772116756</span>
          </span>
        </p>

        <p className="flex flex-col items-start gap-2 max-[360px]:*:text-sm">
          <span className="text-base font-bold text-wrap lg:text-xl">
            E-Mail:
            <a href="mailto:francktankouan@yahoo.de" className="underline">
              francktankouan@yahoo.de
            </a>
          </span>
          <span className="">{contactFormStrings.contact}</span>
          <span className="">{contactFormStrings.privacy}</span>
        </p>

        {hasErrors && (
          <p className="border-2 border-orange-500 p-2 text-red-500! max-[360px]:*:text-sm">
            {contactFormStrings.requiredFieldsError}
          </p>
        )}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-reds-100 flex w-full max-w-[362px] flex-col items-center gap-3 rounded"
      >
        {contactFormItems.map((item) => (
          <ContactInput
            key={item.labelKey}
            labelKey={item.labelKey}
            schemaName={item.schemaName as SchemaKey}
            isRequired={item.isRequired ?? false}
            isTextArea={item.isTextArea ?? false}
            error={errors[item.schemaName as SchemaKey]}
            validation={item.validation ?? {}}
            register={register}
          />
        ))}

        <button
          type="submit"
          disabled={isSubmitting || isSubmitSuccessful}
          className="mt-3 flex w-max cursor-pointer gap-1 rounded-4xl border-2 border-slate-700 bg-white px-6 py-2 text-slate-700 transition-colors duration-300 ease-in-out hover:bg-slate-700 hover:text-white disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-700 hover:[&>svg]:text-white disabled:hover:[&>svg]:text-slate-700"
        >
          {isSubmitting ? (
            <>
              <IconSpinner />
              {contactFormStrings.submitting}
            </>
          ) : (
            contactFormStrings.submit
          )}
        </button>
      </form>
    </div>
  );
}
