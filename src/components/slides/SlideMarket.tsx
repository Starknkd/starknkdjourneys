import { motion } from "framer-motion";
import categoryBg from "@/assets/category-bg.jpg";

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const SlideMarket = () => (
  <div className="slide-root absolute inset-0 w-screen h-screen overflow-hidden bg-background">
    {/* Background texture — LEFT edge */}
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

    {/* Vignette */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at 40% 40%, transparent 25%, hsl(var(--background) / 0.5) 100%)",
      }}
    />

    {/* Content grid */}
    <motion.div
      className="relative z-10 h-full grid grid-cols-12 gap-8 px-12 md:px-24 lg:px-32 py-16"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      initial="hidden"
      animate="show"
    >
      {/* ── LEFT COLUMN: Narrative (cols 1–7) ── */}
      <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
        {/* Section label */}
        <motion.p
          variants={fade}
          className="text-xs tracking-[0.4em] uppercase mb-6 font-light"
          style={{ color: "hsl(var(--primary))", opacity: 0.85 }}
        >
          Category
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fade}
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[0.92] tracking-[-0.01em] text-foreground mb-10"
          style={{ maxWidth: "90%" }}
        >
          A new category
          <br />
          is emerging.
        </motion.h2>

        {/* Three forces intro */}
        <motion.p
          variants={fade}
          className="text-lg md:text-xl text-foreground/90 mb-5"
        >
          Three forces are converging:
        </motion.p>

        {/* Forces — vertical stack */}
        <div className="space-y-2 mb-8">
          {[
            "Preventative health is accelerating",
            "Chronic stress and hypertension are global priorities",
            "Wearables and real-time feedback are now mainstream",
          ].map((line) => (
            <motion.p
              key={line}
              variants={fade}
              className="text-base md:text-lg text-foreground/85"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Transition line */}
        <motion.p
          variants={fade}
          className="text-lg md:text-xl font-semibold text-foreground/95 mb-8"
        >
          But engagement is the bottleneck.
        </motion.p>

        {/* Failure statement */}
        <motion.div variants={fade} className="space-y-1">
          <p className="text-base md:text-lg text-foreground/80">
            Most users abandon wellness apps within weeks.
          </p>
          <p className="text-base md:text-lg text-foreground/80">
            Behaviour change remains unsolved.
          </p>
        </motion.div>
      </div>

      {/* ── RIGHT COLUMN: Data (cols 8–12) ── */}
      <div className="col-span-12 md:col-span-5 flex flex-col justify-center items-start md:items-end gap-10">
        {/* STAT 1 — Hypertension */}
        <motion.div
          variants={fade}
          className="w-full max-w-xs text-left md:text-right"
        >
          <p
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none"
            style={{ color: "hsl(var(--primary))" }}
          >
            24%
          </p>
          <p className="text-lg md:text-xl text-foreground/85 mt-2">
            US adults hypertensive
          </p>
          <p className="text-sm text-foreground/55 mt-1">
            Only 1 in 4 under control
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fade}
          className="w-full max-w-xs"
        >
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(to right, transparent, hsl(var(--foreground) / 0.15), transparent)",
            }}
          />
        </motion.div>

        {/* STAT 2 — Retention */}
        <motion.div
          variants={fade}
          className="w-full max-w-xs text-left md:text-right"
        >
          <p
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none"
            style={{ color: "hsl(var(--primary))" }}
          >
            5%
          </p>
          <p className="text-lg md:text-xl text-foreground/85 mt-2">
            Users stay beyond month 1
          </p>
          <p className="text-sm text-foreground/55 mt-1">
            Meditation apps
          </p>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default SlideMarket;
