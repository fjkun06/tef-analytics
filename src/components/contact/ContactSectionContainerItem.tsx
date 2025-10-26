import React from "react";

import ContactIconBubble from "./ContactIconBubble";
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
    <div className="max-[430px]: max-[430px]: flex w-full items-center gap-4 max-[430px]:flex-col max-[430px]:items-center max-[430px]:justify-center max-[430px]:gap-2">
      <ContactIconBubble icon={icon} />
      <p className="w-full text-sm text-gray-600 max-[430px]:text-center sm:text-lg">
        {t2(descriptionKey)}
      </p>
    </div>
  );
}

export default ContactSectionContainerItem;
