import SlideShell from "@/components/SlideShell";
import { SlideContent, SlideItem } from "@/components/SlideContent";
import labImg from "@/assets/lab.jpg";

const SlideLab = () => (
  <SlideShell slideKey={7} backgroundImage={labImg}>
    <SlideContent>
      <SlideItem>
        <p className="text-primary text-sm tracking-widest uppercase mb-6">The Lab</p>
      </SlideItem>
      <SlideItem>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
          {/* Content placeholder */}
        </h2>
      </SlideItem>
    </SlideContent>
  </SlideShell>
);

export default SlideLab;
