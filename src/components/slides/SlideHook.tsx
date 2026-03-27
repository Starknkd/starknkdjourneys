import SlideShell from "@/components/SlideShell";
import { motion } from "framer-motion";
import brandWaveBg from "@/assets/brand-wave-bg-2.jpg";

const SlideHook = () => (
  <SlideShell slideKey={1}>
    {/* Brand wave pattern — edges/border only at full opacity */}
    <div className="absolute inset-0 z-[1] pointer-events-none">
      <img
        src={brandWaveBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 1 }}
      />
      {/* Large centre cutout so pattern only shows at edges */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 65% at 50% 50%, hsl(var(--background)) 0%, hsl(var(--background) / 0.85) 60%, transparent 100%)",
        }}
      />
    </div>
    <div className="max-w-5xl w-full text-center flex flex-col items-center justify-center">
      {/* Line 1 */}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        You don't have a stress problem.
      </motion.h2>

      {/* Line 2 — second beat */}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-4 md:mt-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
      >
        <span className="text-foreground">You have a </span>
        <span className="relative inline-block">
          <span className="relative z-10 text-primary">breathing problem.</span>
          {/* Spotlight glow */}
          <motion.span
            className="absolute inset-0 -inset-x-4 -inset-y-2 rounded-full bg-primary/10 blur-2xl"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1.6 }}
          />
        </span>
      </motion.h2>

      {/* Supporting line */}
      <motion.p
        className="text-muted-foreground text-lg md:text-xl tracking-wide mt-10 md:mt-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 2.0 }}
      >
        Your system is overdriven — not broken.
      </motion.p>
    </div>
  </SlideShell>
);

export default SlideHook;
