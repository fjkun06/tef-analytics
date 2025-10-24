import ImpressumContentContainer from "@/components/imprint/ImpressumContentContainer";
import ImpressumSectionOne from "@/components/imprint/ImpressumSectionOne";
import ImpressumSectionThree from "@/components/imprint/ImpressumSectionThree";
import ImpressumSectionTwo from "@/components/imprint/ImpressumSectionTwo";
import LastUpdated from "@/components/imprint/LastUpdated";
import LegalHeading from "@/components/imprint/LegalHeading";

export default function Imprint() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-xl bg-white/80 p-8 shadow-xl backdrop-blur">
        <LegalHeading scope="imprint" />
        <div className="space-y-6 text-slate-600">
          <ImpressumSectionOne />
          <ImpressumSectionTwo />
          <ImpressumSectionThree />
          <ImpressumContentContainer />
          <LastUpdated />
        </div>
      </div>
    </div>
  );
}
