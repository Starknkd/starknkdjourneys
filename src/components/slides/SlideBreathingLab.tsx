import { motion } from "framer-motion";
import labVR from "@/assets/lab-vr-headset.jpg";
import labEnv from "@/assets/lab-environment.png";
import bioGraph from "@/assets/biofeedback-graph.jpg";

const bodyLines = [
  { text: "A working pop-up breathing lab in central London.", delay: 2.0, type: "main" as const },
  { text: "Simulated stress.", delay: 2.8, type: "main" as const },
  { text: "Live physiological feedback", delay: 3.4, type: "accent" as const },
  { text: "People see —", delay: 4.2, type: "main" as const },
  { text: "in real time", delay: 4.6, type: "accent" as const },
  { text: "— how their system shifts under pressure.", delay: 4.8, type: "main" as const },
  { text: "Then they learn to control it.", delay: 5.8, type: "emphasis" as const },
];

const SlideBreathingLab = () => (
  <div className="absolute inset-0 w-screen h-screen flex overflow-hidden bg-background">
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
          Step inside the lab.
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
        <div className="mt-10 space-y-2">
          {bodyLines.map((line, i) => (
            <motion.p
              key={i}
              className={
                line.type === "accent"
                  ? "text-lg md:text-xl font-semibold text-accent"
                  : line.type === "emphasis"
                    ? "text-lg md:text-xl font-bold text-foreground/95 mt-4"
                    : "text-base md:text-lg text-foreground/70"
              }
              style={
                line.type === "accent"
                  ? { textShadow: "0 0 20px hsl(var(--accent) / 0.25)" }
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
          ))}
        </div>

        {/* Supporting bottom */}
        <div className="mt-16 space-y-1">
          <motion.p
            className="text-xs tracking-[0.2em] uppercase text-foreground/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 7.0, duration: 1 }}
          >
            enterprise demo environment
          </motion.p>
          <motion.p
            className="text-xs tracking-[0.15em] text-foreground/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 7.4, duration: 1 }}
          >
            built to test and prove impact quickly
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
          filter: "brightness(0.75) contrast(1.1)",
        }}
      />

      {/* Biofeedback graph — very subtle data layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bioGraph})`,
          backgroundSize: "120% auto",
          backgroundPosition: "center 70%",
          backgroundRepeat: "no-repeat",
          opacity: 0.06,
          filter: "blur(2px) saturate(0) brightness(1.5) contrast(0.6)",
          mixBlendMode: "screen",
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

      {/* Left edge fade into text panel */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.6) 12%, transparent 35%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--background) / 0.5) 0%, transparent 30%)",
        }}
      />
    </div>
  </div>
);

export default SlideBreathingLab;
