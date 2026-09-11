import type { ReactNode } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";

export function PillBadge({
  children,
  tone = "cyan",
}: {
  children: ReactNode;
  tone?: "purple" | "cyan" | "yellow";
}) {
  const tones = {
    purple: "from-fuchsia-500/20 to-violet-500/10 border-fuchsia-400/25 text-fuchsia-200",
    cyan: "from-cyan-400/20 to-indigo-500/10 border-cyan-300/25 text-cyan-200",
    yellow: "from-amber-400/20 to-orange-500/10 border-amber-300/25 text-amber-200",
  };

  return (
    <div
      className={`inline-flex max-w-full items-center gap-2 px-3 sm:px-4 py-2 rounded-full border bg-gradient-to-r backdrop-blur-xl text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.22em] mb-6 ${tones[tone]}`}
    >
      <HiOutlineSparkles className="text-sm" />
      {children}
    </div>
  );
}
