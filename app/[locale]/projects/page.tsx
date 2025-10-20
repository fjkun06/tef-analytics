import { Metadata } from "next";

import Client from "@/components/Client";
import ClientTranslationProvider from "@/components/ClientTranslationProvider";
import { getI18n, getScopedI18n, getCurrentLocale } from "@/locales/server";

export const metadata: Metadata = {
  title: "Tef Analytics | Projects",
  description: "",
};

export default async function Projects({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = await getI18n();
  const t2 = await getScopedI18n("hello");
  const currentLocale = getCurrentLocale();

  return (
    <div>
      <ClientTranslationProvider locale={locale}>
        <Client />
      </ClientTranslationProvider>
      <h1>SSR / SSG</h1>
      <p>
        Current locale:
        <span>{currentLocale}</span>
      </p>
      <p>Hello: {t("hello.world2")}</p>
      <p>Scoped hello: {t2("world", { param: "Scoped Paul" })}</p>
    </div>
  );
}
