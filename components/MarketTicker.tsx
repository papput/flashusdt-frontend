const tickers = [
  { symbol: "USDT", price: "1.0002", change: "+0.01%" },
  { symbol: "BTC", price: "43,250", change: "+2.45%" },
  { symbol: "TRX", price: "0.0921", change: "+0.85%" },
  { symbol: "ETH", price: "2,318", change: "+1.12%" },
  { symbol: "BNB", price: "582.40", change: "+0.64%" },
  { symbol: "SOL", price: "148.70", change: "+3.21%" },
];

export function MarketTicker() {
  const loop = [...tickers, ...tickers];

  return (
    <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 py-3 mb-10">
      <div className="flex w-max animate-marquee gap-10 px-6">
        {loop.map((item, index) => (
          <div
            key={`${item.symbol}-${index}`}
            className="flex items-center gap-3 whitespace-nowrap font-mono text-sm"
          >
            <span className="text-cyan-300">{item.symbol}</span>
            <span className="text-white">${item.price}</span>
            <span className="text-emerald-400">{item.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
