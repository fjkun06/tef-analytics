/**
 * ContactSectionContainer
 *
 * Async server component that renders a section container with heading and children.
 * Features a gradient glassmorphic background with backdrop blur effect.
 * Used to organize contact information into logical sections with consistent styling.
 *
 * @param {ContactSectionContainerProps} props - Component props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.heading - Translation key for section heading
 *
 * @returns {Promise<React.ReactElement>} Section container with gradient background and heading
 */
import React from "react";

import BasicHeading from "../BasicHeading";
import { ContactSectionContainerProps } from "@/interfaces/contact.interface";
import { getScopedI18n } from "@/locales/server";

async function ContactSectionContainer({
  children,
  heading,
}: ContactSectionContainerProps): Promise<React.ReactElement> {
  const t = await getScopedI18n("contact");
  const t2 = (key: any) => t(key);

  return (
    <div className="flex w-full flex-col items-start gap-5 rounded-2xl bg-gradient-to-br from-[#2563eb1a] via-[#6366f11a] to-[#14b8a61a] p-4 shadow-lg backdrop-blur-lg sm:p-8">
      <BasicHeading text={t2(heading)} large />
      <div className="flex w-full flex-col items-start gap-4">{children}</div>
    </div>
  );
}

export default ContactSectionContainer;
