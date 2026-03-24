import SlideShell from "@/components/SlideShell";
import { SlideContent, SlideItem } from "@/components/SlideContent";
import mountainImg from "@/assets/mountain.jpg";

const SlideVision = () => (
  <SlideShell slideKey={11} backgroundImage={mountainImg}>
    <SlideContent>
      <SlideItem>
        <p className="text-primary text-sm tracking-widest uppercase mb-6">Vision</p>
      </SlideItem>
      <SlideItem>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
          {/* Content placeholder */}
        </h2>
      </SlideItem>
    </SlideContent>
  </SlideShell>
);

export default SlideVision;
