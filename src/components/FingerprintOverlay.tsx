import { motion } from "framer-motion";

const FingerprintOverlay = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.04 }}
    transition={{ duration: 2.5 }}
  >
    <motion.div
      className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%]"
      style={{
        background: `repeating-conic-gradient(
          from 0deg at 50% 50%,
          hsla(268, 44%, 72%, 0.08) 0deg,
          transparent 1.5deg,
          transparent 6deg
        )`,
        borderRadius: "50%",
      }}
      animate={{
        scale: [1, 1.015, 1],
        rotate: [0, 0.3, 0],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </motion.div>
);

export default FingerprintOverlay;
