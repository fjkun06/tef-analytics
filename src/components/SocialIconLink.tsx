import React from "react";

import Link from "next/link";

import type { SocialIconLinkProps } from "@/interfaces/icons.interface";

function SocialIconLink({ href, label, icon }: SocialIconLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-500 transition hover:text-teal-600 dark:text-gray-500 dark:hover:text-teal-600"
      rel="noreferrer"
      target="_blank"
      passHref
    >
      <span className="sr-only">{label}</span>
      {icon}
    </Link>
  );
}

export default SocialIconLink;
