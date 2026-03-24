import SlideShell from "@/components/SlideShell";
import { SlideContent, SlideItem } from "@/components/SlideContent";

const SlideTeam = () => (
  <SlideShell slideKey={10}>
    <SlideContent>
      <SlideItem>
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6">Team</p>
      </SlideItem>
      <SlideItem>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
          {/* Content placeholder */}
        </h2>
      </SlideItem>
    </SlideContent>
  </SlideShell>
);

export default SlideTeam;
