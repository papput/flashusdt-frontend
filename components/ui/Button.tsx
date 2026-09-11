import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "gold" | "ghost" | "success";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 text-white shadow-lg shadow-cyan-500/25",
  gold: "bg-gradient-to-r from-amber-300 via-orange-400 to-fuchsia-500 text-neutral-950 shadow-lg shadow-amber-500/25",
  ghost:
    "bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-cyan-400/40",
  success:
    "bg-gradient-to-r from-emerald-400 to-cyan-500 text-white shadow-lg shadow-emerald-500/25",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  return (
    <button
      {...props}
      className={`btn-premium relative z-0 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm sm:text-base font-semibold text-center whitespace-normal break-words transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 inline-flex max-w-full items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
