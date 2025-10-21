import React from "react";

import Link from "next/link";

import Logo from "./layouts/Logo";
import strings from "@/utils/strings";

const Brand: React.FC = () => (
  <div className="flex items-center gap-4">
    <Link href="/" className="flex items-center gap-2">
      <Logo />
      <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        {strings.appName}
      </span>
    </Link>
  </div>
);

export default Brand;
