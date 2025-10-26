import React from "react";

import { ContactSectionContainerProps } from "@/interfaces/contact.interface";
import { getScopedI18n } from "@/locales/server";
//15
async function ContactSectionContainer({
  children,
  heading,
}: ContactSectionContainerProps) {
  const t = await getScopedI18n("contact");
  const t2 = (key: any) => t(key);

  return (
    <div className="flex w-full flex-col items-start gap-5 rounded-2xl border border-white/30 bg-gradient-to-br from-[#2563eb1a] via-[#6366f11a] to-[#14b8a61a] p-4 shadow-md backdrop-blur-sm sm:p-8">
      <h2 className="text-2xl font-semibold text-slate-900">{t2(heading)}</h2>
      <div className="flex w-full flex-col items-start gap-4">{children}</div>
    </div>
  );
}

export default ContactSectionContainer;
