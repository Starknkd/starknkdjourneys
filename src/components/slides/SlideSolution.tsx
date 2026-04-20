import { motion } from "framer-motion";
import femaleExec from "@/assets/female-exec.png";

const SlideSolution = () => (
  <div className="slide-root absolute inset-0 w-screen h-screen flex flex-col md:flex-row overflow-hidden">
    {/* Left side — text */}
    <div className="relative w-full md:w-[60%] h-auto md:h-full flex items-center bg-transparent md:bg-background z-10">
      <div className="px-6 py-10 md:py-0 md:pl-24 lg:pl-32 md:pr-8 max-w-2xl">
        {/* Section label */}
        <motion.p
          className="text-primary text-xs tracking-[0.4em] uppercase mb-6 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ filter: "brightness(1.1)" }}
        >
          The Mechanism
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-[0.92] tracking-[-0.01em] text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          This is not mindset.
        </motion.h2>

        <motion.h2
          className="text-4xl md:text-6xl lg:text-8xl font-extrabold leading-[0.92] tracking-[-0.01em] text-primary mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          It's physiology.
        </motion.h2>

        {/* Staggered supporting lines */}
        <div className="mt-8 md:mt-10 space-y-3">
          {[
            { text: "Breathing behaviour drives CO₂", delay: 1.8 },
            { text: "CO₂ regulates oxygen delivery", delay: 2.3 },
            { text: "Disrupt it → the system destabilises", delay: 2.8 },
          ].map(({ text, delay }) => (
            <motion.p
              key={text}
              className="text-base md:text-xl text-foreground/90"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.9, x: 0 }}
              transition={{ delay, duration: 0.5 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Quote / conclusion */}
        <motion.p
          className="mt-10 md:mt-14 text-lg md:text-2xl text-foreground font-bold italic"
          style={{ opacity: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{ delay: 3.5, duration: 0.7 }}
        >
          "You can't out-think a dysregulated system."
        </motion.p>
      </div>
    </div>

    {/* Right side — image. On desktop: 40% panel. On mobile: low-opacity background bleed */}
    <div className="absolute md:relative inset-0 md:inset-auto w-full md:w-[40%] h-full pointer-events-none md:pointer-events-auto z-0 md:z-auto">
      <img
        src={femaleExec}
        alt="Professional experiencing stress and breathing difficulty"
        className="absolute inset-0 w-full h-full object-cover object-[30%_center] opacity-20 md:opacity-100"
        style={{ filter: "brightness(0.75) contrast(1.12)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.85) 35%, hsl(var(--background) / 0.5) 65%, hsl(var(--background) / 0.3) 100%)",
        }}
      />
    </div>
  </div>
);

export default SlideSolution;
