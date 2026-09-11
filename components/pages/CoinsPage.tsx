"use client";

import { PageShell } from "@/components/PageShell";
import { TokenLogo } from "@/components/TokenLogo";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { useAppState } from "@/lib/context";
import { coins } from "@/lib/data";
import { useRouter } from "next/navigation";
import { RiFlashlightFill, RiShieldFlashFill, RiStarFill, RiTimerFlashFill } from "react-icons/ri";
import { TbTrendingDown, TbTrendingUp } from "react-icons/tb";

export function CoinsPage() {
  const router = useRouter();
  const { setSelectedCoin } = useAppState();

  return (
    <PageShell>
      <header className="relative pt-36 pb-12 px-6 text-center">
        <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-4 text-gradient">
          Flash Transfer Coins
        </h1>
        <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
          Choose from our supported cryptocurrencies for instant flash
          transfers with customizable durations.
        </p>
      </header>

      <section className="relative px-4 sm:px-8 pb-8">
        <div className="container mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coins.map((coin) => (
            <GlassCard
              key={coin.id}
              className={`overflow-hidden ${coin.popular ? "glow-ring" : ""}`}
            >
              {coin.popular ? (
                <div className="absolute top-4 right-4 z-10 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-3 py-1 text-xs font-bold flex items-center gap-1">
                  <RiStarFill /> Popular
                </div>
              ) : null}
              <div className={`p-6 text-white bg-gradient-to-r ${coin.gradient}`}>
                <div className="flex items-center justify-between mb-4">
                  <TokenLogo symbol={coin.symbol} className="w-14 h-14 drop-shadow-lg" />
                  <div className="text-right">
                    <div className="font-mono text-2xl font-bold">{coin.price}</div>
                    <div
                      className={`flex items-center justify-end text-sm ${
                        coin.isPositive ? "text-emerald-100" : "text-rose-100"
                      }`}
                    >
                      {coin.isPositive ? <TbTrendingUp /> : <TbTrendingDown />}
                      <span className="ml-1">{coin.change}</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold mb-1">{coin.name}</h3>
                <p className="text-sm opacity-90 flex justify-between font-mono">
                  <span>{coin.symbol}</span>
                  <span>Cap: {coin.marketCap}</span>
                </p>
              </div>
              <div className="p-6">
                <p className="text-white/65 mb-5">{coin.description}</p>
                <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/50 mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2 mb-6">
                  {coin.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-white/75">
                      <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-2xl bg-gradient-to-r ${coin.gradient}`}
                  onClick={() => {
                    setSelectedCoin(coin);
                    router.push("/form");
                  }}
                >
                  <RiFlashlightFill />
                  Flash Transfer
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="relative px-6 py-16">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: RiFlashlightFill,
              title: "Lightning Fast",
              text: "Transfers completed in seconds, not minutes",
              color: "from-cyan-400 to-blue-500",
            },
            {
              icon: RiShieldFlashFill,
              title: "Secure & Private",
              text: "Advanced encryption and privacy protection",
              color: "from-violet-500 to-fuchsia-500",
            },
            {
              icon: RiTimerFlashFill,
              title: "Flexible Duration",
              text: "Customizable transfer durations from hours to days",
              color: "from-emerald-400 to-teal-500",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.title} className="p-8">
                <div
                  className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl`}
                >
                  <Icon />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/60">{item.text}</p>
              </GlassCard>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
