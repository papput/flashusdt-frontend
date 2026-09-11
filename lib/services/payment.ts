import type { PaymentFormData, ServiceResult } from "@/lib/types";
import { SITE_EMAIL } from "@/lib/constants";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function createTransactionId() {
  return `TX-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${Date.now().toString().slice(-5)}`;
}

export function parsePlanAmount(price: string) {
  return price.replace("$", "") || "25.00";
}

export async function submitPaymentDetails(
  data: PaymentFormData,
): Promise<ServiceResult> {
  if (
    !data.transactionId ||
    !data.walletAddress ||
    !data.transferAmount ||
    !data.email
  ) {
    return {
      ok: false,
      message: "Please fill in all payment details before submitting.",
    };
  }

  await wait(5000);
  console.log(`Simulated email sent to ${SITE_EMAIL} with data:`, data);

  return {
    ok: false,
    message: "Payment Could Not Be Fetched",
  };
}
