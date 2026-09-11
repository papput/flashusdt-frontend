import { ActivationPage } from "@/components/pages/ActivationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "License Activation",
  description: "Enter a license key in the FLASH USDT PRO activation screen.",
};

export default function Page() {
  return <ActivationPage />;
}
