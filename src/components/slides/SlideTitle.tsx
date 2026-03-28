import SlideShell from "@/components/SlideShell";
import FingerprintOverlay from "@/components/FingerprintOverlay";
import { motion } from "framer-motion";
import logoWhite from "@/assets/logo-white.png";
import diverCover from "@/assets/diver-cover.jpg";

const SlideTitle = () => (
  <SlideShell slideKey={0}>
    {/* Diver background — full coverage, cinematic depth */}
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={diverCover}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: 0.28,
          filter: "contrast(1.35)",
        }}
      />
      {/* Subtle darkening behind headline area only — keeps image alive elsewhere */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 44% 30% at 50% 62%, hsl(var(--background) / 0.45) 0%, transparent 100%)",
        }}
      />
    </div>
    <FingerprintOverlay />
    <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
      {/* Logo */}
      <motion.img
        src={logoWhite}
        alt="Stark NKD"
        className="mx-auto h-24 md:h-32 lg:h-40 w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.95 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* Tagline */}
      <motion.p
        className="text-[0.65rem] md:text-xs tracking-[0.5em] uppercase font-light mt-2 mb-20"
        style={{ color: "#b393da" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
      >
        Calm under pressure
      </motion.p>

      {/* Headline */}
      <motion.div
        className="text-xl md:text-2xl lg:text-[1.7rem] uppercase tracking-[0.16em] font-semibold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
      >
        <p className="text-foreground/90 leading-[1.7]">
          Journey into the unknown.
        </p>
        <p className="text-foreground/70 leading-[1.7]">
          Train your way back to control.
        </p>
      </motion.div>
    </div>
  </SlideShell>
);

export default SlideTitle;
