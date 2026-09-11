import { TermsPage } from "@/components/pages/TermsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

export default function Page() {
  return <TermsPage />;
}
