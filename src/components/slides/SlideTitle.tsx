import SlideShell from "@/components/SlideShell";
import FingerprintOverlay from "@/components/FingerprintOverlay";
import { SlideContent, SlideItem } from "@/components/SlideContent";
import logoWhite from "@/assets/logo-white.png";
import diverCover from "@/assets/diver-cover.jpg";

const SlideTitle = () => (
  <SlideShell slideKey={0}>
    {/* Diver background — ultra-low opacity, visible mainly at edges */}
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={diverCover}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: 0.07,
          maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, transparent 30%, black 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, transparent 30%, black 80%)",
        }}
      />
    </div>
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
        <p className="text-lg md:text-xl text-muted-foreground tracking-[0.25em] uppercase leading-relaxed">
          Journey into the unknown.
          <br />
          Train your way back to control.
        </p>
      </SlideItem>
    </SlideContent>
  </SlideShell>
);

export default SlideTitle;
