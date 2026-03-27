import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import milfordImg from "@/assets/milford-bird.png";
import mapImg from "@/assets/world-map.jpg";
import climberImg from "@/assets/climber-journey.jpg";

/* ─── narrative lines for Part 3 ─── */
const narrativeLines = [
  { text: "You begin at the southern tip of New Zealand.", delay: 0 },
  { text: "Every breath moves you forward.", delay: 1.8 },
  { text: "", delay: 3.8 },
  { text: "The ocean is alive.", delay: 5.0 },
  { text: "You hear whale calls in the distance.", delay: 7.0 },
  { text: "A kiwi moves in the dark.", delay: 9.0 },
  { text: "", delay: 11.0 },
  { text: "You meet Friday.", delay: 12.5 },
  { text: "He's been behind the bar on Stewart Island for 30 years.", delay: 14.5 },
  { text: "", delay: 17.0 },
  { text: "He gives you advice you didn't know you needed.", delay: 18.5, glow: "subtle" },
  { text: "", delay: 21.0 },
  { text: "This is your daily practice.", delay: 22.5, glow: "medium" },
  { text: "", delay: 25.0 },
  { text: "The more you return —", delay: 26.5 },
  { text: "the further you travel.", delay: 28.5, glow: "strong", accent: "orange" },
  { text: "", delay: 31.0 },
  { text: "The best advice — at your fingertips", delay: 32.5, accent: "final" },
];

/* ─── ambient dot nodes (dimmer, secondary) ─── */
const ambientDots = [
  { cx: 780, cy: 280, delay: 0 },
  { cx: 620, cy: 350, delay: 1.5 },
  { cx: 350, cy: 420, delay: 3 },
  { cx: 150, cy: 520, delay: 2 },
  { cx: 880, cy: 480, delay: 4 },
];

/* ─── main component ─── */
export interface SlideJourneysRef {
  handleNext: () => boolean;
  handlePrev: () => boolean;
}

