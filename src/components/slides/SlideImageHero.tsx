interface SlideImageHeroProps {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
}

/**
 * Mobile-only full-bleed image slide.
 * Used to preserve cinematic pacing on mobile when a primary narrative image
 * would otherwise be reduced to a faint background behind text.
 */
const SlideImageHero = ({ src, alt, caption, objectPosition = "center" }: SlideImageHeroProps) => (
  <div className="slide-root relative w-full overflow-hidden bg-background">
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
      style={{ objectPosition, filter: "brightness(0.85) contrast(1.1)" }}
      loading="lazy"
    />
    {/* Subtle bottom gradient for any caption legibility — no heavy darkening */}
    <div
      className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
      style={{
        background:
          "linear-gradient(to top, hsl(var(--background) / 0.75) 0%, transparent 100%)",
      }}
    />
    {caption && (
      <div className="relative z-10 mt-auto px-6 pb-2 w-full">
        <p className="text-sm tracking-[0.25em] uppercase text-foreground/85 font-light">
          {caption}
        </p>
      </div>
    )}
  </div>
);

export default SlideImageHero;
