import React from "react";

import Link from "next/link";

import { FooterCopyrightProps } from "@/interfaces/footer.interface";
import { getScopedI18n } from "@/locales/server";

const FooterCopyright: React.FC<FooterCopyrightProps> = async ({ appName, year }) => {
  const t = await getScopedI18n("footer.copyright");
  return (
    <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <span className="block sm:inline">{t("allRightsReserved")}</span>
          <Link
            className="inline-block pr-2 text-teal-600 underline transition hover:text-teal-600/75 sm:pl-2 dark:text-teal-500 dark:hover:text-teal-500/75"
            href="#"
          >
            {t("terms")}
          </Link>
          <span>&middot;</span>
          <Link
            className="inline-block pl-2 text-teal-600 underline transition hover:text-teal-600/75 dark:text-teal-500 dark:hover:text-teal-500/75"
            href="#"
          >
            {t("privacy")}
          </Link>
        </p>
        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400">
          &copy; {year} {appName}
        </p>
      </div>
    </div>
  );
};

export default FooterCopyright;
