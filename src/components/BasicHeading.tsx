import React from "react";

import { BasicHeadingProps } from "@/interfaces/contact.interface";

function BasicHeading({ text, large, className }: BasicHeadingProps) {
  const basicClass = "font-semibold text-slate-900";
  const finalClass = large ? `text-2xl ${basicClass}` : `text-xl ${basicClass}`;
  return <h2 className={`${finalClass} ${className}`}>{text}</h2>;
}

export default BasicHeading;
