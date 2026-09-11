import { ContactPage } from "@/components/pages/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact FLASH USDT PRO support via email, WhatsApp, or Telegram.",
};

export default function Page() {
  return <ContactPage />;
}
