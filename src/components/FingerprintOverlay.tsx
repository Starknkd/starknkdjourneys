import fingerprintImg from "@/assets/fingerprint.png";
import { motion } from "framer-motion";

const FingerprintOverlay = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.06 }}
    transition={{ duration: 2 }}
  >
    <motion.img
      src={fingerprintImg}
      alt=""
      className="absolute w-[140%] h-[140%] -top-[20%] -left-[20%] object-contain"
      animate={{
        scale: [1, 1.02, 1],
        rotate: [0, 0.5, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      loading="lazy"
      width={1024}
      height={1024}
    />
  </motion.div>
);

export default FingerprintOverlay;
