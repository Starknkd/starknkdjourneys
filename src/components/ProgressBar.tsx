interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }: ProgressBarProps) => (
  <div
    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-1.5 transition-opacity duration-500"
    style={{ opacity: current === 0 ? 0.3 : 1 }}
  >
    {Array.from({ length: total }, (_, i) => (
      <div
        key={i}
        className={`h-[2px] rounded-full transition-all duration-500 ${
          i === current
            ? "bg-primary w-10"
            : i < current
            ? "bg-stark-periwinkle w-6"
            : "bg-muted w-6"
        }`}
      />
    ))}
  </div>
);

export default ProgressBar;
