import SlideShell from "@/components/SlideShell";
import { motion } from "framer-motion";
import execStress from "@/assets/exec-stress.png";
import brandWaveBg from "@/assets/brand-wave-bg.jpg";

const SlideInsight = () => (
  <SlideShell slideKey={2} backgroundImage={execStress}>
    {/* Brand wave pattern — edges only */}
    <div className="absolute inset-0 z-[1] pointer-events-none">
      <img
        src={brandWaveBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.3 }}
      />
      {/* Mask: hide pattern in centre, show at edges */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 55% at 50% 50%, hsl(var(--background)) 0%, transparent 100%)",
        }}
      />
    </div>

    <div className="max-w-5xl w-full text-left relative z-10">
      {/* Headline */}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      >
        It shows up everywhere.
      </motion.h2>

      {/* Staggered symptoms */}
      <div className="space-y-4 mb-14">
        {[
          "tight chest, shallow breathing",
          "reactive under pressure",
          "fatigue, poor focus",
        ].map((line, i) => (
          <motion.p
            key={line}
            className="text-lg md:text-xl lg:text-2xl"
            style={{ color: "#b393da" }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 1.0 + i * 0.5 }}
          >
            — {line}
          </motion.p>
        ))}
      </div>

      {/* Final line */}
      <motion.p
        className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 2.8 }}
      >
        Most people don't know why.
      </motion.p>
    </div>
  </SlideShell>
);

export default SlideInsight;
