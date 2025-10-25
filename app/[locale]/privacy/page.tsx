import { LastUpdated } from "@/components";
import LegalHeading from "@/components/imprint/LegalHeading";
import PrivacyBody from "@/components/privacy/PrivacyBody";
import PrivacyFooter from "@/components/privacy/PrivacyFooter";
import PrivacyHeader from "@/components/privacy/PrivacyHeader";

export default function Privacy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-xl bg-white/80 p-8 shadow-xl backdrop-blur">
        <LegalHeading scope="privacy" />

        <div className="space-y-6 text-slate-600">
          <PrivacyHeader />
          <PrivacyBody />
          <PrivacyFooter />
          <LastUpdated />
        </div>
      </div>
    </div>
  );
}
