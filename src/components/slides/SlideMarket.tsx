import { motion } from "framer-motion";
import categoryBg from "@/assets/category-bg.jpg";

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const SlideMarket = () => (
  <div className="slide-root absolute inset-0 w-screen h-screen overflow-hidden bg-background">
    <img
      src={categoryBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      style={{
        opacity: 0.4,
        filter: "contrast(1.15) brightness(0.7)",
        maskImage:
          "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 18%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 82%, rgba(0,0,0,0.9) 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 18%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 82%, rgba(0,0,0,0.9) 100%)",
      }}
    />

    <div
      className="absolute inset-0"
      style={{
        background: "radial-gradient(ellipse at 40% 40%, transparent 25%, hsl(var(--background) / 0.5) 100%)",
      }}
    />

    {/* Content grid */}
    <motion.div
      className="relative z-10 h-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 px-6 md:px-24 lg:px-32 py-10 md:py-16"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      initial="hidden"
      animate="show"
    >
      {/* LEFT COLUMN: Narrative */}
      <div className="col-span-1 md:col-span-7 flex flex-col justify-center">
        <motion.p
          variants={fade}
          className="text-xs tracking-[0.4em] uppercase mb-6 font-light"
          style={{ color: "hsl(var(--primary))", opacity: 0.85 }}
        >
          Category
        </motion.p>

        <motion.h2
          variants={fade}
          className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-[0.92] tracking-[-0.01em] text-foreground mb-8 md:mb-10"
        >
          A new category
          <br />
          is emerging.
        </motion.h2>

        <motion.p variants={fade} className="text-base md:text-xl text-foreground/90 mb-5">
          Three forces are converging:
        </motion.p>

        <div className="space-y-2 mb-6 md:mb-8">
          {[
            "Preventative health is accelerating",
            "Chronic stress and hypertension are global priorities",
            "Wearables and real-time feedback are now mainstream",
          ].map((line) => (
            <motion.p key={line} variants={fade} className="text-sm md:text-lg text-foreground/85">
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p variants={fade} className="text-base md:text-xl font-semibold text-foreground/95 mb-6 md:mb-8">
          But engagement is the bottleneck.
        </motion.p>

        <motion.div variants={fade} className="space-y-1">
          <p className="text-sm md:text-lg text-foreground/80">Most users abandon wellness apps within weeks.</p>
          <p className="text-sm md:text-lg text-foreground/80">Behaviour change remains unsolved.</p>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: Data */}
      <div className="col-span-1 md:col-span-5 flex flex-col justify-center items-start md:items-end gap-8 md:gap-10">
        <motion.div variants={fade} className="w-full max-w-xs text-left md:text-right">
          <p className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none" style={{ color: "hsl(var(--primary))" }}>
            24%
          </p>
          <p className="text-base md:text-xl text-foreground/85 mt-2">US adults hypertensive</p>
          <p className="text-xs md:text-sm text-foreground/55 mt-1">Only 1 in 4 under control</p>
        </motion.div>

        <motion.div variants={fade} className="w-full max-w-xs">
          <div
            className="h-px w-full"
            style={{ background: "linear-gradient(to right, transparent, hsl(var(--foreground) / 0.15), transparent)" }}
          />
        </motion.div>

        <motion.div variants={fade} className="w-full max-w-xs text-left md:text-right">
          <p className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none" style={{ color: "hsl(var(--primary))" }}>
            5%
          </p>
          <p className="text-base md:text-xl text-foreground/85 mt-2">Users stay beyond month 1</p>
          <p className="text-xs md:text-sm text-foreground/55 mt-1">Meditation apps</p>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default SlideMarket;
