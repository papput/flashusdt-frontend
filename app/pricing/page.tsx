import { PricingPage } from "@/components/pages/PricingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Choose a USDT flash package in the FLASH USDT PRO interface.",
};

export default function Page() {
  return <PricingPage />;
}
