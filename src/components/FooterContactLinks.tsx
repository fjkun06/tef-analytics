import React from "react";

import SocialIconLink from "./SocialIconLink";
import IconLinkedIn from "@/components/icons/IconLinkedIn";
import IconX from "@/components/icons/IconX";
import IconXing from "@/components/icons/IconXing";
import { SocialLinksProps } from "@/interfaces/footer.interface";

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
