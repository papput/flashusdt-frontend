import { MARKET_IDS, sortQuotes } from "@/lib/markets";
import type { MarketQuote } from "@/lib/types";
import { NextResponse } from "next/server";

export const revalidate = 30;

interface CoinGeckoMarket {
  id: string;
  symbol: string;
  name: string;
  current_price: number | null;
  price_change_percentage_24h: number | null;
  total_volume: number | null;
  market_cap: number | null;
}

export async function GET() {
  const apiKey = process.env.COINGECKO_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "CoinGecko API key is not configured." },
      { status: 500 },
    );
  }

  const url = new URL("https://api.coingecko.com/api/v3/coins/markets");
  url.searchParams.set("vs_currency", "usd");
  url.searchParams.set("ids", MARKET_IDS.join(","));
  url.searchParams.set("price_change_percentage", "24h");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": apiKey,
    },
    next: { revalidate: 30 },
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Unable to load live market data." },
      { status: 502 },
    );
  }

  const payload = (await response.json()) as CoinGeckoMarket[];
  const markets: MarketQuote[] = sortQuotes(
    payload.map((item) => ({
      id: item.id,
      symbol: item.symbol.toUpperCase(),
      name: item.name,
      price: item.current_price ?? 0,
      change24h: item.price_change_percentage_24h ?? 0,
      volume: item.total_volume ?? 0,
      marketCap: item.market_cap ?? 0,
    })),
  );

  return NextResponse.json({ markets });
}
