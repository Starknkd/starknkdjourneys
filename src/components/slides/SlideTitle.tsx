import { motion } from "framer-motion";
import logoWhite from "@/assets/logo-white.png";
import diverCover from "@/assets/diver-cover.jpg";
import FingerprintOverlay from "@/components/FingerprintOverlay";

const SlideTitle = () => (
  <section className="relative w-full min-h-screen overflow-hidden bg-background">
    {/* Full-bleed background image */}
    <img
      src={diverCover}
      alt="Deep-sea diver descending into dark water, representing the journey into the unknown"
      className="absolute inset-0 w-full h-full object-cover"
      style={{
        opacity: 0.28,
        filter: "contrast(1.35)",
      }}
    />

    {/* Radial focus */}
    <div
      className="absolute inset-0"
      style={{
        background: "radial-gradient(ellipse 44% 30% at 50% 62%, hsl(var(--background) / 0.45) 0%, transparent 100%)",
      }}
    />

    <FingerprintOverlay />

    {/* Content layer */}
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.img
        src={logoWhite}
        alt="Stark NKD logo"
        className="mx-auto h-16 md:h-32 lg:h-40 w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.95 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      <motion.p
        className="text-[0.6rem] md:text-xs tracking-[0.5em] uppercase font-light mt-2 mb-12 md:mb-20"
        style={{ color: "rgba(255,255,255,0.75)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
      >
        Calm under pressure
      </motion.p>

      {/* Keep the rest of your title copy exactly as-is below this */}
    </div>
  </section>
);

export default SlideTitle;
