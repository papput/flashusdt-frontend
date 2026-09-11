"use client";

import { PageShell } from "@/components/PageShell";
import { PillBadge } from "@/components/PillBadge";
import { PlanIcon } from "@/components/PlanIcon";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { useAppState } from "@/lib/context";
import { pricingPlans } from "@/lib/data";
import { useRouter } from "next/navigation";
import { HiCheck } from "react-icons/hi2";

export function PricingPage() {
  const router = useRouter();
  const { updateSelectedPlan } = useAppState();

  return (
    <PageShell>
      <header className="relative pt-36 pb-16 px-6 text-center">
        <PillBadge>Pricing Plans</PillBadge>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4 text-gradient">
          Choose Your USDT Flash Package
        </h1>
        <p className="text-lg text-white/65 max-w-2xl mx-auto">
          Select the perfect package for your needs. All packages include
          temporary USDT transfers with customizable durations.
        </p>
      </header>
      <section className="relative px-6 pb-20">
        <div className="container mx-auto max-w-7xl grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <GlassCard
              key={plan.id}
              className={`overflow-hidden ${plan.popular ? "glow-ring" : ""}`}
            >
              {plan.popular ? (
                <div className="absolute top-4 right-4 z-10 rounded-full bg-gradient-to-r from-orange-400 to-rose-500 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              ) : null}
              <div className={`bg-gradient-to-r ${plan.gradient} p-8 text-white`}>
                <div className="flex justify-center mb-4">
                  <PlanIcon name={plan.icon} />
                </div>
                <h2 className="font-display text-2xl font-bold text-center mb-2">
                  {plan.name}
                </h2>
                <p className="text-white/80 text-center text-sm">
                  {plan.description}
                </p>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="font-display text-4xl font-bold mb-2">
                    {plan.price}
                  </div>
                  <div className="font-mono text-cyan-300">{plan.amount}</div>
                  <div className="text-sm text-white/45">{plan.duration}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-white/75">
                      <HiCheck className="mt-0.5 text-cyan-300 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full rounded-2xl bg-gradient-to-r ${plan.gradient}`}
                  onClick={() => {
                    updateSelectedPlan(plan);
                    router.push("/network");
                  }}
                >
                  Get Started
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
