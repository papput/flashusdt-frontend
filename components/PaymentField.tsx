import type { InputHTMLAttributes, ReactNode } from "react";

interface PaymentFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ReactNode;
}

export function PaymentField({ label, icon, ...props }: PaymentFieldProps) {
  return (
    <div>
      <label className="flex items-center gap-2 mb-3 text-white/70 text-sm font-medium">
        {icon}
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-white/6 border border-white/12 px-4 py-4 rounded-2xl text-white placeholder-white/35 focus:outline-none focus:ring-2 focus:ring-cyan-400/70 font-mono text-sm"
      />
    </div>
  );
}
