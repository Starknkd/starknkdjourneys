import { motion } from "framer-motion";
import scaleBg from "@/assets/scale-bg.png";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const SlideTeam = () => (
  <div className="absolute inset-0 w-screen h-screen overflow-hidden bg-background">
    {/* Background image */}
    <img
      src={scaleBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      style={{
        filter: "brightness(0.55) contrast(1.1) saturate(0.85)",
      }}
    />

    {/* Vignette — darker edges */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at 35% 45%, transparent 20%, hsl(var(--background) / 0.55) 100%)",
      }}
    />

    {/* Left-side text legibility gradient */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to right, hsl(var(--background) / 0.75) 0%, hsl(var(--background) / 0.45) 35%, transparent 60%)",
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

    {/* Subtle top-right brightness lift for progression feel */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at 90% 10%, hsl(var(--foreground) / 0.04) 0%, transparent 50%)",
      }}
    />

    {/* Content */}
    <motion.div
      className="relative z-10 h-full flex flex-col justify-center pl-12 md:pl-24 lg:pl-32 pr-8"
      style={{ maxWidth: "60%" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      initial="hidden"
      animate="show"
    >
      {/* Label */}
      <motion.p
        variants={fadeIn}
        className="text-sm tracking-[0.3em] uppercase text-primary mb-8"
      >
        Scale
      </motion.p>

      {/* Headline */}
      <motion.h2
        variants={fadeIn}
        className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-foreground mb-10"
      >
        One system.
        <br />
        Choose your pathway
      </motion.h2>

      {/* Body — cluster 1: individuals */}
      <motion.div variants={fadeIn} className="space-y-1 mb-6">
        <p className="text-base md:text-lg text-foreground/85 whitespace-pre-line">
          Individuals start with a reset.
        </p>
        <p className="text-base md:text-lg text-foreground/85 whitespace-pre-line">
          They stay for the journeys.
        </p>
      </motion.div>

      {/* Body — cluster 2: organisations */}
      <motion.div variants={fadeIn} className="space-y-1 mb-6">
        <p className="text-base md:text-lg text-foreground/85 whitespace-pre-line">
          Organisations experience the lab.
        </p>
        <p className="text-base md:text-lg text-foreground/85 whitespace-pre-line">
          They scale through the platform.
        </p>
      </motion.div>

      {/* Body — cluster 3: shared */}
      <motion.div variants={fadeIn} className="space-y-1 mb-10">
        <p className="text-base md:text-lg text-foreground/85">
          Same system.
        </p>
        <p className="text-base md:text-lg text-foreground/85">
          Deployed anywhere.
        </p>
      </motion.div>

      {/* Closing line */}
      <motion.div variants={fadeIn} className="space-y-0.5">
        <p className="text-lg md:text-xl font-semibold text-foreground/95">
          From personal habit —
        </p>
        <p className="text-lg md:text-xl font-semibold text-foreground/95">
          to organisational capability.
        </p>
      </motion.div>
    </motion.div>
  </div>
);

export default SlideTeam;
