import SlideShell from "@/components/SlideShell";
import { SlideContent, SlideItem } from "@/components/SlideContent";

const SlideProduct = () => (
  <SlideShell slideKey={4}>
    <SlideContent>
      <SlideItem>
        <p className="text-accent text-sm tracking-[0.3em] uppercase mb-6">Product</p>
      </SlideItem>
      <SlideItem>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
          {/* Content placeholder */}
        </h2>
      </SlideItem>
    </SlideContent>
  </SlideShell>
);

export default SlideProduct;
