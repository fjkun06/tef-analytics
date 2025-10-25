import React from "react";

import { CookieBodyItemProps } from "@/interfaces/cookie.interface";

function CookieBodyItem({ title, description }: CookieBodyItemProps) {
  return (
    <div>
      <h3 className="font-semibold text-slate-800">{title}</h3>
      <p className="mt-1">
        {description}
        off.
      </p>
    </div>
  );
}

export default CookieBodyItem;
