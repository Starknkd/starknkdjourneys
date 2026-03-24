import SlideShell from "@/components/SlideShell";
import { SlideContent, SlideItem } from "@/components/SlideContent";
import coastImg from "@/assets/coast.jpg";

const SlideJourneys = () => (
  <SlideShell slideKey={6} backgroundImage={coastImg}>
    <SlideContent>
      <SlideItem>
        <p className="text-primary text-sm tracking-widest uppercase mb-6">Journeys</p>
      </SlideItem>
      <SlideItem>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
          {/* Content placeholder */}
        </h2>
      </SlideItem>
    </SlideContent>
  </SlideShell>
);

export default SlideJourneys;
