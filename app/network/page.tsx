import { NetworkPage } from "@/components/pages/NetworkPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Select Network",
  description: "Choose TRC20, BEP20, or TRON in the FLASH USDT PRO interface.",
};

export default function Page() {
  return <NetworkPage />;
}
