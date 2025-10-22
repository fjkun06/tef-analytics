import React from "react";

import Brand from "./Brand";
import SocialIconLink from "./SocialIconLink";
import IconLinkedIn from "@/components/icons/IconLinkedIn";
import IconX from "@/components/icons/IconX";
import IconXing from "@/components/icons/IconXing";
import { SocialLinksProps } from "@/interfaces/footer.interface";
import { getScopedI18n } from "@/locales/server";

const socialLinks = [
  {
    href: "#",
    label: "Code",
    icon: <IconXing className="size-6" />,
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: <IconLinkedIn className="size-6" />,
  },
  {
    href: "#",
    label: "X",
    icon: <IconX className="size-6" />,
  },
];

export default async function SocialLinks({
  className,
}: SocialLinksProps): Promise<React.ReactElement> {
  const t = await getScopedI18n("footer");
  return (
    <div className="flex flex-col items-center lg:items-start">
      <Brand />
      <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs lg:text-left dark:text-gray-400">
        {t("social.description")}
      </p>
      <ul className={className}>
        {socialLinks.map((item) => (
          <li key={item.label}>
            <SocialIconLink {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
