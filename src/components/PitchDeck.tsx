import { useState, useCallback, useEffect, useRef } from "react";
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

const JOURNEYS_INDEX = 6; // SlideJourneys position in slides array

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

  const navigate = useCallback(
    (direction: 1 | -1) => {
      if (current === JOURNEYS_INDEX && journeysRef.current) {
        const consumed = direction === 1
          ? journeysRef.current.handleNext()
          : journeysRef.current.handlePrev();
        if (consumed) return;
      }
      setCurrent((prev) => Math.max(0, Math.min(total - 1, prev + direction)));
    },
    [total, current]
  );

  useEffect(() => {
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
  }, [navigate]);

  const CurrentSlide = slides[current];

  return (
    <div className="relative w-screen h-screen bg-background overflow-y-auto">
      <div className="grain-overlay" />
      <EdgePattern opacity={0.3} />
      {current === JOURNEYS_INDEX ? (
        <SlideJourneys ref={journeysRef} />
      ) : (
        <CurrentSlide />
      )}
      <ProgressBar current={current} total={total} />
    </div>
  );
};

export default PitchDeck;
