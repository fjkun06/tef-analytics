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
  headingKey,
}: ContactSectionContainerProps): Promise<React.ReactElement> {
  const t = await getScopedI18n("contact");
  const t2 = (key: any) => t(key);

  return (
    <div className="relative flex w-full overflow-hidden rounded-2xl shadow-[0_5px_20px_#18204833] backdrop-blur-lg max-md:shadow-[0_5px_20px_#18204812]">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.3) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="z-1 flex w-full flex-col items-start gap-5 p-6 sm:p-8">
        <BasicHeading text={t2(headingKey)} large />
        <div className="flex w-full flex-col items-start gap-4 max-[430px]:gap-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContactSectionContainer;
