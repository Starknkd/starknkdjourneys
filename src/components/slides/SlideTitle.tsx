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
          opacity: 0.2,
          filter: "contrast(1.25)",
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
        className="text-xs md:text-sm text-muted-foreground/70 tracking-[0.35em] uppercase font-light mt-4 mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
      >
        Calm under pressure
      </motion.p>

      {/* Headline — fades in last with slight upward motion */}
      <motion.p
        className="text-xl md:text-2xl lg:text-[1.7rem] text-muted-foreground tracking-[0.18em] uppercase leading-[1.8]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
      >
        Journey into the unknown.
        <br />
        Train your way back to control.
      </motion.p>
    </div>
  </SlideShell>
);

export default SlideTitle;
