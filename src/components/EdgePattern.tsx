import brandPattern from "@/assets/brand-pattern-edge.jpg";

interface EdgePatternProps {
  /** Overall opacity of the pattern strips (0–1). Default 0.3 */
  opacity?: number;
}

/**
 * Renders the brand wave-pattern along left & right edges only,
 * fading to transparent toward the centre. Sits behind content (z-0).
 */
const EdgePattern = ({ opacity = 0.3 }: EdgePatternProps) => (
  <>
    {/* Left edge pattern */}
    <div
      className="absolute inset-y-0 left-0 w-[15%] pointer-events-none"
      style={{
        backgroundImage: `url(${brandPattern})`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
        opacity,
        filter: "contrast(1.1) brightness(0.9)",
        maskImage: "linear-gradient(to right, black 30%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, black 30%, transparent 100%)",
      }}
    />

    {/* Right edge pattern */}
    <div
      className="absolute inset-y-0 right-0 w-[15%] pointer-events-none"
      style={{
        backgroundImage: `url(${brandPattern})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        opacity,
        filter: "contrast(1.1) brightness(0.9)",
        maskImage: "linear-gradient(to left, black 30%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to left, black 30%, transparent 100%)",
      }}
    />
  </>
);

export default EdgePattern;
