import { motion } from "framer-motion";
import brandWaveBg from "@/assets/brand-wave-bg-2.jpg";

const SlideHook = () => (
  <section className="relative w-full min-h-screen overflow-hidden bg-background">
    {/* Full-bleed background image */}
    <img
      src={brandWaveBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      style={{ opacity: 1 }}
      loading="lazy"
    />

    {/* Darkening / focus layer */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 70% 65% at 50% 50%, hsl(var(--background) / 0.72) 0%, hsl(var(--background) / 0.88) 58%, hsl(var(--background) / 0.96) 100%)",
      }}
    />

    {/* Content layer */}
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-8">
      <div className="w-full max-w-xl">
        {/* Line 1 */}
        <motion.h2
          className="text-2xl md:text-6xl lg:text-7xl font-extrabold leading-[0.92] tracking-[-0.01em] text-foreground"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          You don't have a stress problem.
        </motion.h2>

        {/* Line 2 */}
        <motion.h2
          className="text-2xl md:text-6xl lg:text-7xl font-extrabold leading-[0.92] tracking-[-0.01em] mt-3 md:mt-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
        >
          <span className="text-foreground">You have a </span>
          <span className="relative inline-block">
            <span className="relative z-10 text-primary">breathing problem.</span>
            <motion.span
              className="absolute -inset-x-4 -inset-y-2 rounded-full bg-primary/10 blur-2xl"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 1.6 }}
            />
          </span>
        </motion.h2>

        {/* Supporting line */}
        <motion.p
          className="text-muted-foreground text-base md:text-xl tracking-wide mt-8 md:mt-14 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.82 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2.0 }}
        >
          Your system is overdriven.
          <br />
          Not broken.
        </motion.p>
      </div>
    </div>
  </section>
);

export default SlideHook;
