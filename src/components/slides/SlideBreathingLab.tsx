import { motion } from "framer-motion";
import labVR from "@/assets/lab-vr-headset.jpg";
import labEnv from "@/assets/lab-environment.png";
import bioGraph from "@/assets/biofeedback-graph.png";

const bodyLines = [
  { text: "A working pop-up lab in central London.", delay: 2.0, type: "main" as const },
  { text: "We simulate pressure.", delay: 2.8, type: "main" as const },
  { text: "You watch your system respond - in real time.", delay: 3.4, type: "accent" as const },
  { text: "Your breathing. Your physiology. Your state.\n\n\nYou see the shift.\n\n", delay: 4.8, type: "main" as const },
  { text: "And once you've experienced it - \nthere is no going back.", delay: 5.8, type: "emphasis" as const },
];

const SlideBreathingLab = () => (
  <div className="slide-root absolute inset-0 w-screen h-screen flex overflow-hidden bg-background">
    {/* LEFT: headline + copy — 55% */}
    <div className="relative w-[55%] h-full flex items-center z-10">
      {/* Subtle lab environment bleed from left edge */}
      <img
        src={labEnv}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-right opacity-[0.10]"
        style={{ filter: "saturate(0.3) brightness(0.5)" }}
      />
      <div className="absolute inset-0 bg-background/90" />

      <div className="relative z-10 pl-12 md:pl-24 lg:pl-32 pr-10 max-w-2xl">
        {/* Micro-line */}
        <motion.p
          className="text-sm tracking-[0.3em] uppercase text-foreground/50 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Step into the lab.
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          See it. Feel it.
          <br />
          Regulate it.
        </motion.h2>

        {/* Body copy */}
        <div className="mt-10 space-y-1.5">
          {bodyLines.map((line, i) => (
            <motion.p
              key={i}
              className={[
                "whitespace-pre-line",
                line.type === "accent"
                  ? "text-lg md:text-xl font-semibold text-accent"
                  : line.type === "emphasis"
                    ? "text-lg md:text-xl font-extrabold text-foreground mt-4 tracking-wide"
                    : "text-base md:text-lg text-foreground/70",
              ].join(" ")}
              style={
                line.type === "accent"
                  ? { textShadow: "0 0 24px hsl(var(--accent) / 0.35)", filter: "brightness(1.15)" }
                  : line.type === "emphasis"
                    ? { textShadow: "0 0 16px hsl(var(--foreground) / 0.1)" }
                    : undefined
              }
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: line.delay, ease: "easeOut" }}
            >
              {line.text}
            </motion.p>
            ))
          }
        </div>

        {/* Supporting bottom */}
        <div className="mt-16 space-y-1">
          <motion.p
            className="text-xs tracking-[0.2em] uppercase text-foreground/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 7.0, duration: 1 }}
          >
            enterprise demo environment
          </motion.p>
          <motion.p
            className="text-xs tracking-[0.15em] text-foreground/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 7.4, duration: 1 }}
          >
            built to test and prove impact — fast
          </motion.p>
        </div>
      </div>
    </div>

    {/* RIGHT: image — 45% */}
    <div className="relative w-[45%] h-full">
      {/* VR headset image — primary */}
      <img
        src={labVR}
        alt="Person wearing VR headset in the Stark NKD breathing lab"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          filter: "brightness(0.65) contrast(1.25)",
        }}
      />

      {/* Grain texture to match other slides */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.04,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Top-right corner darken (wall text) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 95% 5%, hsl(var(--background) / 0.6) 0%, transparent 40%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, transparent 30%, hsl(var(--background) / 0.5) 100%)",
        }}
      />

      {/* Biofeedback data signal — lifted above darkening overlays so it stays visible */}
      <img
        src={bioGraph}
        alt=""
        className="absolute z-10 w-[138%] h-auto bottom-[3%] right-[-16%] pointer-events-none"
        style={{
          opacity: 0.32,
          filter: "blur(0.8px) brightness(0.95) contrast(1.9) saturate(0) invert(1)",
          mixBlendMode: "screen",
        }}
      />

      {/* Left edge fade into text panel — wide smooth blend */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.88) 8%, hsl(var(--background) / 0.5) 20%, transparent 40%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--background) / 0.35) 0%, transparent 24%)",
        }}
      />
    </div>
  </div>
);

export default SlideBreathingLab;
