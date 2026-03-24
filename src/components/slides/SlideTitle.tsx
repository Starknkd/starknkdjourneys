import SlideShell from "@/components/SlideShell";
import FingerprintOverlay from "@/components/FingerprintOverlay";
import { SlideContent, SlideItem } from "@/components/SlideContent";
import logoWhite from "@/assets/logo-white.png";

const SlideTitle = () => (
  <SlideShell slideKey={0}>
    <FingerprintOverlay />
    <SlideContent className="text-center">
      <SlideItem>
        <img
          src={logoWhite}
          alt="Stark NKD"
          className="mx-auto h-24 md:h-32 lg:h-40 w-auto mb-10 opacity-95"
        />
      </SlideItem>
      <SlideItem>
        <p className="text-lg md:text-xl text-muted-foreground tracking-[0.35em] uppercase">
          Calm Under Pressure
        </p>
      </SlideItem>
    </SlideContent>
  </SlideShell>
);

export default SlideTitle;
