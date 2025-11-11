"use client";
import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { ContactFormValues } from "@/interfaces/contact.interface";
import { useScopedI18n } from "@/locales/client";
import constants from "@/utils/constants";

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
    formState: {
      errors,
      isSubmitting,
      isLoading,
      isValid,
      isSubmitSuccessful,
      isSubmitted,
    },
  } = useForm<ContactFormValues>({
    defaultValues,
  });

  const t = useScopedI18n("contact.form");

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

  return {
    register,
    reset,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    isSubmitted,
    isLoading,
    isValid,
    isSubmitSuccessful,
    contactFormItems: constants.contactFormItems(t),
    contactFormStrings,
  };
}
