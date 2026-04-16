import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface SlideShellProps {
  children: ReactNode;
  slideKey: number;
  backgroundImage?: string;
  showFingerprint?: boolean;
}

const SlideShell = ({ children, slideKey, backgroundImage }: SlideShellProps) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={slideKey}
      className="slide-root absolute inset-0 w-screen h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="slide-overlay" />
        </>
      )}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-12 md:px-24 lg:px-32 gap-0">
        {children}
      </div>
    </motion.div>
  </AnimatePresence>
);

export default SlideShell;
