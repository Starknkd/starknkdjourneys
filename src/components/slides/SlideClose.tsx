import SlideShell from "@/components/SlideShell";
import FingerprintOverlay from "@/components/FingerprintOverlay";
import { SlideContent, SlideItem } from "@/components/SlideContent";

const SlideClose = () => (
  <SlideShell slideKey={12}>
    <FingerprintOverlay />
    <SlideContent className="text-center">
      <SlideItem>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
          STARK <span className="text-primary">NKD</span>
        </h2>
      </SlideItem>
      <SlideItem>
        <p className="mt-8 text-lg text-muted-foreground tracking-widest uppercase">
          {/* Contact / CTA placeholder */}
        </p>
      </SlideItem>
    </SlideContent>
  </SlideShell>
);

export default SlideClose;
