import { useState, useCallback, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import EdgePattern from "@/components/EdgePattern";
import ProgressBar from "@/components/ProgressBar";
import SlideTitle from "@/components/slides/SlideTitle";
import SlideHook from "@/components/slides/SlideHook";
import SlideInsight from "@/components/slides/SlideInsight";
import SlideSolution from "@/components/slides/SlideSolution";
import SlideLandscape from "@/components/slides/SlideLandscape";
import SlideProduct from "@/components/slides/SlideProduct";

import SlideJourneys, { SlideJourneysRef } from "@/components/slides/SlideJourneys";
import SlideLab from "@/components/slides/SlideLab";
import SlideBreathingLab from "@/components/slides/SlideBreathingLab";
import SlideMarket from "@/components/slides/SlideMarket";
import SlideTraction from "@/components/slides/SlideTraction";
import SlideTeam from "@/components/slides/SlideTeam";

import SlideBiotravel from "@/components/slides/SlideBiotravel";
import SlidePartner from "@/components/slides/SlidePartner";
import SlideClose from "@/components/slides/SlideClose";
import SlideImageHero from "@/components/slides/SlideImageHero";

import femaleExec from "@/assets/female-exec.png";
import landscapeImg from "@/assets/landscape-wim.webp";
import labVR from "@/assets/lab-vr-headset.jpg";
import vrBg from "@/assets/vr-partner-bg.png";

const JOURNEYS_INDEX = 6;

const slides = [
  SlideTitle,
  SlideHook,
  SlideInsight,
  SlideSolution,
  SlideLandscape,
  SlideProduct,
  SlideJourneys,
  SlideLab,
  SlideBreathingLab,
  SlideTraction,
  SlideTeam,
  SlideMarket,
  SlideBiotravel,
  SlidePartner,
  SlideClose,
];

const PitchDeck = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const journeysRef = useRef<SlideJourneysRef>(null);
  const isMobile = useIsMobile();

  const navigate = useCallback(
    (direction: 1 | -1) => {
      if (current === JOURNEYS_INDEX && journeysRef.current) {
        const consumed = direction === 1 ? journeysRef.current.handleNext() : journeysRef.current.handlePrev();
        if (consumed) return;
      }
      setCurrent((prev) => Math.max(0, Math.min(total - 1, prev + direction)));
    },
    [total, current],
  );

  useEffect(() => {
    if (isMobile) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        navigate(1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        navigate(-1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate, isMobile]);

  // Mobile: stack all slides vertically. Primary narrative images get
  // dedicated full-bleed image slides interleaved between text slides
  // to preserve cinematic pacing and visual identity.
  if (isMobile) {
    type MobileEntry =
      | { kind: "slide"; Component: (typeof slides)[number]; key: string }
      | { kind: "image"; src: string; alt: string; caption?: string; objectPosition?: string; key: string };

    const mobileFlow: MobileEntry[] = [];
    slides.forEach((Slide, i) => {
      mobileFlow.push({ kind: "slide", Component: Slide, key: `s-${i}` });
      if (Slide === SlideSolution) {
        mobileFlow.push({
          kind: "image",
          src: femaleExec,
          alt: "Professional under pressure — the moment a system tips into dysregulation",
          caption: "The mechanism, made visible",
          objectPosition: "30% center",
          key: "img-exec",
        });
      } else if (Slide === SlideLandscape) {
       mobileFlow.push({
  kind: "image",
  src: landscapeImg,
  alt: "Extreme cold exposure training — the industry's default answer",
  caption: "Dangerous media hype.",
  imageStyle: { filter: "brightness(0.9) contrast(0.98) saturate(0.9)" },
  captionStyle: {
    fontSize: "0.85rem",   // ↓ slightly reduced
    opacity: 0.8,
  },
  key: "img-landscape",
});
          key: "img-landscape",
        });
      } else if (Slide === SlideBreathingLab) {
        mobileFlow.push({
          kind: "image",
          src: labVR,
          alt: "Inside the Stark NKD breathing lab — VR headset, live biofeedback",
          caption: "Inside the lab",
          key: "img-lab",
        });
      } else if (Slide === SlidePartner) {
        mobileFlow.push({
          kind: "image",
          src: vrBg,
          alt: "VR breathing regulation experience — what partners help us scale",
          caption: "Build it with us",
          key: "img-partner",
        });
      }
    });

    return (
      <div className="relative w-full bg-background">
        <div className="grain-overlay" />
        {mobileFlow.map((entry, i) => (
          <section
            key={entry.key}
            className="relative w-full overflow-hidden border-b border-foreground/5"
            aria-label={`Slide ${i + 1}`}
          >
            {entry.kind === "slide" ? (
              <entry.Component />
            ) : (
              <SlideImageHero
                src={entry.src}
                alt={entry.alt}
                caption={entry.caption}
                objectPosition={entry.objectPosition}
              />
            )}
          </section>
        ))}
      </div>
    );
  }

  // Desktop: single slide at a time
  const CurrentSlide = slides[current];

  return (
    <div className="relative w-screen h-screen bg-background overflow-y-auto">
      <div className="grain-overlay" />
      <EdgePattern opacity={0.3} />
      {current === JOURNEYS_INDEX ? <SlideJourneys ref={journeysRef} /> : <CurrentSlide />}
      <ProgressBar current={current} total={total} />
    </div>
  );
};

export default PitchDeck;
