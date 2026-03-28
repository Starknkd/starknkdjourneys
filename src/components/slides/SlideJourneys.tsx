import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import milfordImg from "@/assets/milford-bird.png";
import mapImg from "@/assets/world-map.png";
import hikerImg from "@/assets/hiker-journey.png";
import keyImg from "@/assets/key-journey.png";

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
            <img src={milfordImg} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "contrast(1.08)" }} />
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--background) / 0.65) 100%)",
              }}
            />
            <div className="absolute inset-0 bg-background/22" />
            {/* darken bottom-right bird area */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 85% 85%, hsl(var(--background) / 0.45) 0%, transparent 50%)",
              }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
              <motion.p
                className="text-stark-periwinkle tracking-[0.4em] uppercase mb-6 font-semibold bg-secondary px-[5px] text-base"
                style={{ filter: "brightness(1.15)" }}
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
                Breathe your way<br />around the world.
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl mt-6 text-accent-foreground text-center leading-snug"
                style={{ filter: "brightness(1.15)" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                Get off the beaten track.<br />Follow what pulls you.
              </motion.p>
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
            <img src={mapImg} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.7) contrast(0.92) saturate(0.9)" }} />
            <div className="absolute inset-0 bg-background/20" />

            {/* NZ glow — reduced intensity ~25-30% */}
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
                  <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.32" />
                  <stop offset="58%" stopColor="hsl(var(--foreground))" stopOpacity="0.09" />
                  <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="nz-glow-primary">
                  <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.25" />
                  <stop offset="48%" stopColor="hsl(var(--foreground))" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="nz-glow-outer">
                  <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.15" />
                  <stop offset="42%" stopColor="hsl(var(--foreground))" stopOpacity="0.03" />
                  <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Layer 3: outer halo — reduced */}
              <motion.circle
                cx="1781" cy="939" r="168"
                fill="url(#nz-glow-outer)"
                filter="url(#nz-blur-wide)"
                animate={{ r: [168, 192, 168], opacity: [0.35, 0.25, 0.35] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Layer 2: primary glow — reduced */}
              <motion.circle
                cx="1781" cy="939" r="126"
                fill="url(#nz-glow-primary)"
                filter="url(#nz-blur-medium)"
                animate={{ r: [126, 144, 126], opacity: [0.35, 0.28, 0.35] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Layer 1: core halo — reduced */}
              <motion.circle
                cx="1781" cy="939" r="84"
                fill="url(#nz-glow-core)"
                filter="url(#nz-blur-soft)"
                animate={{ r: [84, 96, 84], opacity: [0.36, 0.28, 0.36] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Secondary ring — softer */}
              <motion.circle
                cx="1781" cy="939" r="70"
                fill="none"
                stroke="hsl(var(--foreground))"
                strokeWidth="2"
                filter="url(#nz-blur-soft)"
                animate={{ r: [70, 165, 70], opacity: [0.12, 0, 0.12] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>

            {/* text-safe darkening behind text area — right-side quiet zone */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to left, hsl(var(--background) / 0.55) 0%, hsl(var(--background) / 0.30) 32%, transparent 55%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to top, hsl(var(--background) / 0.35) 0%, hsl(var(--background) / 0.15) 40%, transparent 60%)",
              }}
            />

            {/* text — right side, same vertical position */}
            <div className="relative z-10 flex flex-col items-end h-full pb-36">
              <div className="flex flex-col justify-end h-full pr-10 md:pr-20 max-w-xl text-left">
                <motion.h2
                  className="text-2xl md:text-3xl lg:text-[2.7rem] font-bold text-foreground leading-tight mb-8"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Your breath now guides the journey.
                </motion.h2>
                <div>
                  <motion.p
                    className="text-base md:text-lg lg:text-xl text-foreground font-semibold mb-5"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.55 }}
                  >
                    Choose your route.
                  </motion.p>
                  <motion.p
                    className="text-base md:text-lg text-stark-periwinkle font-medium mb-6"
                    style={{ filter: "brightness(1.25)" }}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.75 }}
                  >
                    Keys unlock. Locals advise. Nature beckons.
                  </motion.p>
                  <motion.p
                    className="text-base md:text-lg mt-4"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.95 }}
                  >
                    <span className="relative inline-block">
                      <span
                        className="relative z-10 text-stark-sunset font-semibold"
                        style={{ filter: "brightness(1.25)", textShadow: "0 0 12px hsl(var(--stark-sunset) / 0.6), 0 0 28px hsl(var(--stark-sunset) / 0.3), 0 0 56px hsl(var(--stark-sunset) / 0.12)" }}
                      >
                        Your breath moves you forward.
                      </span>
                      <motion.span
                        className="absolute inset-0 -inset-x-4 -inset-y-2 rounded-full bg-primary/12 blur-2xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
                      />
                    </span>
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ═══════ PART 3 — IMMERSIVE NARRATIVE (HIKER + KEY) ═══════ */}
        {phase === 2 && (
          <motion.div
            key="journey-narrative"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* hiker image — right-of-centre */}
            <img
              src={hikerImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.85)", objectPosition: "65% center" }}
            />
            {/* darken overlay */}
            <div className="absolute inset-0 bg-background/15" />
            {/* text-safe gradient: deep purple from left */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, hsl(var(--background) / 0.80) 0%, hsl(var(--background) / 0.50) 38%, transparent 65%)",
              }}
            />
            {/* vignette */}
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--background) / 0.4) 100%)",
              }}
            />

            {/* key image — lower-right quadrant */}
            <motion.img
              src={keyImg}
              alt=""
              className="absolute z-10"
              style={{
                width: "180px",
                height: "180px",
                objectFit: "contain",
                bottom: "14%",
                right: "12%",
                filter: "brightness(1.1) drop-shadow(0 0 18px hsl(var(--stark-sunset) / 0.4)) drop-shadow(0 0 40px hsl(var(--stark-sunset) / 0.15))",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            />

            {/* narrative text — left side */}
            <div className="relative z-10 flex items-center h-full px-12 md:px-24 lg:px-32">
              <div className="max-w-2xl">
                {/* Headline */}
                <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  You and your breath<br />
                  - hand in hand -<br />
                  step off the beaten track.
                </motion.h2>

                {/* Subhead */}
                <motion.div
                  className="mb-6 space-y-1"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 }}
                >
                  <p className="text-lg md:text-xl text-foreground font-semibold">Your journey unfolds.</p>
                  <p className="text-lg md:text-xl text-foreground font-semibold">Across landscapes.</p>
                  <p className="text-lg md:text-xl text-foreground font-semibold">Through cultures you didn't expect.</p>
                </motion.div>

                {/* Body */}
                <motion.div
                  className="space-y-1"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.75 }}
                >
                  <p className="text-base md:text-lg text-foreground/90">Into moments that catch you off guard -</p>
                  <p className="text-base md:text-lg text-foreground/90">in a good way.</p>
                  <p className="text-base md:text-lg text-foreground/90 mt-4">It's still breathing.</p>
                </motion.div>

                {/* Accent line */}
                <motion.div
                  className="mt-6 space-y-1"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.95 }}
                >
                  <p
                    className="text-lg md:text-xl text-stark-sunset font-semibold"
                    style={{
                      filter: "brightness(1.3)",
                      textShadow: "0 0 14px hsl(var(--stark-sunset) / 0.7), 0 0 32px hsl(var(--stark-sunset) / 0.35), 0 0 60px hsl(var(--stark-sunset) / 0.15)",
                    }}
                  >
                    But this time -
                  </p>
                  <p
                    className="text-lg md:text-xl text-stark-sunset font-semibold"
                    style={{
                      filter: "brightness(1.3)",
                      textShadow: "0 0 14px hsl(var(--stark-sunset) / 0.7), 0 0 32px hsl(var(--stark-sunset) / 0.35), 0 0 60px hsl(var(--stark-sunset) / 0.15)",
                    }}
                  >
                    you actually want to do it.
                  </p>
                </motion.div>

                {/* Closing */}
                <motion.div
                  className="mt-6 space-y-1"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.15 }}
                >
                  <p className="text-base md:text-lg text-foreground/90">With your first key in hand,</p>
                  <p className="text-base md:text-lg text-foreground/90">you journey onward.</p>
                </motion.div>
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
