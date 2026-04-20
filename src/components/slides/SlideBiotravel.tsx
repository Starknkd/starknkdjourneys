import { motion } from "framer-motion";
import surferBg from "@/assets/surfer-wave-bg.png";

const SlideBiotravel = () => (
  <div className="slide-root absolute inset-0 w-screen h-screen overflow-hidden bg-background">
    <img
      src={surferBg}
      alt="Surfer riding a powerful wave representing the biotravel concept"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: "brightness(0.55) contrast(1.1)" }}
    />

    <div className="absolute inset-0 hidden md:block" style={{ background: "hsl(var(--background) / 0.6)" }} />
    <div className="absolute inset-0 md:hidden" style={{ background: "hsl(var(--background) / 0.4)" }} />
    <div
      className="absolute inset-0"
      style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 25%, hsl(var(--background) / 0.55) 80%)" }}
    />

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-16 lg:px-24">
      <motion.p
        className="text-base md:text-xl text-foreground/75 mb-4 md:mb-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        We sit at the intersection
      </motion.p>

      <motion.h2
        className="text-2xl md:text-5xl lg:text-6xl font-extrabold leading-[0.92] tracking-[-0.01em] text-foreground max-w-4xl"
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

      <motion.p
        className="text-sm md:text-lg text-foreground/60 mt-6 md:mt-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        A $1.8T wellness market with no category leader in physiological regulation.
      </motion.p>

      <motion.p
        className="text-xl md:text-3xl lg:text-4xl font-extrabold text-primary mt-8 md:mt-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.6 }}
      >
        We call it biotravel.
      </motion.p>

      <motion.p
        className="text-base md:text-xl text-foreground/85 font-medium mt-8 md:mt-10 italic"
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
