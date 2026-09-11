import { GetStartedPage } from "@/components/pages/GetStartedPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Getting started guide and FAQ for the FLASH USDT PRO interface.",
};

export default function Page() {
  return <GetStartedPage />;
}
