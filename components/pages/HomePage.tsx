"use client";

import { UsdtCoinSvg } from "@/components/graphics/CryptoArt";
import { MarketTicker } from "@/components/MarketTicker";
import { PageShell } from "@/components/PageShell";
import { PillBadge } from "@/components/PillBadge";
import { Button } from "@/components/ui/Button";
import { GlassCard, SectionHeading } from "@/components/ui/GlassCard";
import { VideoModal } from "@/components/VideoModal";
import { BINANCE_VIDEO, DEMO_VIDEO } from "@/lib/constants";
import { testimonials } from "@/lib/data";
import { useRouter } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { HiArrowRight, HiCheckCircle, HiOutlinePlay } from "react-icons/hi2";
import { RiEye2Fill, RiFlashlightFill, RiShieldFlashFill, RiStarFill } from "react-icons/ri";
import { TbClockHour4, TbUsers } from "react-icons/tb";

const features = [
  {
    icon: RiFlashlightFill,
    title: "Lightning Fast",
    description:
      "Execute USDT flash transfers in milliseconds with our advanced infrastructure",
    gradient: "from-sky-400 to-cyan-500",
  },
  {
    icon: RiShieldFlashFill,
    title: "Military Grade Security",
    description:
      "Bank-level encryption and security protocols protect every transaction",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: RiEye2Fill,
    title: "Complete Privacy",
    description:
      "Zero-knowledge architecture ensures your transactions remain completely private",
    gradient: "from-emerald-400 to-teal-500",
  },
];

const stats = [
  { number: "50K+", label: "Active Users", icon: TbUsers },
  { number: "1M+", label: "Transactions", icon: RiFlashlightFill },
  { number: "99.9%", label: "Uptime", icon: RiShieldFlashFill },
  { number: "24/7", label: "Support", icon: TbClockHour4 },
];

function emptySubscribe() {
  return () => {};
}

export function HomePage() {
  const router = useRouter();
  const [video, setVideo] = useState(DEMO_VIDEO);
  const [videoOpen, setVideoOpen] = useState(false);
  const videoShown = useSyncExternalStore(
    emptySubscribe,
    () => sessionStorage.getItem("videoShown") === "true",
    () => true,
  );

  useEffect(() => {
    if (videoShown) return;
    const timer = window.setTimeout(() => {
      setVideo(DEMO_VIDEO);
      setVideoOpen(true);
      sessionStorage.setItem("videoShown", "true");
    }, 0);
    return () => window.clearTimeout(timer);
  }, [videoShown]);

  const openVideo = (next: { title: string; url: string }) => {
    setVideo(next);
    setVideoOpen(true);
  };

  return (
    <PageShell>
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center">
          <div className="animate-fade-in min-w-0">
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-cyan-300/20 bg-cyan-400/10 text-cyan-200 text-xs sm:text-sm mb-6 sm:mb-8">
              <RiStarFill className="text-amber-300 shrink-0" />
              <span>Trusted by 50,000+ users worldwide</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            </div>
            <h1 className="font-display text-[2.05rem] leading-[1.05] sm:text-5xl md:text-7xl lg:text-[5.4rem] sm:leading-[0.95] font-extrabold mb-6 sm:mb-7 break-words">
              <span className="text-white">Revolutionary</span>
              <br />
              <span className="text-gradient">USDT Flash System</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/65 mb-8 sm:mb-10 max-w-xl leading-relaxed">
              Experience the next generation of cryptocurrency transactions with
              our advanced Flash USDT platform.{" "}
              <span className="text-cyan-300">
                Secure, temporary, and completely untraceable
              </span>{" "}
              transfers at the speed of light.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button
                onClick={() => router.push("/pricing")}
                className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg"
              >
                Buy Now
                <HiArrowRight />
              </Button>
              <Button
                variant="ghost"
                onClick={() => openVideo(DEMO_VIDEO)}
                className="w-full sm:w-auto px-7 py-4"
              >
                <HiOutlinePlay />
                Watch demo
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Button
                variant="gold"
                className="w-full sm:w-auto"
                onClick={() => openVideo(DEMO_VIDEO)}
              >
                Watch USDT Flash Demo
              </Button>
              <Button
                variant="gold"
                className="w-full sm:w-auto"
                onClick={() => openVideo(BINANCE_VIDEO)}
              >
                Watch Binance USDT Flash
              </Button>
            </div>
            <MarketTicker />
          </div>

          <div className="relative hidden md:flex items-center justify-center">
            <div className="absolute inset-10 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-glow" />
            <UsdtCoinSvg
              id="heroCoin"
              className="relative w-72 lg:w-80 animate-float drop-shadow-[0_30px_80px_rgba(34,211,238,0.35)]"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <GlassCard key={stat.label} className="p-4 sm:p-6 text-center">
                <Icon className="mx-auto text-xl sm:text-2xl text-cyan-300 mb-2 sm:mb-3" />
                <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-white/50">{stat.label}</div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Platform"
            title="Why Choose FLASH USDT PRO?"
            subtitle="Built for the modern crypto ecosystem with enterprise-grade features and consumer-friendly design"
          />
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <GlassCard key={feature.title} className="p-6 sm:p-8 relative overflow-hidden">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white text-2xl mb-6 shadow-lg`}
                  >
                    <Icon />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>

          <GlassCard className="p-6 sm:p-8 md:p-12 overflow-hidden" hover={false}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <PillBadge>Zero-knowledge</PillBadge>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-5">
                  Advanced Key Generation
                </h3>
                <p className="text-white/65 mb-8 text-lg leading-relaxed">
                  Generate cryptographically secure private keys directly in
                  your browser. Our zero-knowledge architecture ensures complete
                  privacy and security.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Client-side key generation",
                    "No server-side storage",
                    "Military-grade encryption",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-white/80">
                      <HiCheckCircle className="text-emerald-400 text-xl" />
                      {item}
                    </div>
                  ))}
                </div>
                <Button variant="success" className="w-full sm:w-auto">Generate Keys Now</Button>
              </div>
              <div className="text-center rounded-[28px] border border-emerald-300/20 bg-emerald-400/8 p-10">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-4xl shadow-2xl shadow-emerald-500/30">
                  <RiShieldFlashFill />
                </div>
                <h4 className="font-display text-2xl font-bold mb-2">100% Secure</h4>
                <p className="text-white/60">Your keys never leave your device</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Social proof"
            title="What Our Users Say"
            subtitle="Trusted by developers, investors, and crypto innovators worldwide"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <GlassCard key={item.name} className="p-6 sm:p-8">
                <div className="flex gap-1 mb-5 text-amber-300">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <RiStarFill key={`${item.name}-${index}`} />
                  ))}
                </div>
                <div className="flex items-center mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover ring-2 ring-cyan-300/30"
                  />
                  <div>
                    <h4 className="font-display font-semibold">{item.name}</h4>
                    <p className="text-sm text-cyan-300">{item.title}</p>
                  </div>
                </div>
                <p className="text-white/65 leading-relaxed">
                  &quot;{item.message}&quot;
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {videoOpen ? (
        <VideoModal
          title={video.title}
          url={video.url}
          onClose={() => setVideoOpen(false)}
        />
      ) : null}
    </PageShell>
  );
}
