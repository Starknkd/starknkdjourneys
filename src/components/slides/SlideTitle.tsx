import SlideShell from "@/components/SlideShell";
import FingerprintOverlay from "@/components/FingerprintOverlay";
import { motion } from "framer-motion";
import logoWhite from "@/assets/logo-white.png";
import diverCover from "@/assets/diver-cover.jpg";

const SlideTitle = () => (
  <SlideShell slideKey={0}>
    {/* Diver background — higher opacity, no masking, full silhouette */}
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={diverCover}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: 0.25,
          filter: "contrast(1.3)",
        }}
      />
      {/* Subtle darker zone behind central text for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 42% 50% at 50% 50%, hsl(var(--background) / 0.55) 0%, transparent 100%)",
        }}
      />
    </div>
    <FingerprintOverlay />
    <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
      {/* Logo — fades in first */}
      <motion.img
        src={logoWhite}
        alt="Stark NKD"
        className="mx-auto h-24 md:h-32 lg:h-40 w-auto opacity-95"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.95 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* Tagline — appears immediately after logo */}
      <motion.p
        className="text-[0.65rem] md:text-xs tracking-[0.45em] uppercase font-light mt-3 mb-20"
        style={{ color: "#b393da" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.82 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
      >
        Calm under pressure
      </motion.p>

      {/* Headline — fades in last with slight upward motion */}
      <motion.div
        className="text-xl md:text-2xl lg:text-[1.7rem] uppercase tracking-[0.14em]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
      >
        <p className="text-foreground/90 leading-[2.2]">
          Journey into the unknown.
        </p>
        <p className="text-foreground/70 leading-[2.2]">
          Train your way back to control.
        </p>
      </motion.div>
    </div>
  </SlideShell>
);

export default SlideTitle;
