import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import milfordImg from "@/assets/milford-bird.png";
import mapImg from "@/assets/world-map.png";
import hikerImg from "@/assets/hiker-journey.png";

export interface SlideJourneysRef {
  handleNext: () => boolean;
  handlePrev: () => boolean;
}

/* ─── Phase 1: Diver / title ─── */
const PhaseTitle = () => (
  <div className="absolute inset-0">
    <img
      src={milfordImg}
      alt="Milford Sound landscape with bird soaring over dramatic cliffs"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: "contrast(1.08)" }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(var(--background) / 0.22) 0%, hsl(var(--background) / 0.55) 100%)",
      }}
    />
    <div className="absolute inset-0 bg-background/20" />
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at 85% 85%, hsl(var(--background) / 0.45) 0%, transparent 50%)",
      }}
    />
     <div
      className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-8"
      style={{
        textShadow:
          "0 2px 14px hsl(var(--background) / 0.8), 0 1px 5px hsl(var(--background) / 0.6)",
      }}
    >
      <div className="flex flex-col items-center mb-8">
        <p
          className="text-stark-periwinkle tracking-[0.32em] uppercase text-base md:text-lg font-normal"
          style={{ filter: "brightness(1.15)" }}
        >
          NKD Journeys
        </p>
        <p
          className="text-stark-periwinkle tracking-[0.18em] uppercase mt-1.5 text-[0.6rem] md:text-[0.7rem] font-medium"
          style={{ filter: "brightness(1.15)" }}
        >
          Immersive audio × breathing
        </p>
      </div>
      <h2 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-foreground text-center leading-tight">
        Breathe your way<br />around the world.
      </h2>
      <p
        className="text-lg md:text-[1.7rem] mt-8 md:mt-12 text-foreground text-center leading-relaxed"
        style={{ filter: "brightness(1.05)" }}
      >
        Choose your destination.<br />Move with your breath.
      </p>
    </div>
  </div>
);

/* ─── Phase 2: Map ─── */
const PhaseMap = () => (
  <div className="absolute inset-0">
    <img
      src={mapImg}
      alt="World map showing NKD Journey destinations"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: "brightness(0.7) contrast(0.92) saturate(0.9)" }}
    />
    <div className="absolute inset-0 bg-background/30" />
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(to left, hsl(var(--background) / 0.55) 0%, hsl(var(--background) / 0.30) 32%, transparent 55%)",
      }}
    />
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(to top, hsl(var(--background) / 0.55) 0%, hsl(var(--background) / 0.25) 40%, transparent 60%)",
      }}
    />
<div className="absolute inset-x-0 top-0 z-10 px-6 pt-16 md:px-8 md:pt-24">
  <div className="max-w-xl text-center md:ml-auto md:pr-10 lg:pr-20 md:text-left">
    <h2 className="text-2xl md:text-3xl lg:text-[2.7rem] font-bold text-foreground leading-[0.95] mb-6 md:mb-8">
      Your breath now guides the journey.
    </h2>
    <div>
      <p className="text-base md:text-lg lg:text-xl text-foreground/95 font-semibold mb-4 md:mb-5">
        Choose your route.
      </p>
      <p className="text-sm md:text-lg text-foreground/80 font-medium mb-4 md:mb-6">
        Keys unlock. Locals advise. Nature beckons.
      </p>
      <p className="text-base md:text-lg mt-4">
        <span
          className="text-primary font-semibold"
          style={{
            filter: "brightness(1.25)",
            textShadow:
              "0 0 12px hsl(var(--stark-sunset) / 0.6), 0 0 28px hsl(var(--stark-sunset) / 0.3)",
          }}
        >
          Your breath moves you forward.
        </span>
      </p>
    </div>
  </div>
</div>
);

/* ─── Phase 3: Hiker narrative ─── */
const PhaseNarrative = () => (
  <div className="absolute inset-0">
    <img
      src={hikerImg}
      alt="Solo hiker walking through a dramatic mountain landscape"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: "brightness(0.7)" }}
    />
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(to right, hsl(var(--background) / 0.92) 0%, hsl(var(--background) / 0.78) 35%, hsl(var(--background) / 0.45) 70%, hsl(var(--background) / 0.2) 100%)",
      }}
    />
    <div className="relative z-10 flex items-center h-full px-6 md:px-0" style={{ paddingLeft: "max(1.5rem, 8%)" }}>
      <div
        className="max-w-2xl"
        style={{
          textShadow:
            "0 2px 10px hsl(var(--background) / 0.6), 0 1px 4px hsl(var(--background) / 0.4)",
        }}
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 md:mb-8">
          You and your breath -<br />step off the beaten track.
        </h2>
        <div className="mb-4 md:mb-6 space-y-1">
          <p className="text-base md:text-xl text-foreground font-semibold">Across landscapes.</p>
          <p className="text-base md:text-xl text-foreground font-semibold">
            Through cultures you didn't expect.
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-sm md:text-lg text-foreground">
            Into moments that catch you off guard -
          </p>
          <p className="text-sm md:text-lg text-foreground">in a good way.</p>
          <p className="text-sm md:text-lg text-foreground mt-4">It's still breathing.</p>
        </div>
        <div className="mt-4 md:mt-6">
          <p
            className="text-base md:text-xl text-stark-sunset font-semibold"
            style={{
              filter: "brightness(1.45) saturate(1.2)",
              textShadow:
                "0 0 18px hsl(var(--stark-sunset) / 0.8), 0 0 40px hsl(var(--stark-sunset) / 0.45)",
            }}
          >
            But you actually look forward to it.
          </p>
        </div>
        <div className="mt-4 md:mt-6 space-y-1">
          <p className="text-sm md:text-lg text-foreground">With your first key in hand,</p>
          <p className="text-sm md:text-lg text-foreground">you journey onward.</p>
        </div>
      </div>
    </div>
  </div>
);

const SlideJourneys = forwardRef<SlideJourneysRef>((_, ref) => {
  const [phase, setPhase] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isMobile = useIsMobile();

  useImperativeHandle(ref, () => ({
    handleNext: () => {
      if (phase < 2) {
        setPhase((p) => p + 1);
        return true;
      }
      return false;
    },
    handlePrev: () => {
      if (phase > 0) {
        setPhase((p) => p - 1);
        return true;
      }
      return false;
    },
  }));

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Mobile: render all 3 phases stacked so narrative parity is preserved
  if (isMobile) {
    return (
      <>
        <div className="slide-root relative w-full overflow-hidden bg-background">
          <PhaseTitle />
        </div>
        <div className="slide-root relative w-full overflow-hidden bg-background">
          <PhaseMap />
        </div>
        <div className="slide-root relative w-full overflow-hidden bg-background">
          <PhaseNarrative />
        </div>
      </>
    );
  }

  // Desktop: animated phase transitions
  return (
    <div className="slide-root absolute inset-0 w-screen h-screen overflow-hidden bg-background z-10">
      <AnimatePresence mode="wait">
        {phase === 0 && (
          <motion.div
            key="journey-title"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <PhaseTitle />
          </motion.div>
        )}
        {phase === 1 && (
          <motion.div
            key="journey-map"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <PhaseMap />
          </motion.div>
        )}
        {phase === 2 && (
          <motion.div
            key="journey-narrative"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <PhaseNarrative />
          </motion.div>
        )}
      </AnimatePresence>
         </div>
  </div>
</div>
</div>
);

SlideJourneys.displayName = "SlideJourneys";

export default SlideJourneys;
