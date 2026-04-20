interface SlideImageHeroProps {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
}

/**
 * Mobile-only full-bleed image slide.
 * The image fills the entire viewport. Caption overlays at bottom — never
 * pushes the image into a constrained band.
 */
const SlideImageHero = ({ src, alt, caption, objectPosition = "center" }: SlideImageHeroProps) => (
  <section className="slide-root image-hero relative w-full min-h-screen overflow-hidden bg-background">
    {/* Full-bleed image layer */}
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
      style={{ objectPosition, filter: "brightness(0.88) contrast(1.08)" }}
      loading="lazy"
    />
    {/* Subtle bottom gradient — only for caption legibility, not darkening the image */}
    {caption && (
      <div
        className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--background) / 0.85) 0%, hsl(var(--background) / 0.3) 60%, transparent 100%)",
        }}
      />
    )}
    {/* Content layer — overlays, never constrains image */}
    {caption && (
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10">
        <p className="text-sm tracking-[0.3em] uppercase text-foreground/90 font-light">
          {caption}
        </p>
      </div>
    )}
  </section>
);

export default SlideImageHero;
