import { useState, useCallback, useEffect } from "react";
import ProgressBar from "@/components/ProgressBar";
import SlideTitle from "@/components/slides/SlideTitle";
import SlideHook from "@/components/slides/SlideHook";
import SlideInsight from "@/components/slides/SlideInsight";
import SlideSolution from "@/components/slides/SlideSolution";
import SlideProduct from "@/components/slides/SlideProduct";
import SlideAI from "@/components/slides/SlideAI";
import SlideJourneys from "@/components/slides/SlideJourneys";
import SlideLab from "@/components/slides/SlideLab";
import SlideMarket from "@/components/slides/SlideMarket";
import SlideTraction from "@/components/slides/SlideTraction";
import SlideTeam from "@/components/slides/SlideTeam";
import SlideVision from "@/components/slides/SlideVision";
import SlideClose from "@/components/slides/SlideClose";

const slides = [
  SlideTitle,
  SlideHook,
  SlideInsight,
  SlideSolution,
  SlideProduct,
  SlideAI,
  SlideJourneys,
  SlideLab,
  SlideMarket,
  SlideTraction,
  SlideTeam,
  SlideVision,
  SlideClose,
];

const PitchDeck = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const navigate = useCallback(
    (direction: 1 | -1) => {
      setCurrent((prev) => Math.max(0, Math.min(total - 1, prev + direction)));
    },
    [total]
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
    <div className="relative w-screen h-screen bg-background overflow-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Current slide */}
      <CurrentSlide />

      {/* Progress */}
      <ProgressBar current={current} total={total} />
    </div>
  );
};

export default PitchDeck;
