import { getI18n, getScopedI18n, getCurrentLocale } from "@/locales/server";

export default async function Projects() {
  const t = await getI18n();
  const t2 = await getScopedI18n("hello");
  const currentLocale = getCurrentLocale();

  return (
    <div>
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
