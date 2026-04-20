import { motion } from "framer-motion";
import landscapeImg from "@/assets/landscape-wim.webp";

const SlideLandscape = () => (
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
          The Landscape
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-[0.92] tracking-[-0.01em] text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          The industry is solving this <span className="text-primary font-extrabold">wrong.</span>
        </motion.h2>

        {/* Body lines */}
        <div className="mt-8 md:mt-12 space-y-4">
          {[
            { text: "One-size breathing techniques", delay: 1.2 },
            { text: "Focus on Oxygen, not CO₂", delay: 1.6 },
            { text: "More intensity, not regulation", delay: 2.0 },
          ].map(({ text, delay }) => (
            <motion.p
              key={text}
              className="text-base md:text-xl text-foreground font-medium"
              style={{ opacity: 0.92 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.92, x: 0 }}
              transition={{ delay, duration: 0.5 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Quote */}
        <motion.p
          className="mt-10 md:mt-14 text-lg md:text-2xl text-foreground font-bold italic"
          style={{ opacity: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          transition={{ delay: 2.8, duration: 0.7 }}
        >
          "For many people with maxed out systems and wired minds, it makes things worse."
        </motion.p>
      </div>
    </div>

    {/* Right side — image. Desktop panel; mobile: low-opacity background bleed */}
    <div className="absolute md:relative inset-0 md:inset-auto w-full md:w-[40%] h-full pointer-events-none md:pointer-events-auto z-0 md:z-auto">
      <img
        src={landscapeImg}
        alt="Extreme cold exposure training in icy conditions"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.7] contrast-[1.18] saturate-[0.9] opacity-0 md:opacity-100"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.85) 35%, hsl(var(--background) / 0.5) 65%, hsl(var(--background) / 0.3) 100%)",
        }}
      />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
    </div>
  </div>
);

export default SlideLandscape;
