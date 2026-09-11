import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`glass-panel relative rounded-[28px] ${
        hover
          ? "transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/30"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-14">
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 px-1 break-words">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base sm:text-lg md:text-xl text-white/65 max-w-3xl mx-auto leading-relaxed px-1">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
