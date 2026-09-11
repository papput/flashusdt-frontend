import { PaymentPage } from "@/components/pages/PaymentPage";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Payment",
  description: "Payment details screen migrated from FLASH USDT PRO.",
};

function PaymentFallback() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      Redirecting to payment selection...
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<PaymentFallback />}>
      <PaymentPage />
    </Suspense>
  );
}
