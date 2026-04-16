import SlideShell from "@/components/SlideShell";
import { motion } from "framer-motion";
import execStress from "@/assets/exec-stress.png";

const SlideInsight = () => (
  <SlideShell slideKey={2} backgroundImage={execStress}>
    <div className="max-w-5xl w-full text-left relative z-10 px-2">
      {/* Headline */}
      <motion.h2
        className="text-3xl md:text-6xl lg:text-7xl font-extrabold leading-[0.92] tracking-[-0.01em] text-foreground mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      >
        It shows up everywhere.
      </motion.h2>

      {/* Staggered symptoms */}
      <div className="space-y-3 md:space-y-4 mb-10 md:mb-14">
        {[
          "Tight chest, shallow breathing",
          "Reactive under pressure",
          "Fatigue, poor focus",
        ].map((line, i) => (
          <motion.p
            key={line}
            className="text-base md:text-xl lg:text-2xl"
            style={{ color: "#b393da", opacity: 1 }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 1.0 + i * 0.5 }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* Final line */}
      <motion.p
        className="text-lg md:text-2xl lg:text-3xl font-medium text-foreground/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 2.8 }}
      >
        Most people don't know why this is happening.
      </motion.p>
    </div>
  </SlideShell>
);

export default SlideInsight;
