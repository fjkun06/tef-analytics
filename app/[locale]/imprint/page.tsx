import { LegalPagesWrapper } from "@/components";
import ImpressumContentContainer from "@/components/imprint/ImpressumContentContainer";
import ImpressumSectionOne from "@/components/imprint/ImpressumSectionOne";
import ImpressumSectionThree from "@/components/imprint/ImpressumSectionThree";
import ImpressumSectionTwo from "@/components/imprint/ImpressumSectionTwo";
import LastUpdated from "@/components/imprint/LastUpdated";
import LegalHeading from "@/components/imprint/LegalHeading";

export default function Imprint() {
  return (
    <LegalPagesWrapper>
      <LegalHeading scope="imprint" />
      <div className="space-y-6 text-slate-600">
        <ImpressumSectionOne />
        <ImpressumSectionTwo />
        <ImpressumSectionThree />
        <ImpressumContentContainer />
        <LastUpdated />
      </div>
    </LegalPagesWrapper>
  );
}
