import SlideShell from "@/components/SlideShell";
import FingerprintOverlay from "@/components/FingerprintOverlay";
import { SlideContent, SlideItem } from "@/components/SlideContent";

const SlideAI = () => (
  <SlideShell slideKey={5}>
    <FingerprintOverlay />
    <SlideContent>
      <SlideItem>
        <p className="text-primary text-sm tracking-widest uppercase mb-6">Intelligence</p>
      </SlideItem>
      <SlideItem>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
          {/* Content placeholder */}
        </h2>
      </SlideItem>
    </SlideContent>
  </SlideShell>
);

export default SlideAI;
