import { LastUpdated, LegalPagesWrapper } from "@/components";
import LegalHeading from "@/components/imprint/LegalHeading";
import PrivacyBody from "@/components/privacy/PrivacyBody";
import PrivacyFooter from "@/components/privacy/PrivacyFooter";
import PrivacyHeader from "@/components/privacy/PrivacyHeader";

export default function Privacy() {
  return (
    <LegalPagesWrapper>
      <LegalHeading scope="privacy" />
      <div className="space-y-6 text-slate-600">
        <PrivacyHeader />
        <PrivacyBody />
        <PrivacyFooter />
        <LastUpdated />
      </div>
    </LegalPagesWrapper>
  );
}
