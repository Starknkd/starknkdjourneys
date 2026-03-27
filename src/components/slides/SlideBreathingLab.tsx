import { motion } from "framer-motion";
import vrBg from "@/assets/vr-partner-bg.png";

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const SlideBreathingLab = () => (
  <div className="absolute inset-0 w-screen h-screen overflow-hidden bg-background">
    {/* RIGHT: VR image — 58% */}
    <div className="absolute right-0 top-0 h-full" style={{ width: "58%" }}>
      <img
        src={vrBg}
        alt="Person wearing VR headset in the Stark NKD breathing lab"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: "45% 50%",
          filter: "brightness(0.85) contrast(1.1) saturate(0.85)",
        }}
      />
      {/* Vignette on image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, transparent 30%, hsl(var(--background) / 0.4) 100%)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--background) / 0.3) 0%, transparent 25%)",
        }}
      />
    </div>

    {/* LEFT: solid dark zone — 45% */}
    <div
      className="absolute left-0 top-0 h-full z-10"
      style={{ width: "45%" }}
    >
      {/* Solid dark overlay for full legibility */}
      <div
        className="absolute inset-0"
        style={{ background: "hsl(var(--background) / 0.88)" }}
      />

      {/* Soft gradient blend into image (right edge) */}
      <div
        className="absolute top-0 bottom-0 right-0 z-10"
        style={{
          width: "30%",
          background:
            "linear-gradient(to right, hsl(var(--background) / 0.88) 0%, hsl(var(--background) / 0.5) 50%, transparent 100%)",
        }}
      />
    </div>

    {/* TEXT CONTENT */}
    <motion.div
      className="relative z-20 h-full flex flex-col justify-center pl-12 md:pl-24 lg:pl-32 pr-8"
      style={{ maxWidth: "42%" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
      initial="hidden"
      animate="show"
    >
      {/* Headline */}
      <motion.h2
        variants={fade}
        className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-foreground mb-8"
      >
        Build it with us.
      </motion.h2>

      {/* Transformation statement */}
      <motion.div variants={fade} className="space-y-0.5 mb-10">
        <p className="text-lg md:text-xl text-foreground/90">
          We're turning a daily struggle
        </p>
        <p className="text-lg md:text-xl text-foreground/90">
          into something people return to.
        </p>
        <p className="text-lg md:text-xl text-foreground/90">
          At scale.
        </p>
      </motion.div>

      {/* Partner offer */}
      <motion.div variants={fade} className="mb-10">
        <p className="text-lg md:text-xl font-semibold text-primary">
          £25k strategic partners
        </p>
        <p className="text-base md:text-lg text-foreground/80 mt-1">
          Prototype build + launch
        </p>
      </motion.div>

      {/* Conversion sequence */}
      <motion.div variants={fade} className="space-y-1">
        <p className="text-base md:text-lg text-foreground/85 mb-4">
          Don't take our word for it.
        </p>
        <p className="text-base md:text-lg text-foreground/80">
          Step into the lab
        </p>
        <p className="text-base md:text-lg text-foreground/80">
          Get your breathing blueprint
        </p>
        <p className="text-base md:text-lg text-foreground/80">
          See how you handle pressure
        </p>
        <p className="text-base md:text-lg text-foreground/90 font-medium mt-4">
          Then decide.
        </p>
      </motion.div>
    </motion.div>
  </div>
);

export default SlideBreathingLab;
