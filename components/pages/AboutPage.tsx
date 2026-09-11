import { PageShell } from "@/components/PageShell";
import { SITE_EMAIL } from "@/lib/constants";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi2";

const reasons = [
  "High-quality service",
  "24/7 customer support",
  "Secure transactions",
  "Fast and reliable transfers",
];

export function AboutPage() {
  return (
    <PageShell>
      <div className="max-w-4xl mx-auto pt-36 pb-16 px-6">
        <div className="glass-panel rounded-[32px] p-8 md:p-12 space-y-8">
          <h1 className="font-display text-4xl font-extrabold text-center text-gradient">
          Welcome to FlashUSDT - Pro
        </h1>
        <p className="text-center text-gray-300 text-lg">
          Your trusted platform for secure and instant crypto flash transfers.
        </p>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Who We Are</h2>
          <p className="text-gray-300">
            We are a passionate team of developers and crypto enthusiasts
            dedicated to providing secure, fast, and reliable flash transfer
            services using USDT networks. Our mission is to make your crypto
            experience seamless and trustworthy.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">What We Do</h2>
          <p className="text-gray-300">FlashX empowers users to:</p>
          <ul className="list-disc list-inside ml-4 text-gray-300 space-y-1 mt-2">
            <li>Buy and activate crypto-based flash plans</li>
            <li>Transfer USDT on TRC20, BEP20, and ERC20 networks</li>
            <li>Generate license keys for verified access</li>
            <li>Track flash payments using transaction IDs</li>
            <li>Choose flexible pricing and network options</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Why Choose Us?
          </h2>
          <ul className="space-y-2 mt-2">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-center text-gray-300">
                <HiCheckCircle className="text-emerald-400 text-lg mr-2" />
                {reason}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions or need support, feel free to contact us
            at{" "}
            <Link
              href={`mailto:${SITE_EMAIL}`}
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              {SITE_EMAIL}
            </Link>
            .
          </p>
        </div>
        </div>
      </div>
    </PageShell>
  );
}
