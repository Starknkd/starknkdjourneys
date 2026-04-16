import { motion } from "framer-motion";
import bgTexture from "@/assets/business-model-bg.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const SlideTraction = () => (
  <div className="slide-root absolute inset-0 w-screen h-screen flex items-center justify-center overflow-hidden bg-background">
    <img
      src={bgTexture}
      alt=""
      className="absolute left-0 top-0 h-full w-[40%] object-cover pointer-events-none"
      style={{ opacity: 0.12, filter: "brightness(0.6) saturate(0.5)", maskImage: "linear-gradient(to right, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)" }}
    />
    <img
      src={bgTexture}
      alt=""
      className="absolute right-0 top-0 h-full w-[40%] object-cover pointer-events-none"
      style={{ opacity: 0.12, filter: "brightness(0.6) saturate(0.5)", transform: "scaleX(-1)", maskImage: "linear-gradient(to right, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)" }}
    />

    <motion.div
      className="relative z-10 w-full max-w-6xl px-6 md:px-12"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
      initial="hidden"
      animate="show"
    >
      <motion.p
        variants={fadeIn}
        className="text-xs tracking-[0.4em] uppercase text-primary font-light mb-6 md:mb-8 text-center"
        style={{ opacity: 0.85 }}
      >
        Business Model
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
        {/* COLUMN 1 — ENTRY */}
        <motion.div variants={fadeIn} className="flex flex-col gap-4 md:gap-5">
          <div className="mb-1 md:mb-2">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-1">Entry</p>
            <h3 className="text-lg md:text-xl font-bold text-foreground">Start here</h3>
          </div>

          <div className="rounded-xl border border-border/60 bg-card/40 p-4 md:p-5 backdrop-blur-sm">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-base md:text-lg font-bold text-foreground">Reset</span>
              <span className="text-base md:text-lg font-bold text-primary">£24.95</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              → 7-day programme + live workshop<br />
              → unlock your first journey
            </p>
          </div>

          <div className="rounded-xl border border-border/60 bg-card/40 p-4 md:p-5 backdrop-blur-sm">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-base md:text-lg font-bold text-foreground">Explore</span>
              <span className="text-base md:text-lg font-bold text-stark-periwinkle">Free</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Journeys (Basic)<br />
              → one guided route<br />
              → simple progression
            </p>
            <p className="text-[0.65rem] md:text-xs text-muted-foreground/60 mt-2 md:mt-3 italic">
              no coaching · no biometrics · no rewards
            </p>
          </div>
        </motion.div>

        {/* COLUMN 2 — CORE */}
        <motion.div variants={fadeIn} className="flex flex-col gap-4 md:gap-5 relative">
          <div className="hidden md:block absolute -left-4 lg:-left-5 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-stark-periwinkle/30 rotate-45" />

          <div className="mb-1 md:mb-2">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-1">Core Experience</p>
            <h3 className="text-lg md:text-xl font-bold text-foreground">Make it personal</h3>
          </div>

          <div className="rounded-xl border border-primary/30 bg-card/50 p-4 md:p-5 backdrop-blur-sm ring-1 ring-primary/10">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-base md:text-lg font-bold text-foreground">Journeys+</span>
              <span className="text-base md:text-lg font-bold text-primary">£12/month</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              → coaching + biometrics<br />
              → full progression system
            </p>
          </div>
        </motion.div>

        {/* COLUMN 3 — EXPANSION */}
        <motion.div variants={fadeIn} className="flex flex-col gap-4 md:gap-5 relative">
          <div className="hidden md:block absolute -left-4 lg:-left-5 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-stark-periwinkle/30 rotate-45" />

          <div className="mb-1 md:mb-2">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-1">Expansion</p>
            <h3 className="text-lg md:text-xl font-bold text-foreground">Go further</h3>
          </div>

          <div className="rounded-xl border border-border/60 bg-card/40 p-4 md:p-5 backdrop-blur-sm">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-base md:text-lg font-bold text-foreground">Challenges</span>
              <span className="text-base md:text-lg font-bold text-primary">£19 / £29 / £49</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-2 md:mb-3">
              → choose your destination<br />
              → complete the journey
            </p>
            <div className="flex flex-col gap-1 text-[0.65rem] md:text-xs text-stark-periwinkle/80">
              <span>1 week — digital coin</span>
              <span>2 weeks — silver coin</span>
              <span>4 weeks — gold coin</span>
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-card/40 p-4 md:p-5 backdrop-blur-sm">
            <p className="text-xs md:text-sm font-semibold text-foreground/80 mb-2">Make it real</p>
            <div className="space-y-1.5 text-xs md:text-sm text-muted-foreground">
              <p>Breathing pacer cushion — <span className="text-foreground font-medium">£24.95</span></p>
              <p>Breathing ball — <span className="text-foreground font-medium">£12.95</span></p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn}
        className="hidden md:flex items-center justify-center gap-3 mt-8 text-xs tracking-[0.2em] uppercase text-muted-foreground/50"
      >
        <span>Entry</span>
        <span className="w-8 h-px bg-stark-periwinkle/20" />
        <span>Subscription</span>
        <span className="w-8 h-px bg-stark-periwinkle/20" />
        <span>Expansion</span>
      </motion.div>
    </motion.div>
  </div>
);

export default SlideTraction;
