import { motion } from "framer-motion";
import SlideShell from "@/components/SlideShell";

const SlideProduct = () => {
  // Node positions for triangular layout (centered in viewbox)
  const nodes = [
    { label: "breathing\nbehaviour", cx: 300, cy: 120, color: "hsl(var(--stark-sunset))", delay: 1.4 },
    { label: "attention\ncontrol", cx: 480, cy: 360, color: "hsl(var(--foreground) / 0.85)", delay: 1.8 },
    { label: "emotional\nregulation", cx: 120, cy: 360, color: "hsl(var(--stark-periwinkle))", delay: 2.2 },
  ];

  const lines = [
    { x1: 300, y1: 120, x2: 480, y2: 360 },
    { x1: 480, y1: 360, x2: 120, y2: 360 },
    { x1: 120, y1: 360, x2: 300, y2: 120 },
  ];

  return (
    <SlideShell slideKey={6}>
      <div className="max-w-5xl w-full flex flex-col items-center text-center gap-6 md:gap-8">
        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We train regulation.
        </motion.h2>

        {/* Sub */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Not hacks. Not techniques.<br />
          <span className="text-foreground font-semibold">A system.</span>
        </motion.p>

        {/* System Diagram */}
        <motion.div
          className="w-full max-w-md md:max-w-lg aspect-square relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <svg viewBox="0 0 600 480" className="w-full h-full">
            <defs>
              {/* Fingerprint texture pattern */}
              <pattern id="fp-texture" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.07" />
                <circle cx="30" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.06" />
                <circle cx="30" cy="30" r="16" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.05" />
                <circle cx="30" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
              </pattern>

              {/* Glow filters per node */}
              <filter id="glow-sunset" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feFlood floodColor="hsl(2, 77%, 64%)" floodOpacity="0.25" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-white" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feFlood floodColor="white" floodOpacity="0.15" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-periwinkle" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feFlood floodColor="hsl(268, 44%, 72%)" floodOpacity="0.2" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connection lines */}
            {lines.map((line, i) => (
              <motion.line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="hsl(var(--stark-periwinkle) / 0.25)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.6 + i * 0.2 }}
              />
            ))}

            {/* Nodes */}
            {nodes.map((node, i) => {
              const filters = ["glow-sunset", "glow-white", "glow-periwinkle"];
              return (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: node.delay }}
                >
                  {/* Outer glow circle */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="68"
                    fill={node.color}
                    opacity="0.08"
                    filter={`url(#${filters[i]})`}
                  />

                  {/* Main circle */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="58"
                    fill="none"
                    stroke={node.color}
                    strokeWidth="1.5"
                    opacity="0.6"
                  />

                  {/* Fingerprint texture fill */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="56"
                    fill="url(#fp-texture)"
                    stroke="none"
                  />

                  {/* Inner subtle fill */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="56"
                    fill={node.color}
                    opacity="0.06"
                  />

                  {/* Label */}
                  {node.label.split("\n").map((line, li) => (
                    <text
                      key={li}
                      x={node.cx}
                      y={node.cy + (li - 0.5) * 18}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={node.color}
                      fontSize="13"
                      fontFamily="Space Grotesk, sans-serif"
                      fontWeight="500"
                      letterSpacing="0.05em"
                    >
                      {line}
                    </text>
                  ))}

                  {/* Subtle pulse animation */}
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r="60"
                    fill="none"
                    stroke={node.color}
                    strokeWidth="0.8"
                    opacity="0.2"
                    animate={{
                      r: [60, 66, 60],
                      opacity: [0.2, 0.08, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.6,
                    }}
                  />
                </motion.g>
              );
            })}
          </svg>
        </motion.div>

        {/* Closing line */}
        <motion.p
          className="text-base md:text-lg tracking-[0.2em] uppercase text-accent font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.4 }}
        >
          Simple. Trainable. Scalable.
        </motion.p>
      </div>
    </SlideShell>
  );
};

export default SlideProduct;
