import SlideShell from "@/components/SlideShell";
import FingerprintOverlay from "@/components/FingerprintOverlay";
import { SlideContent, SlideItem } from "@/components/SlideContent";
import logoWhite from "@/assets/logo-white.png";
import diverCover from "@/assets/diver-cover.jpg";

const SlideClose = () => (
  <SlideShell slideKey={12}>
    {/* Subtle background presence so the final slide feels deliberate, not blank */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <img
        src={diverCover}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        style={{ filter: "brightness(0.55) contrast(1.05) saturate(0.9)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, hsl(var(--background) / 0.55) 0%, hsl(var(--background) / 0.92) 75%, hsl(var(--background)) 100%)",
        }}
      />
    </div>
    <FingerprintOverlay />
    <SlideContent className="text-center relative z-10">
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
