import { motion } from "framer-motion";
import femaleExec from "@/assets/female-exec.png";

const SlideSolution = () => (
  <div className="absolute inset-0 w-screen h-screen flex overflow-hidden">
    {/* Left side — 60% text */}
    <div className="relative w-[60%] h-full flex items-center bg-background z-10">
      <div className="pl-12 md:pl-24 lg:pl-32 pr-8 max-w-2xl">
        {/* Section label */}
        <motion.p
          className="text-primary text-sm tracking-[0.35em] uppercase mb-6 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ filter: "brightness(1.1)" }}
        >
          The Mechanism
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          This is not mindset.
        </motion.h2>

        <motion.h2
          className="text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight text-primary mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          It's physiology.
        </motion.h2>

        {/* Staggered supporting lines */}
        <div className="mt-10 space-y-3">
          {[
            { text: "Breathing behaviour drives CO₂", delay: 1.8 },
            { text: "CO₂ regulates oxygen delivery", delay: 2.3 },
            { text: "Disrupt it → system destabilises", delay: 2.8 },
          ].map(({ text, delay }) => (
            <motion.p
              key={text}
              className="text-lg md:text-xl text-foreground/90"
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
          className="mt-14 text-xl md:text-2xl text-foreground font-bold italic"
          style={{ opacity: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{ delay: 3.5, duration: 0.7 }}
        >
          "You can't out-think a dysregulated system."
        </motion.p>
      </div>
    </div>

    {/* Right side — 40% image */}
    <div className="relative w-[40%] h-full">
      <img
        src={femaleExec}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[30%_center]"
        style={{ filter: "brightness(0.75) contrast(1.12)" }}
      />
      {/* Narrower gradient fade from left */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.5) 25%, transparent 55%)",
        }}
      />
    </div>
  </div>
);

export default SlideSolution;
