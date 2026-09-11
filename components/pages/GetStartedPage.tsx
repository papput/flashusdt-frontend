import { FaqAccordion } from "@/components/FaqAccordion";
import { PageShell } from "@/components/PageShell";
import { PillBadge } from "@/components/PillBadge";
import { Button } from "@/components/ui/Button";
import { GlassCard, SectionHeading } from "@/components/ui/GlassCard";
import { faqs } from "@/lib/data";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi2";
import { RiKey2Fill, RiShieldFlashFill } from "react-icons/ri";
import { TbSend } from "react-icons/tb";

const steps = [
  {
    icon: HiCheckCircle,
    title: "1. Buy the package as per your Needs.",
    description:
      "Choose the flash USDT package that best suits your transaction needs. Flexible options let you scale based on your goals.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: RiShieldFlashFill,
    title: "2. Activate License",
    description:
      "Start by activating your license key to unlock all premium features of Flash USDT. This ensures secure access and encryption.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: RiKey2Fill,
    title: "3. Configure Wallet",
    description:
      "Enter your sender wallet addresses. Make sure they are USDT-compatible and active on the selected network.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: TbSend,
    title: "4. Initiate Flash Transfer",
    description:
      "Click 'Send Flash' to initiate the lightning-fast transfer. Our system handles the rest behind the scenes securely and anonymously.",
    gradient: "from-orange-500 to-red-500",
  },
];

export function GetStartedPage() {
  return (
    <PageShell>
      <div className="max-w-5xl mx-auto px-6 pt-36 pb-20">
        <div className="text-center mb-12">
          <PillBadge>Getting Started Guide</PillBadge>
          <h1 className="font-display text-5xl font-extrabold mb-3 text-gradient">
            Get Started
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Experience the next generation of cryptocurrency transactions with
            our advanced Flash USDT platform.{" "}
            <span className="text-cyan-300">
              Secure, temporary, and completely untraceable
            </span>{" "}
            transfers at the speed of light.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <GlassCard key={step.title} className="p-6">
                <div className="flex items-center mb-3 gap-3">
                  <div
                    className={`w-11 h-11 flex items-center justify-center bg-gradient-to-r ${step.gradient} rounded-full text-lg`}
                  >
                    <Icon />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="text-white/60 text-sm">{step.description}</p>
              </GlassCard>
            );
          })}
        </div>

        <div className="mt-16">
          <SectionHeading title="Frequently Asked Questions" />
          <FaqAccordion items={faqs} />
        </div>

        <div className="text-center mt-16">
          <Link href="/pricing">
            <Button>
              <RiShieldFlashFill />
              Activate Now
            </Button>
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
