import { motion } from "framer-motion";
import SlideShell from "@/components/SlideShell";

const stages = [
  {
    title: "Regulate",
    sub: "breathing + physiology",
    color: "hsl(var(--stark-sunset))",
    glowColor: "hsl(2, 77%, 64%)",
    delay: 1.4,
  },
  {
    title: "Stabilise",
    sub: "attention under pressure",
    color: "hsl(var(--foreground) / 0.85)",
    glowColor: "hsl(0, 0%, 100%)",
    delay: 1.9,
  },
  {
    title: "Respond",
    sub: "real-world behaviour",
    color: "hsl(var(--stark-periwinkle))",
    glowColor: "hsl(268, 44%, 72%)",
    delay: 2.4,
  },
];

const SlideAI = () => (
  <SlideShell slideKey={7}>
    <div className="max-w-6xl w-full flex flex-col items-center text-center gap-8 md:gap-10">
      {/* Headline */}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Start with a 7-day control reset
      </motion.h2>

      {/* Sub */}
      <motion.p
        className="text-lg md:text-xl text-muted-foreground"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        10 minutes a day. Built for real life.
      </motion.p>

      {/* 3-Stage Flow */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mt-4">
        {stages.map((stage, i) => (
          <div key={i} className="flex items-center">
            {/* Stage Card */}
            <motion.div
              className="relative w-48 md:w-56 h-40 md:h-44 rounded-2xl border flex flex-col items-center justify-center gap-3 overflow-hidden"
              style={{
                borderColor: `${stage.color}`,
                borderWidth: "1px",
              }}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stage.delay }}
            >
              {/* Fingerprint texture */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 200 180"
                preserveAspectRatio="xMidYMid slice"
              >
                <circle cx="100" cy="90" r="70" fill="none" stroke={stage.color} strokeWidth="0.5" opacity="0.06" />
                <circle cx="100" cy="90" r="55" fill="none" stroke={stage.color} strokeWidth="0.4" opacity="0.05" />
                <circle cx="100" cy="90" r="40" fill="none" stroke={stage.color} strokeWidth="0.4" opacity="0.04" />
                <circle cx="100" cy="90" r="25" fill="none" stroke={stage.color} strokeWidth="0.3" opacity="0.03" />
              </svg>

              {/* Background glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-[0.06]"
                style={{ background: `radial-gradient(circle at center, ${stage.glowColor}, transparent 70%)` }}
              />

              {/* Content */}
              <span
                className="text-xl md:text-2xl font-semibold tracking-wide relative z-10"
                style={{ color: stage.color }}
              >
                {stage.title}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground tracking-wider relative z-10">
                {stage.sub}
              </span>

              {/* Subtle pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border pointer-events-none"
                style={{ borderColor: stage.color }}
                animate={{ opacity: [0.15, 0.05, 0.15], scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              />
            </motion.div>

            {/* Connection line */}
            {i < stages.length - 1 && (
              <motion.div className="hidden md:flex items-center mx-1">
                <motion.div
                  className="h-px w-10 lg:w-16 origin-left"
                  style={{ background: `linear-gradient(90deg, ${stages[i].color}, ${stages[i + 1].color})` }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 0.4 }}
                  transition={{ duration: 0.6, delay: stage.delay + 0.4 }}
                />
                <motion.div
                  className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[7px] border-t-transparent border-b-transparent"
                  style={{ borderLeftColor: stages[i + 1].color }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ duration: 0.3, delay: stage.delay + 0.8 }}
                />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Closing */}
      <motion.p
        className="text-base md:text-lg tracking-[0.2em] uppercase text-accent font-medium mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3.2 }}
      >
        Feel the shift — quickly.
      </motion.p>
    </div>
  </SlideShell>
);

export default SlideAI;
