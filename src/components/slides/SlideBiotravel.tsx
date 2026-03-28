import { motion } from "framer-motion";
import surferBg from "@/assets/surfer-wave-bg.png";

const SlideBiotravel = () => (
  <div className="absolute inset-0 w-screen h-screen overflow-hidden bg-background">
    {/* Full-bleed background */}
    <img
      src={surferBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: "brightness(0.55) contrast(1.1)" }}
    />

    {/* Purple overlay */}
    <div
      className="absolute inset-0"
      style={{
        background: "hsl(var(--background) / 0.6)",
      }}
    />

    {/* Radial highlight */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, transparent 20%, hsl(var(--background) / 0.5) 70%)",
      }}
    />

    {/* Vignette */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 30%, hsl(var(--background) / 0.55) 100%)",
      }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8 md:px-16 lg:px-24">
      {/* Setup line */}
      <motion.p
        className="text-lg md:text-xl text-foreground/75 mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        We sit at the intersection
      </motion.p>

      {/* Anchor line */}
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[0.92] tracking-[-0.01em] text-foreground max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
      >
        engagement{" "}
        <span className="text-primary">×</span>{" "}
        physiology{" "}
        <span className="text-primary">×</span>{" "}
        behaviour change
      </motion.h2>

      {/* Market size */}
      <motion.p
        className="text-base md:text-lg text-foreground/60 mt-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        A $1.8T wellness market with no category leader in physiological regulation.
      </motion.p>

      {/* Category claim */}
      <motion.p
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mt-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.6 }}
      >
        We call it biotravel.
      </motion.p>

      {/* Closing */}
      <motion.p
        className="text-lg md:text-xl text-foreground/85 font-medium mt-10 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.7 }}
      >
        We're not riding the wave. We're defining it.
      </motion.p>
    </div>
  </div>
);

export default SlideBiotravel;
