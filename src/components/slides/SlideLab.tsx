import { motion } from "framer-motion";
import speakerImg from "@/assets/speaker-orange.jpg";

const narrativeLines = [
  { text: "Supported by the characters you meet, the insight you collect & the community you join, you progress.\n\nYou're a striver. A doer. Not a meditator.\nYou feel it first. Less edge. Less noise. More control.\nWhen it counts.\n\nBiometrics show you what is happening underneath.", delay: 2.8, type: "main" as const },
  { text: "And over time,", delay: 3.8, type: "accent" as const },
];

const supportingItems = [
  { text: "daily guidance", delay: 11.0 },
  { text: "adaptive coaching", delay: 11.4 },
  { text: "identity reinforcement", delay: 11.8 },
];

const SlideLab = () => (
  <div className="absolute inset-0 w-screen h-screen overflow-hidden bg-background">
    {/* Background image */}
    <img
      src={speakerImg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: "brightness(0.82)" }}
    />

    {/* Overlays */}
    <div className="absolute inset-0 bg-background/20" />
    {/* Left-side darken for headline readability */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to right, hsl(var(--background) / 0.82) 0%, hsl(var(--background) / 0.55) 40%, hsl(var(--background) / 0.25) 60%, transparent 100%)",
      }}
    />
    {/* Right-side darken for narrative readability */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to left, hsl(var(--background) / 0.75) 0%, hsl(var(--background) / 0.50) 35%, transparent 55%)",
      }}
    />
    {/* Bottom gradient */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to top, hsl(var(--background) / 0.6) 0%, transparent 40%)",
      }}
    />
    {/* Vignette */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 30%, hsl(var(--background) / 0.45) 100%)",
      }}
    />

    {/* Content — split layout */}
    <div className="relative z-10 flex h-full">
      {/* LEFT: headline + bridge */}
      <div className="flex flex-col justify-center w-1/2 px-12 md:px-20 lg:px-28">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground/95 mb-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          The best advice –<br />at your fingertips
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-foreground/45 mt-1"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          for the moments that usually throw you.
        </motion.p>
      </div>

      {/* RIGHT: narrative */}
      <div className="flex flex-col justify-center w-1/2 px-12 md:px-16 lg:px-20">
        <div className="space-y-3 max-w-lg">
          {narrativeLines.map((line, i) => (
            <motion.p
              key={i}
              className={
                line.type === "accent"
                  ? "text-lg md:text-xl font-semibold text-accent mt-2 mb-2"
                  : line.type === "emphasis"
                    ? "text-lg md:text-xl text-foreground/95 font-bold mt-5"
                    : line.type === "sub"
                      ? "text-base md:text-lg text-foreground/50 pl-4"
                      : "text-base md:text-lg text-foreground/75"
              }
              style={
                line.type === "accent"
                  ? { textShadow: "0 0 24px hsl(var(--accent) / 0.3)" }
                  : line.type === "emphasis"
                    ? { textShadow: "0 0 20px hsl(var(--foreground) / 0.15)" }
                    : undefined
              }
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: line.delay, ease: "easeOut" }}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        {/* Supporting */}
        <div className="flex gap-8 mt-14">
          {supportingItems.map((item, i) => (
            <motion.span
              key={i}
              className="text-xs tracking-[0.25em] uppercase text-foreground/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: item.delay, ease: "easeOut" }}
            >
              {item.text}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SlideLab;
