import PrivacyBodySection from "./PrivacyBodySection";
import { getScopedI18n } from "@/locales/server";
import constants from "@/utils/constants";

export default async function PrivacyBody() {
  const t = await getScopedI18n("privacy.middleSection");
  const t2 = (code: any) => t(code);

  return (
    <>
      {constants.privacy.bodySections.map((section) => (
        <PrivacyBodySection key={section.index} translatorCallback={t2} data={section} />
      ))}
    </>
  );
}
