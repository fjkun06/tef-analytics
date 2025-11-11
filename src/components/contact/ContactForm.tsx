"use client";
import React, { useEffect } from "react";

import { useForm } from "react-hook-form";

import ContactInput from "./ContactInput";
import { IconSpinner } from "../icons";
import { ContactFormValues } from "@/interfaces/contact.interface";
// import { useScopedI18n } from "@/locales/client";

export default function ContactForm() {
  const defaultValues: ContactFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  // const t = useScopedI18n("contact");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading, isValid, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    defaultValues,
  });

  useEffect(() => {
    reset({
      ...defaultValues,
    });
  }, [isSubmitSuccessful]);

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data, errors);
    const zTime = 5000;
    isValid && (await new Promise((resolve) => setTimeout(resolve, zTime)));

    console.log("Delay finished, data:", data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-3 bg-red-100 p-4"
    >
      <ContactInput
        labelKey="email"
        schemaName="email"
        isRequired={true}
        error={errors.email}
        validation={{
          required: "Email is required.",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        }}
        register={register}
      />
      <ContactInput labelKey="Name" schemaName="firstName" register={register} />
      <ContactInput labelKey="Last name" schemaName="lastName" register={register} />
      <ContactInput
        labelKey="Message"
        isTextArea={true}
        isRequired={true}
        error={errors.message}
        schemaName="message"
        register={register}
        validation={{
          required: "Message is required.",
        }}
      />

      <button
        type="submit"
        disabled={isSubmitting || isLoading}
        className="flex w-max cursor-pointer gap-1 rounded-4xl border-2 border-slate-900 bg-white px-6 py-2.5 text-slate-900 transition-colors duration-300 ease-in-out hover:bg-slate-900 hover:text-white disabled:cursor-not-allowed"
      >
        {isSubmitting || isLoading ? (
          <>
            <IconSpinner />
            Submitting...
          </>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}
