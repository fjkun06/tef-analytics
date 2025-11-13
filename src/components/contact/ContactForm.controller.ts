/**
 * useContactFormController
 *
 * Custom hook that manages contact form state, validation, submission, and user feedback.
 * Handles form registration with React Hook Form, processes form submission via API,
 * displays success/error toasts, and redirects users after successful submission.
 * Provides translated strings and form configuration data.
 *
 * @returns {Object} Hook result object containing:
 *   - register: React Hook Form register function for field registration
 *   - handleSubmit: Form submission handler from React Hook Form
 *   - onSubmit: Async function that processes form data submission
 *   - contactFormItems: Array of form field configurations from constants
 *   - errors: Form validation errors object
 *   - isSubmitting: Boolean indicating if form is currently being submitted
 *   - contactFormStrings: Object containing translated UI strings
 *   - isSubmitSuccessful: Boolean indicating if form was submitted successfully
 *   - hasErrors: Boolean indicating if there are any validation errors
 *
 * @example
 * ```tsx
 * const {
 *   register,
 *   handleSubmit,
 *   onSubmit,
 *   errors,
 *   isSubmitting,
 *   contactFormStrings
 * } = useContactFormController();
 * ```
 */
"use client";
import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { ContactFormValues } from "@/interfaces/contact.interface";
import { useScopedI18n } from "@/locales/client";
import constants from "@/utils/constants";
import postData from "@/utils/sampleApi";

export default function useContactFormController() {
  const defaultValues: ContactFormValues = {
    name: "",
    email: "",
    message: "",
    tel: "",
    subject: "",
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    defaultValues,
  });

  const t = useScopedI18n("contact.form");
  const router = useRouter();

  const contactFormStrings = {
    submitting: t("submitting"),
    submit: t("submit"),
    address: t("addressOne"),
    contact: t("extraOne"),
    privacy: t("extraTwo"),
    requiredFieldsError: t("requiredFieldsError"),
    submitSuccessMessage: t("submitSuccessMessage"),
    submitErrorMessage: t("submitErrorMessage"),
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      toast.success(contactFormStrings.submitSuccessMessage, {
        duration: 6000,
        position: "bottom-center",
        removeDelay: 2000,
        className:
          "contact-form-success-toast lg:text-base lg:mb-[35vh] mb-[45vh] border-[2px] border-green-600 text-sm",
        style: {
          boxShadow: `
                          41px 41px 82px #e5e7eb,
                          -41px -41px 82px #ffffff
                      `,
        },
      });
      setTimeout(() => router.push("/"), 6000);
    }

    reset({
      ...defaultValues,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmit = async (data: ContactFormValues) => {
    await postData(data);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    contactFormItems: constants.contactFormItems(t),
    errors,
    isSubmitting,
    contactFormStrings,
    isSubmitSuccessful,
    hasErrors: errors && Object.keys(errors).length > 0,
  };
}
