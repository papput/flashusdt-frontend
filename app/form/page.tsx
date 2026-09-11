import { FormPage } from "@/components/pages/FormPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flash Transfer",
  description: "Flash transfer form UI migrated from FLASH USDT PRO.",
};

export default function Page() {
  return <FormPage />;
}
