"use client";

import { PageShell } from "@/components/PageShell";
import { PillBadge } from "@/components/PillBadge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { networks } from "@/lib/data";
import { useRouter } from "next/navigation";

export function NetworkPage() {
  const router = useRouter();

  return (
    <PageShell variant="soft">
      <header className="relative pt-28 sm:pt-36 pb-12 px-4 sm:px-6 text-center">
        <PillBadge>Select USDT Network</PillBadge>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gradient">
          Choose Your Preferred Network
        </h1>
        <p className="text-lg text-white/65 max-w-2xl mx-auto">
          Select the blockchain network you want to use for sending or receiving
          USDT.
        </p>
      </header>
      <section className="relative px-4 sm:px-6 pb-20">
        <div className="container mx-auto max-w-7xl grid md:grid-cols-3 gap-6">
          {networks.map((network) => (
            <GlassCard key={network.id} className="overflow-hidden">
              <div className={`bg-gradient-to-r ${network.color} text-white p-8`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={network.image}
                  alt={network.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 shadow-lg bg-white p-2"
                />
                <h2 className="font-display text-2xl font-bold text-center mb-2">
                  {network.name}
                </h2>
                <p className="text-white/80 text-center text-sm">
                  {network.description}
                </p>
              </div>
              <div className="p-6 flex justify-center">
                <Button
                  className={`rounded-2xl bg-gradient-to-r ${network.color}`}
                  onClick={() => {
                    const stored = localStorage.getItem("selectedPlan");
                    const plan = stored
                      ? (JSON.parse(stored) as { id?: number })
                      : null;
                    const networkQuery = encodeURIComponent(network.name);
                    const href = plan?.id
                      ? `/payment?network=${networkQuery}&planId=${plan.id}`
                      : `/payment?network=${networkQuery}`;
                    router.push(href);
                  }}
                >
                  Select {network.name}
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
