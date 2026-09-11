import { AboutPage } from "@/components/pages/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function Page() {
  return <AboutPage />;
}
