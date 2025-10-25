import CookieBody from "@/components/cookie/CookieBody";
import CookieFooter from "@/components/cookie/CookieFooter";
import CookieHeader from "@/components/cookie/CookieHeader";
import LastUpdated from "@/components/imprint/LastUpdated";
import LegalHeading from "@/components/imprint/LegalHeading";
import LegalPagesWrapper from "@/components/wrappers/LegalPagesWrapper";

export default function Cookies() {
  return (
    <LegalPagesWrapper>
      <LegalHeading scope="cookie" />
      <div className="space-y-6 text-slate-600">
        <CookieHeader />
        <CookieBody />
        <CookieFooter />
        <LastUpdated />
      </div>
    </LegalPagesWrapper>
  );
}
