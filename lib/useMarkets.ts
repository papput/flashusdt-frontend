"use client";

import type { MarketQuote } from "@/lib/types";
import { useEffect, useState } from "react";

export function useMarkets() {
  const [markets, setMarkets] = useState<MarketQuote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch("/api/markets", { cache: "no-store" });
        if (!response.ok) return;
        const payload = (await response.json()) as { markets?: MarketQuote[] };
        if (!cancelled && payload.markets) {
          setMarkets(payload.markets);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void load();
    const timer = window.setInterval(() => {
      void load();
    }, 45000);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, []);

  return { markets, loading };
}
