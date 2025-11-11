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
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful, submitCount },
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
    if (isValid) {
      await postData(data);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    submitCount,
    contactFormItems: constants.contactFormItems(t),
    errors,
    isSubmitting,
    contactFormStrings,
    isSubmitSuccessful,
    hasErrors: errors && Object.keys(errors).length > 0,
  };
}
