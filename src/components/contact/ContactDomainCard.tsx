/**
 * ContactDomainCard
 *
 * Async server component that renders a domain/service card with icon, heading, and description.
 * Features a gradient glassmorphic background with backdrop blur effect.
 * Used to showcase different service domains or expertise areas on contact pages.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - SVG or icon component to display
 *
 * @returns {Promise<React.ReactElement>} Card with icon, heading, and description with gradient background
 */
import React from "react";

import BasicHeading from "../BasicHeading";
import BasicText from "../BasicText";
import ContactIconBubble from "./ContactIconBubble";
import { getScopedI18n } from "@/locales/server";

async function ContactDomainCard({
  icon,
  titleKey,
  descriptionKey,
}: {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}): Promise<React.ReactElement> {
  const t = await getScopedI18n("contact");
  const t2 = (key: any) => t(key);
  return (
    <div className="flex w-full flex-col items-start gap-4 rounded-xl p-6 shadow-[0_5px_20px_#18204833] backdrop-blur-lg md:max-w-[384px] md:min-w-1/3">
      <ContactIconBubble icon={icon} />
      <div className="flex flex-col gap-1">
        <BasicHeading text={t2(titleKey)} className="capitalize" />
        <BasicText className="!m-0 !text-left !text-gray-500" text={t2(descriptionKey)} />
      </div>
    </div>
  );
}

export default ContactDomainCard;
