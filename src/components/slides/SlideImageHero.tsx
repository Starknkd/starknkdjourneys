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

    <div
      className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none z-[1]"
      style={{
        background:
          "linear-gradient(to top, hsl(var(--background) / 1) 0%, hsl(var(--background) / 0.85) 25%, hsl(var(--background) / 0.5) 55%, transparent 100%)",
      }}
    />

    <div
      className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none z-[1]"
      style={{
        background:
          "linear-gradient(to top, hsl(var(--background) / 1) 0%, hsl(var(--background) / 0.7) 35%, transparent 85%)",
      }}
    />

    {caption && (
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 sm:px-8 sm:pb-12">
        <p className="text-[0.8rem] tracking-[0.25em] uppercase text-foreground/80 font-light">{caption}</p>
      </div>
    )}
  </section>
);

export default SlideImageHero;
