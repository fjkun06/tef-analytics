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
    <div className="relative flex w-full overflow-hidden rounded-xl shadow-[0_5px_20px_#18204833] backdrop-blur-lg transition-transform duration-200 ease-linear max-md:shadow-[0_5px_20px_#18204812] md:w-1/3 md:max-w-[384px] md:hover:scale-110">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.3) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="z-1 flex h-full w-full flex-col items-start gap-4 p-6">
        <ContactIconBubble icon={icon} />
        <div className="flex flex-col gap-1">
          <BasicHeading text={t2(titleKey)} className="capitalize" />
          <BasicText
            className="!m-0 !text-left !text-gray-500"
            text={t2(descriptionKey)}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactDomainCard;
