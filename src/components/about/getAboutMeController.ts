import { getScopedI18n } from "@/locales/server";

export default async function getAboutMeController() {
  const t = await getScopedI18n("about");
  const t2 = (key: any) => t(key);
  return {
    t: t2,
  };
}
