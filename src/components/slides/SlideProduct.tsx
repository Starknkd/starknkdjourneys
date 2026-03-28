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

const SlideProduct = () => (
  <SlideShell slideKey={6}>
    <div className="max-w-5xl w-full flex flex-col items-center text-center gap-6 md:gap-8 my-[20px] py-[20px]">
      {/* Headline */}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.92] tracking-[-0.01em] text-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Breathwork is not our bag. We train regulation.
      </motion.h2>

      {/* Sub */}
      <motion.div
        className="flex flex-col items-center text-center gap-3"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-lg md:text-xl leading-relaxed text-stark-periwinkle opacity-80">
          It starts with a 7-day reset.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground opacity-70">
          10 minutes a day. Built for real life.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-foreground font-medium opacity-95">
          Ready for what's next.
        </p>
      </motion.div>

      {/* 3-Stage Flow */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mt-8">
        {stages.map((stage, i) => (
          <div key={i} className="flex items-center">
            <motion.div
              className="relative w-48 md:w-56 h-40 md:h-44 rounded-2xl border flex flex-col items-center justify-center gap-3 overflow-hidden"
              style={{ borderColor: stage.color, borderWidth: "1px" }}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stage.delay }}
            >
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
              <div
                className="absolute inset-0 rounded-2xl opacity-[0.06]"
                style={{ background: `radial-gradient(circle at center, ${stage.glowColor}, transparent 70%)` }}
              />
              <span
                className="text-xl md:text-2xl font-semibold tracking-wide relative z-10"
                style={{ color: stage.color }}
              >
                {stage.title}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground tracking-wider relative z-10">
                {stage.sub}
              </span>
              <motion.div
                className="absolute inset-0 rounded-2xl border pointer-events-none"
                style={{ borderColor: stage.color }}
                animate={{ opacity: [0.15, 0.05, 0.15], scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              />
            </motion.div>

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

      {/* Closing line */}
      <motion.p
        className="text-base md:text-lg tracking-[0.2em] uppercase font-medium text-accent py-0 my-[20px] opacity-[0.72]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3.2 }}
      >
        SIMPLE. SCALABLE. FEEL THE SHIFT - FAST.
      </motion.p>
    </div>
  </SlideShell>
);

export default SlideProduct;
