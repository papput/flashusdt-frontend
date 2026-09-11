import type { ServiceResult, TransferFormData } from "@/lib/types";

export function validateTransferForm(data: TransferFormData): ServiceResult | null {
  if (!data.senderAddress.trim() || !data.amount.trim()) {
    return {
      ok: false,
      message: "Please complete the required transfer fields.",
    };
  }

  return null;
}

export function requestFlashTransfer(): ServiceResult {
  return {
    ok: false,
    message: "Please activate license key before initiating flash transfer.",
  };
}
