import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideContentProps {
  children: ReactNode;
  className?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const SlideContent = ({ children, className = "" }: SlideContentProps) => (
  <motion.div
    variants={container}
    initial="hidden"
    animate="show"
    className={`max-w-5xl w-full ${className}`}
  >
    {children}
  </motion.div>
);

export const SlideItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div variants={item} className={className}>
    {children}
  </motion.div>
);

export default SlideContent;
