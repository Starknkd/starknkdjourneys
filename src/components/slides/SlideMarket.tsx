import { motion } from "framer-motion";
import breathingCulture from "@/assets/breathing-culture.webp";

const SlideMarket = () => (
  <div className="absolute inset-0 w-screen h-screen flex overflow-hidden">
    {/* Left side — 60% text */}
    <div className="relative w-[60%] h-full flex items-center bg-background z-10">
      <div className="pl-12 md:pl-24 lg:pl-32 pr-8 max-w-2xl">
        <motion.p
          className="text-primary text-sm tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          The Landscape
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          The industry is solving this wrong.
        </motion.h2>

        <div className="mt-10 space-y-3">
          {[
            { text: "One-size breathing techniques", delay: 1.2 },
            { text: "Focus on oxygen, not CO₂", delay: 1.7 },
            { text: "More intensity, not regulation", delay: 2.2 },
          ].map(({ text, delay }) => (
            <motion.p
              key={text}
              className="text-lg md:text-xl text-stark-periwinkle"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay, duration: 0.5 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <motion.p
          className="mt-10 text-xl md:text-2xl text-foreground font-semibold italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.0, duration: 0.7 }}
        >
          "For many people, with maxed out systems & wired minds, it makes things worse."
        </motion.p>
      </div>
    </div>

    {/* Right side — 40% image */}
    <div className="relative w-[40%] h-full">
      <img
        src={breathingCulture}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top brightness-[0.55]"
      />
      {/* Purple overlay */}
      <div className="absolute inset-0 bg-background/20" />
      {/* Gradient fade from left */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
    </div>
  </div>
);

export default SlideMarket;
