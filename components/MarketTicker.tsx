"use client";

import { formatChange, formatCompactUsd, formatUsdPrice } from "@/lib/markets";
import { useMarkets } from "@/lib/useMarkets";

const fallback = [
  { symbol: "USDT", price: "1.00", change: "+0.00%", volume: "$0", positive: true },
  { symbol: "BTC", price: "—", change: "+0.00%", volume: "$0", positive: true },
  { symbol: "TRX", price: "—", change: "+0.00%", volume: "$0", positive: true },
  { symbol: "ETH", price: "—", change: "+0.00%", volume: "$0", positive: true },
  { symbol: "BNB", price: "—", change: "+0.00%", volume: "$0", positive: true },
  { symbol: "SOL", price: "—", change: "+0.00%", volume: "$0", positive: true },
];

export function MarketTicker() {
  const { markets } = useMarkets();
  const tickers =
    markets.length > 0
      ? markets.map((item) => ({
          symbol: item.symbol,
          price: formatUsdPrice(item.price),
          change: formatChange(item.change24h),
          volume: formatCompactUsd(item.volume),
          positive: item.change24h >= 0,
        }))
      : fallback;
  const loop = [...tickers, ...tickers];

  return (
    <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 py-2.5 sm:py-3 ticker-mask">
      <div className="flex w-max animate-marquee gap-6 sm:gap-10 px-4 sm:px-6">
        {loop.map((item, index) => (
          <div
            key={`${item.symbol}-${index}`}
            className="flex items-center gap-2 sm:gap-3 whitespace-nowrap font-mono text-xs sm:text-sm"
          >
            <span className="text-cyan-300">{item.symbol}</span>
            <span className="text-white">${item.price}</span>
            <span className={item.positive ? "text-emerald-400" : "text-rose-400"}>
              {item.change}
            </span>
            <span className="text-white/45">Vol {item.volume}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
