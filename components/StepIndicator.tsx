import { HiArrowPath } from "react-icons/hi2";

export function StepIndicator({
  step,
  isActivating,
}: {
  step: number;
  isActivating: boolean;
}) {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      {[1, 2].map((value) => (
        <div
          key={value}
          className={`w-11 h-11 flex items-center justify-center rounded-full font-display font-bold transition-all duration-300 ${
            step >= value
              ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-white shadow-lg shadow-cyan-500/30"
              : "bg-white/8 text-white/40 border border-white/15"
          }`}
        >
          {value === 2 && isActivating ? (
            <HiArrowPath className="animate-spin" />
          ) : (
            value
          )}
        </div>
      ))}
    </div>
  );
}
