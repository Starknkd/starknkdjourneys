import SlideShell from "@/components/SlideShell";
import FingerprintOverlay from "@/components/FingerprintOverlay";
import { SlideContent, SlideItem } from "@/components/SlideContent";

const SlideTitle = () => (
  <SlideShell slideKey={0}>
    <FingerprintOverlay />
    <SlideContent className="text-center">
      <SlideItem>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground">
          STARK <span className="text-primary">NKD</span>
        </h1>
      </SlideItem>
      <SlideItem>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground tracking-widest uppercase">
          Human Performance
        </p>
      </SlideItem>
    </SlideContent>
  </SlideShell>
);

export default SlideTitle;
