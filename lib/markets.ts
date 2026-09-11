import type { MarketQuote } from "@/lib/types";

export const MARKET_IDS = [
  "tether",
  "bitcoin",
  "tron",
  "ethereum",
  "binancecoin",
  "solana",
] as const;

export const MARKET_ORDER = ["USDT", "BTC", "TRX", "ETH", "BNB", "SOL"] as const;

export function formatUsdPrice(value: number) {
  if (value >= 1000) {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  if (value >= 1) {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 4,
    maximumFractionDigits: 6,
  });
}

export function formatCompactUsd(value: number) {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
  return `$${value.toFixed(0)}`;
}

export function formatChange(value: number) {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

export function sortQuotes(quotes: MarketQuote[]) {
  const rank = new Map<string, number>(
    MARKET_ORDER.map((symbol, index) => [symbol, index]),
  );
  return [...quotes].sort(
    (a, b) => (rank.get(a.symbol) ?? 99) - (rank.get(b.symbol) ?? 99),
  );
}
