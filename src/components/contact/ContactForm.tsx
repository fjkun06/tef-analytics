"use client";
import ContactInput from "./ContactInput";
import { IconSpinner } from "../icons";
import useContactFormController from "./ContactForm.controller";
import { SchemaKey } from "@/interfaces/contact.interface";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    contactFormItems,
    onSubmit,
    errors,
    isSubmitting,
    isLoading,
    contactFormStrings,
  } = useContactFormController();

  console.dir(contactFormItems);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[400px] flex-col gap-3 rounded bg-red-100 p-4"
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
        disabled={isSubmitting || isLoading}
        className="flex w-max cursor-pointer gap-1 rounded-4xl border-2 border-slate-900 bg-white px-6 py-2 text-slate-900 transition-colors duration-300 ease-in-out hover:bg-slate-900 hover:text-white disabled:cursor-not-allowed hover:[&>svg]:text-white"
      >
        {isSubmitting || isLoading ? (
          <>
            <IconSpinner />
            {contactFormStrings.submitting}
          </>
        ) : (
          contactFormStrings.submit
        )}
      </button>
    </form>
  );
}
