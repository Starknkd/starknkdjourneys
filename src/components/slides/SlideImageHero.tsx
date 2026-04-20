import { CSSProperties } from "react";

interface SlideImageHeroProps {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
  imageStyle?: CSSProperties;
}

const SlideImageHero = ({ src, alt, caption, objectPosition = "center", imageStyle }: SlideImageHeroProps) => (
  <section className="slide-root image-hero relative w-full min-h-screen overflow-hidden bg-background">
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
      style={{ objectPosition, ...imageStyle }}
      loading="lazy"
    />

    {caption && (
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--background) / 0.92) 0%, hsl(var(--background) / 0.55) 45%, transparent 100%)",
        }}
      />
    )}

    {caption && (
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 sm:px-8 sm:pb-12">
        <p className="text-sm tracking-[0.3em] uppercase text-foreground/90 font-light">{caption}</p>
      </div>
    )}
  </section>
);

export default SlideImageHero;
