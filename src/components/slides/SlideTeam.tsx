import { motion } from "framer-motion";
import scaleBg from "@/assets/scale-bg.png";

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const SlideTeam = () => (
  <div className="slide-root absolute inset-0 w-screen h-screen overflow-hidden bg-background">
    <img
      src={scaleBg}
      alt="Scenic landscape representing personal and organisational growth pathways"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: "brightness(0.5) contrast(1.15) saturate(0.55)" }}
    />

    <div className="absolute inset-0" style={{ background: "hsl(var(--background) / 0.4)" }} />
    <div className="absolute inset-0" style={{ background: "hsl(var(--background) / 0.8)" }} />
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to right, hsl(var(--background) / 0.75) 0%, hsl(var(--background) / 0.45) 30%, hsl(var(--background) / 0.15) 50%, transparent 70%)",
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, transparent 40%, hsl(var(--background) / 0.35) 100%)",
      }}
    />

    {/* Content */}
    <motion.div
      className="relative z-10 h-full flex flex-col justify-center px-6 md:pl-24 lg:pl-32 md:pr-8 w-full md:max-w-[60%]"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      initial="hidden"
      animate="show"
    >
      <motion.p
        variants={fadeIn}
        className="text-xs tracking-[0.4em] uppercase text-primary font-light mb-8"
        style={{ opacity: 0.85 }}
      >
        Scale
      </motion.p>

      <motion.h2
        variants={fadeIn}
        className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-[0.92] tracking-[-0.01em] text-foreground mb-8 md:mb-12"
      >
        One system.
        <br />
        Choose your pathway
      </motion.h2>

      <motion.div variants={fadeIn} className="space-y-1 mb-8 md:mb-10">
        <p className="text-sm md:text-lg font-semibold text-foreground/95">
          Individuals start with a reset.
        </p>
        <p className="text-sm md:text-lg text-foreground/75">
          They stay for the journeys.
        </p>
      </motion.div>

      <motion.div variants={fadeIn} className="space-y-1 mb-8 md:mb-10">
        <p className="text-sm md:text-lg font-semibold text-foreground/95">
          Organisations experience the lab.
        </p>
        <p className="text-sm md:text-lg text-foreground/75">
          They scale through the platform.
        </p>
      </motion.div>

      <motion.div variants={fadeIn} className="space-y-1 mb-10 md:mb-16">
        <p className="text-sm md:text-lg text-foreground/80">Same system.</p>
        <p className="text-sm md:text-lg text-foreground/80">Deployed anywhere.</p>
      </motion.div>

      <motion.div variants={fadeIn} className="space-y-1 pt-2 border-t border-foreground/10" style={{ maxWidth: "380px" }}>
        <p className="text-lg md:text-2xl font-extrabold text-foreground mt-4">
          From personal habit —
        </p>
        <p className="text-lg md:text-2xl font-extrabold text-foreground">
          to organisational capability.
        </p>
      </motion.div>
    </motion.div>
  </div>
);

export default SlideTeam;
