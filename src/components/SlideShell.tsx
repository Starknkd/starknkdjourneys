import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface SlideShellProps {
  children: ReactNode;
  slideKey: number;
  backgroundImage?: string;
  showFingerprint?: boolean;
  contentClassName?: string;
  align?: "center" | "top";
}

const SlideShell = ({ children, slideKey, backgroundImage, contentClassName = "", align = "top" }: SlideShellProps) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={slideKey}
      className="slide-root absolute inset-0 w-full h-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {backgroundImage && (
        <>
          <img src={backgroundImage} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="slide-overlay" />
        </>
      )}

      <div
        className={[
          "relative z-10 w-full min-h-screen",
          "flex flex-col md:flex-row",
          align === "center"
            ? "items-center justify-center"
            : "items-start justify-start md:items-center md:justify-center",
          "px-6 pt-16 pb-10",
          "sm:px-8 sm:pt-20 sm:pb-12",
          "md:px-24 md:pt-0 md:pb-0",
          "lg:px-32",
          contentClassName,
        ].join(" ")}
      >
        {children}
      </div>
    </motion.div>
  </AnimatePresence>
);

export default SlideShell;
