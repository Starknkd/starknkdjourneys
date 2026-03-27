import { motion } from "framer-motion";
import scaleBg from "@/assets/scale-bg.png";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const SlideTeam = () => (
  <div className="absolute inset-0 w-screen h-screen overflow-hidden bg-background">
    {/* Background image — single unified layer */}
    <img
      src={scaleBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      style={{
        filter: "brightness(0.5) contrast(1.15) saturate(0.55)",
      }}
    />

    {/* Single unified purple wash — same tint both sides */}
    <div
      className="absolute inset-0"
      style={{
        background: "hsl(var(--background) / 0.4)",
      }}
    />

    {/* Smooth left-to-right gradient for text legibility — wide soft transition */}
    {/* Left image overlay — covers VR girl fully, flush with hiker edge */}
    <div
      className="absolute top-0 left-0 bottom-0 w-[55%]"
      style={{
        background: "hsl(var(--background) / 0.8)",
      }}
    />

    {/* Smooth left-to-right gradient for text legibility — wide soft transition */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to right, hsl(var(--background) / 0.75) 0%, hsl(var(--background) / 0.45) 30%, hsl(var(--background) / 0.15) 50%, transparent 70%)",
      }}
    />

    {/* Soft vignette — no centre bias */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, transparent 40%, hsl(var(--background) / 0.35) 100%)",
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
        className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-foreground mb-12"
      >
        One system.
        <br />
        Choose your pathway
      </motion.h2>

      {/* Body — Block 1: Individuals */}
      <motion.div variants={fadeIn} className="space-y-1 mb-10">
        <p className="text-base md:text-lg font-semibold text-foreground/95">
          Individuals start with a reset.
        </p>
        <p className="text-base md:text-lg text-foreground/75">
          They stay for the journeys.
        </p>
      </motion.div>

      {/* Body — Block 2: Organisations */}
      <motion.div variants={fadeIn} className="space-y-1 mb-10">
        <p className="text-base md:text-lg font-semibold text-foreground/95">
          Organisations experience the lab.
        </p>
        <p className="text-base md:text-lg text-foreground/75">
          They scale through the platform.
        </p>
      </motion.div>

      {/* Body — Block 3: Shared system */}
      <motion.div variants={fadeIn} className="space-y-1 mb-16">
        <p className="text-base md:text-lg text-foreground/80">
          Same system.
        </p>
        <p className="text-base md:text-lg text-foreground/80">
          Deployed anywhere.
        </p>
      </motion.div>

      {/* Closing anchor line — conceptual bridge */}
      <motion.div variants={fadeIn} className="space-y-1 pt-2 border-t border-foreground/10" style={{ maxWidth: "380px" }}>
        <p className="text-xl md:text-2xl font-extrabold text-foreground mt-4">
          From personal habit —
        </p>
        <p className="text-xl md:text-2xl font-extrabold text-foreground">
          to organisational capability.
        </p>
      </motion.div>
    </motion.div>
  </div>
);

export default SlideTeam;
