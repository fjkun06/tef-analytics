import React from "react";

import SocialIconLink from "../SocialIconLink";
import IconLinkedIn from "@/components/icons/IconLinkedIn";
import IconX from "@/components/icons/IconX";
import IconXing from "@/components/icons/IconXing";
import { SocialLinksProps } from "@/interfaces/footer.interface";

const socialLinks = [
  {
    href: "https://github.com/thefranckt",
    label: "Code",
    icon: <IconXing className="size-6" />,
  },
  {
    href: "https://www.linkedin.com/in/franck-tankouan-2a9a2ab3/",
    label: "LinkedIn",
    icon: <IconLinkedIn className="size-6" />,
  },
  {
    href: "https://www.xing.com/profile/Franck_Tankouan/web_profiles",
    label: "X",
    icon: <IconX className="size-6" />,
  },
];
function FooterContactLinks({ className }: SocialLinksProps) {
  return (
    <ul className={className}>
      {socialLinks.map((item) => (
        <li key={item.label}>
          <SocialIconLink {...item} />
        </li>
      ))}
    </ul>
  );
}

export default FooterContactLinks;
