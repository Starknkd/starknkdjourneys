import SlideShell from "@/components/SlideShell";
import FingerprintOverlay from "@/components/FingerprintOverlay";
import { SlideContent, SlideItem } from "@/components/SlideContent";
import logoWhite from "@/assets/logo-white.png";

const SlideClose = () => (
  <SlideShell slideKey={12}>
    <FingerprintOverlay />
    <SlideContent className="text-center">
      <SlideItem>
        <img
          src={logoWhite}
          alt="Stark NKD logo"
          className="mx-auto h-16 md:h-28 lg:h-36 w-auto mb-8 md:mb-10 opacity-95"
        />
      </SlideItem>
      <SlideItem>
        <p className="text-base md:text-lg text-muted-foreground tracking-[0.3em] uppercase">
          #breathetolead
        </p>
      </SlideItem>
    </SlideContent>
  </SlideShell>
);

export default SlideClose;
