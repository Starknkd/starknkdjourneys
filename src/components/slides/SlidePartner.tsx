import { motion } from "framer-motion";
import vrBg from "@/assets/vr-partner-bg.png";

const SlidePartner = () => (
  <div className="slide-root absolute inset-0 w-screen h-screen overflow-hidden bg-background">
    {/* Mobile background bleed */}
    <img
      src={vrBg}
      alt=""
      aria-hidden="true"
      className="md:hidden absolute inset-0 w-full h-full object-cover opacity-[0.18] z-0 pointer-events-none"
      style={{ filter: "saturate(0.85) contrast(1.05) brightness(0.9)" }}
    />
    <div className="md:hidden absolute inset-0 bg-background/70 z-0 pointer-events-none" />

    {/* Left text area — pure background (desktop only) */}
    <div className="hidden md:block absolute top-0 left-0 bottom-0 w-[58%] bg-background" />

    {/* Right-side image container (desktop only) */}
    <div className="absolute top-0 right-0 bottom-0 w-[42%] overflow-hidden hidden md:block">
      <img
        src={vrBg}
        alt="VR breathing regulation experience powered by Stark NKD"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "saturate(0.85) contrast(1.05) brightness(0.9)" }}
      />
      <div
        className="absolute top-0 left-0 bottom-0 w-[35%]"
        style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
      />
    </div>

    {/* Soft bleed fade (desktop only) */}
    <div
      className="absolute top-0 bottom-0 hidden md:block"
      style={{
        left: "53%",
        width: "8%",
        background: "linear-gradient(to right, hsl(var(--background)), transparent)",
      }}
    />

    {/* Content — left text zone */}
    <div className="relative z-10 flex items-center h-full">
      <div className="px-6 py-10 md:py-0 md:pl-20 lg:pl-28 md:pr-8 w-full md:max-w-[42%] flex flex-col justify-center h-full md:py-16">
        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[0.92] tracking-[-0.01em] text-foreground mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Build it with us.
        </motion.h2>

        {/* Transformation statement */}
        <motion.div
          className="text-base md:text-xl lg:text-2xl text-foreground/90 leading-relaxed mb-8 md:mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p>We're turning a daily struggle</p>
          <p>into something people return to.</p>
          <p>At scale.</p>
        </motion.div>

        {/* Partner offer */}
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <p className="text-lg md:text-2xl font-semibold text-primary mb-1">
            Seeking strategic partners
          </p>
          <p className="text-sm md:text-lg text-foreground/80">
            Prototype build + launch
          </p>
        </motion.div>

        {/* Conversion sequence */}
        <motion.div
          className="space-y-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <p className="text-sm md:text-lg text-foreground/75 italic mb-4">
            Don't take our word for it.
          </p>
          <p className="text-sm md:text-lg text-foreground/75">Step into the lab</p>
          <p className="text-sm md:text-lg text-foreground/75">Get your breathing blueprint</p>
          <p className="text-sm md:text-lg text-foreground/75">See how you handle pressure</p>
          <p className="text-sm md:text-lg text-foreground/90 mt-4 font-medium">Then decide.</p>
        </motion.div>
      </div>
    </div>
  </div>
);

export default SlidePartner;
