/**
 * ContactSectionContainerItem
 *
 * Async server component that renders a single contact item with icon and description.
 * Displays an icon bubble and text content side-by-side (or stacked on mobile).
 * Used as individual items within ContactSectionContainer for contact information lists.
 *
 * @param {ContactSectionContainerItemProps} props - Component props
 * @param {React.ReactNode} props.icon - SVG or icon component to display
 * @param {string} props.descriptionKey - Translation key for the description text
 *
 * @returns {Promise<React.ReactElement>} Contact item with icon and translated description
 */
import React from "react";

import ContactIconBubble from "./ContactIconBubble";
import BasicText from "../BasicText";
import { ContactSectionContainerItemProps } from "@/interfaces/contact.interface";
import { getScopedI18n } from "@/locales/server";

//14
async function ContactSectionContainerItem({
  icon,
  descriptionKey,
}: ContactSectionContainerItemProps): Promise<React.ReactElement> {
  const t = await getScopedI18n("contact");
  const t2 = (key: any) => t(key);
  return (
    <div className="flex w-full items-center gap-4 max-[430px]:flex-col max-[430px]:items-start max-[430px]:justify-center max-[430px]:gap-2">
      <ContactIconBubble icon={icon} />
      <BasicText text={t2(descriptionKey)} large className="max-[430px]:text-start" />
    </div>
  );
}

export default ContactSectionContainerItem;
