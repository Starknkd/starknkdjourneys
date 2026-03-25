import { motion } from "framer-motion";
import speakerImg from "@/assets/speaker-orange.jpg";

/* ─── narrative lines ─── */
const narrativeLines = [
  { text: "You don't follow a programme.", delay: 0.4, type: "main" as const },
  { text: "You travel with a coach.", delay: 1.2, type: "main" as const },
  { text: "One that learns:", delay: 2.2, type: "main" as const },
  { text: "how you think,", delay: 3.0, type: "sub" as const },
  { text: "how you react,", delay: 3.5, type: "sub" as const },
  { text: "how you avoid,", delay: 4.0, type: "sub" as const },
  { text: "how you push.", delay: 4.5, type: "sub" as const },
  { text: "Over time,", delay: 5.8, type: "main" as const },
  { text: "it knows you better than you know yourself.", delay: 6.8, type: "emphasis" as const },
];

const supportingItems = [
  { text: "daily guidance", delay: 9.0 },
  { text: "adaptive coaching", delay: 9.4 },
  { text: "identity reinforcement", delay: 9.8 },
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

    {/* Overlays — keep centre-right visually quiet */}
    <div className="absolute inset-0 bg-background/20" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to right, hsl(var(--background) / 0.80) 0%, hsl(var(--background) / 0.55) 45%, hsl(var(--background) / 0.25) 70%, transparent 100%)",
      }}
    />
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

    {/* Content */}
    <div className="relative z-10 flex items-center h-full px-12 md:px-24 lg:px-32">
      <div className="max-w-2xl">
        {/* Label */}
        <motion.p
          className="text-accent text-sm tracking-[0.3em] uppercase mb-8 font-medium"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0 }}
        >
          The Lab
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground/95 mb-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          The best advice —<br />at your fingertips
        </motion.h2>

        {/* Bridging line */}
        <motion.p
          className="text-lg md:text-xl text-foreground/50 mb-12"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          for the moments that usually throw you.
        </motion.p>

        {/* Narrative */}
        <div className="space-y-1">
          {narrativeLines.map((line, i) => (
            <motion.p
              key={i}
              className={
                line.type === "emphasis"
                  ? "text-lg md:text-xl text-foreground/95 font-semibold mt-4"
                  : line.type === "sub"
                    ? "text-base md:text-lg text-foreground/55 pl-4"
                    : "text-base md:text-lg text-foreground/80"
              }
              style={
                line.type === "emphasis"
                  ? { textShadow: "0 0 18px hsl(var(--foreground) / 0.15)" }
                  : undefined
              }
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: line.delay, ease: "easeOut" }}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        {/* Supporting — minimal, late fade */}
        <div className="flex gap-6 mt-12">
          {supportingItems.map((item, i) => (
            <motion.span
              key={i}
              className="text-xs tracking-[0.2em] uppercase text-foreground/25"
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
