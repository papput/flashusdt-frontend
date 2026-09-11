export const BRAND_LOGO_SRC = "/logo.png";

export function BrandMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    // Native img keeps PNG alpha. next/image can flatten it to a black square.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={BRAND_LOGO_SRC}
      alt=""
      className={`bg-transparent object-contain ${className}`}
      aria-hidden="true"
    />
  );
}

export function BrandLogo({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div className="relative shrink-0 bg-transparent">
        <div className="pointer-events-none absolute inset-0 rounded-full bg-cyan-400/25 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={BRAND_LOGO_SRC}
          alt="FLASH USDT PRO"
          className="relative h-12 w-12 sm:h-[3.35rem] sm:w-[3.35rem] bg-transparent object-contain drop-shadow-[0_0_18px_rgba(56,189,248,0.45)] group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      {compact ? null : (
        <div className="text-left">
          <span className="block font-display text-[1.35rem] leading-none font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            FLASH USDT
          </span>
          <span className="block text-[10px] uppercase tracking-[0.28em] text-cyan-300/80 mt-1">
            Pro Network
          </span>
        </div>
      )}
    </div>
  );
}
