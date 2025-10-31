import { getScopedI18n } from "@/locales/server";
import constants from "@/utils/constants";

export default async function getAboutMeController() {
  const t = await getScopedI18n("about");
  const t2 = (key: any) => t(key);
  return {
    t: t2,
    work: constants.about.work,
    school: constants.about.school,
  };
}