const SlideJourneys = forwardRef<SlideJourneysRef>((_, ref) => {
  const [phase, setPhase] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useImperativeHandle(ref, () => ({
    handleNext: () => {
      if (phase < 2) { setPhase(p => p + 1); return true; }
      return false;
    },
    handlePrev: () => {
      if (phase > 0) { setPhase(p => p - 1); return true; }
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

  const getLineClassName = (line: typeof narrativeLines[number]) => {
    const base = "text-lg md:text-xl leading-relaxed";

    if (line.accent === "final") {
      return `${base} text-stark-sunset font-semibold text-xl md:text-2xl mt-8`;
    }
    if (line.accent === "orange") {
      return `${base} text-stark-sunset font-semibold text-xl md:text-2xl`;
    }
    return `${base} text-foreground/90`;
  };

  const getLineStyle = (line: typeof narrativeLines[number]): React.CSSProperties => {
    if (line.accent === "final") {
      return { textShadow: "0 0 20px hsl(var(--stark-sunset) / 0.5), 0 0 40px hsl(var(--stark-sunset) / 0.2)" };
    }
    if (line.accent === "orange") {
      return { textShadow: "0 0 16px hsl(var(--stark-sunset) / 0.4), 0 0 32px hsl(var(--stark-sunset) / 0.15)" };
    }
    if (line.glow === "medium") {
      return { textShadow: "0 0 12px hsl(var(--foreground) / 0.2)" };
    }
    if (line.glow === "subtle") {
      return { textShadow: "0 0 8px hsl(var(--foreground) / 0.12)" };
    }
    return {};
  };

  return (
    <div className="absolute inset-0 w-screen h-screen overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        {/* ═══════ PART 1 — DIVER TITLE ═══════ */}
        {phase === 0 && (
          <motion.div
            key="journey-title"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img src={milfordImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--background) / 0.7) 100%)",
              }}
            />
            <div className="absolute inset-0 bg-background/30" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
              <motion.p
                className="text-stark-periwinkle text-sm tracking-[0.4em] uppercase mb-6 font-medium"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                NKD Journeys
              </motion.p>
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-center leading-tight"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.2 }}
              >
                Breathe your way<br />around the world
              </motion.h2>
            </div>
          </motion.div>
        )}

        {/* ═══════ PART 2 — MAP ═══════ */}
        {phase === 1 && (
          <motion.div
            key="journey-map"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img src={mapImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/10" />

            {/* NZ glow — anchored exactly to white circle center (1811, 901), circle r≈70 */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1920 1920"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <filter id="nz-blur-soft" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" />
                </filter>
                <filter id="nz-blur-medium" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur stdDeviation="18" />
                </filter>
                <filter id="nz-blur-wide" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="32" />
                </filter>
                <radialGradient id="nz-glow-core">
                  <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.95" />
                  <stop offset="58%" stopColor="hsl(var(--foreground))" stopOpacity="0.26" />
                  <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="nz-glow-primary">
                  <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.72" />
                  <stop offset="48%" stopColor="hsl(var(--foreground))" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="nz-glow-outer">
                  <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.42" />
                  <stop offset="42%" stopColor="hsl(var(--foreground))" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Layer 3: outer halo — 2.4x radius, dominant circular signal */}
              <motion.circle
                cx="1781" cy="939" r="168"
                fill="url(#nz-glow-outer)"
                filter="url(#nz-blur-wide)"
                animate={{ r: [168, 198, 168], opacity: [0.92, 0.74, 0.92] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Layer 2: primary glow — 1.8x radius */}
              <motion.circle
                cx="1781" cy="939" r="126"
                fill="url(#nz-glow-primary)"
                filter="url(#nz-blur-medium)"
                animate={{ r: [126, 148, 126], opacity: [0.98, 0.78, 0.98] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Layer 1: core halo — 1.2x radius, clearly beyond circle boundary */}
              <motion.circle
                cx="1781" cy="939" r="84"
                fill="url(#nz-glow-core)"
                filter="url(#nz-blur-soft)"
                animate={{ r: [84, 99, 84], opacity: [1, 0.8, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Secondary ring — expands from circle edge to ~2.5x radius */}
              <motion.circle
                cx="1781" cy="939" r="70"
                fill="none"
                stroke="hsl(var(--foreground))"
                strokeWidth="3"
                filter="url(#nz-blur-soft)"
                animate={{ r: [70, 175, 70], opacity: [0.36, 0, 0.36] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>

            {/* Dim static ambient dots — suppressed, no animation */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1920 1920"
              preserveAspectRatio="xMidYMid slice"
            >
              {ambientDots.map((dot, i) => (
                <circle
                  key={i}
                  cx={dot.cx * 1.92} cy={dot.cy * 1.92} r="3"
                  fill="hsl(var(--stark-sunset))"
                  opacity="0.05"
                />
              ))}
            </svg>

            {/* text */}
            <div className="relative z-10 flex flex-col justify-end h-full px-12 md:px-24 pb-32">
              <motion.p
                className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                You begin here
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                Every breath moves you forward
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* ═══════ PART 3 — IMMERSIVE NARRATIVE (CLIMBER) ═══════ */}
        {phase === 2 && (
          <motion.div
            key="journey-narrative"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* climber image */}
            <img
              src={climberImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.85)" }}
            />
            {/* darken overlay */}
            <div className="absolute inset-0 bg-background/15" />
            {/* text-safe gradient: deep purple from left */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, hsl(var(--background) / 0.75) 0%, hsl(var(--background) / 0.45) 40%, transparent 70%)",
              }}
            />
            {/* vignette */}
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--background) / 0.4) 100%)",
              }}
            />

            {/* narrative text */}
            <div className="relative z-10 flex items-center h-full px-12 md:px-24 lg:px-32">
              <div className="max-w-2xl space-y-1">
                {narrativeLines.filter(l => l.text).map((line, i) => (
                  <motion.p
                    key={i}
                    className={getLineClassName(line)}
                    style={getLineStyle(line)}
                    initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 1.0,
                      delay: line.delay,
                      ease: "easeOut",
                    }}
                  >
                    {line.text}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

SlideJourneys.displayName = "SlideJourneys";

export default SlideJourneys;
