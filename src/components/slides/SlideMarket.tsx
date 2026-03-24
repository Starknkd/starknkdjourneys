import SlideShell from "@/components/SlideShell";
import { SlideContent, SlideItem } from "@/components/SlideContent";

const SlideMarket = () => (
  <SlideShell slideKey={8}>
    <SlideContent>
      <SlideItem>
        <p className="text-stark-periwinkle text-sm tracking-[0.3em] uppercase mb-6">Market</p>
      </SlideItem>
      <SlideItem>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
          {/* Content placeholder */}
        </h2>
      </SlideItem>
    </SlideContent>
  </SlideShell>
);

export default SlideMarket;
