import { getI18n } from "@/locales/server";
export default async function Page() {
  const t = await getI18n();

  return (
    <div>
      <h1>SSR / SSG</h1>
      <p>Hello: {t("hello.world2")}</p>
    </div>
  );
}
