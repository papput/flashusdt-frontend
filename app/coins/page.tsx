import { CoinsPage } from "@/components/pages/CoinsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coins",
  description: "Supported flash transfer coins in the FLASH USDT PRO interface.",
};

export default function Page() {
  return <CoinsPage />;
}
