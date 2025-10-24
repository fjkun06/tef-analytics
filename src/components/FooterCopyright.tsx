import React from "react";

import { FooterCopyrightProps } from "@/interfaces/footer.interface";
import { getScopedI18n } from "@/locales/server";

export default async function FooterCopyright({
  appName,
  year,
}: FooterCopyrightProps): Promise<React.ReactElement> {
  const t = await getScopedI18n("footer.copyright");
  return (
    <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <span className="block sm:inline">{t("allRightsReserved")}</span>
        </p>
        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400">
          &copy; {year} {appName}
        </p>
      </div>
    </div>
  );
}
