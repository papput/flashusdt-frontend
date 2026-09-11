import {
  CircuitSvg,
  HexGridSvg,
  NoiseOverlay,
  OrbitRingsSvg,
  UsdtCoinSvg,
} from "@/components/graphics/CryptoArt";

export function PageBackground({
  variant = "default",
}: {
  variant?: "default" | "soft";
}) {
  const glow = variant === "soft" ? "opacity-70" : "opacity-100";

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#05070f]">
      <div className={`absolute inset-0 ${glow}`}>
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/18 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-[10%] -right-24 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[110px]" />
        <div className="absolute bottom-[-80px] -left-24 h-[380px] w-[380px] rounded-full bg-emerald-500/12 blur-[100px]" />
      </div>
      <HexGridSvg className="absolute inset-0 h-full w-full opacity-70" />
      <OrbitRingsSvg className="absolute right-[-80px] top-24 w-[420px] opacity-40 animate-spin-slow hidden md:block" />
      <UsdtCoinSvg
        id="bgCoin"
        className="absolute left-[6%] top-[22%] w-28 opacity-70 animate-float hidden lg:block"
      />
      <CircuitSvg className="absolute bottom-16 left-1/2 w-[480px] -translate-x-1/2 opacity-30" />
      <NoiseOverlay />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05070f]" />
    </div>
  );
}
