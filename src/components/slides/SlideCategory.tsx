import { motion } from "framer-motion";
import surferBg from "@/assets/surfer-wave-bg.png";

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const SlideCategory = () => (
  <div className="absolute inset-0 w-screen h-screen overflow-hidden bg-background">
    {/* Full-bleed surfer background */}
    <img
      src={surferBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      style={{
        filter: "contrast(1.12) brightness(0.95)",
      }}
    />

    {/* Deep purple overlay for brand consistency */}
    <div
      className="absolute inset-0"
      style={{
        background: "hsl(var(--background) / 0.6)",
      }}
    />

    {/* Slight centre brightening to reveal surfer */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 50% 50% at 50% 50%, hsl(var(--foreground) / 0.04) 0%, transparent 70%)",
      }}
    />

    {/* Vignette */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, transparent 30%, hsl(var(--background) / 0.45) 100%)",
      }}
    />

    {/* Text content — left-center */}
    <motion.div
      className="relative z-10 h-full flex flex-col justify-center pl-12 md:pl-24 lg:pl-32 pr-8"
      style={{ maxWidth: "70%" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      initial="hidden"
      animate="show"
    >
      {/* Setup line */}
      <motion.p
        variants={fade}
        className="text-xl md:text-2xl font-medium text-foreground/90 mb-4"
      >
        We sit at the intersection
      </motion.p>

      {/* Core line — the visual anchor */}
      <motion.h2
        variants={fade}
        className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground tracking-wide mb-10"
      >
        engagement{" "}
        <span className="text-primary">×</span>{" "}
        physiology{" "}
        <span className="text-primary">×</span>{" "}
        behaviour change
      </motion.h2>

      {/* Market size line */}
      <motion.p
        variants={fade}
        className="text-base md:text-lg text-foreground/80 mb-8"
      >
        Hundreds of millions of people sit in this gap.
      </motion.p>

      {/* Category name */}
      <motion.p
        variants={fade}
        className="text-lg md:text-xl font-semibold text-foreground/95 mb-10"
      >
        We call it biotravel.
      </motion.p>

      {/* Closing line */}
      <motion.div variants={fade} className="space-y-0.5">
        <p className="text-lg md:text-xl font-semibold text-foreground/95">
          We're not riding the wave.
        </p>
        <p className="text-lg md:text-xl font-semibold text-foreground/95">
          We're defining it.
        </p>
      </motion.div>
    </motion.div>
  </div>
);

export default SlideCategory;
