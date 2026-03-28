import SlideShell from "@/components/SlideShell";
import FingerprintOverlay from "@/components/FingerprintOverlay";
import { motion } from "framer-motion";
import logoWhite from "@/assets/logo-white.png";
import diverCover from "@/assets/diver-cover.jpg";

const SlideTitle = () => (
  <SlideShell slideKey={0}>
    {/* Diver background — reduced intensity, faded toward centre */}
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={diverCover}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: 0.2,
          filter: "contrast(1.2)",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 20%, black 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 20%, black 70%)",
        }}
      />
      {/* Calm focal zone — darker centre for logo + text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 55% at 50% 48%, hsl(var(--background) / 0.7) 0%, hsl(var(--background) / 0.3) 60%, transparent 100%)",
        }}
      />
    </div>
    <FingerprintOverlay />
    <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
      {/* Logo — fades in first */}
      <motion.img
        src={logoWhite}
        alt="Stark NKD"
        className="mx-auto h-24 md:h-32 lg:h-40 w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.95 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* Tagline — tighter to logo */}
      <motion.p
        className="text-[0.65rem] md:text-xs tracking-[0.5em] uppercase font-light mt-2 mb-16"
        style={{ color: "#b393da" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
      >
        Calm under pressure
      </motion.p>

      {/* Headline */}
      <motion.div
        className="text-xl md:text-2xl lg:text-[1.7rem] uppercase tracking-[0.19em] font-semibold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
      >
        <p className="text-foreground/90 leading-[1.8]">
          Journey into the unknown.
        </p>
        <p className="text-foreground/65 leading-[1.8]">
          Train your way back to control.
        </p>
      </motion.div>
    </div>
  </SlideShell>
);

export default SlideTitle;
