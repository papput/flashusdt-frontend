import type { ServiceResult } from "@/lib/types";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function activateLicense(key: string): Promise<ServiceResult> {
  await wait(3000);

  if (!key.trim()) {
    return { ok: false, message: "License not valid." };
  }

  return { ok: false, message: "License not valid." };
}

export function validateLicenseAgreement(agreed: boolean): ServiceResult | null {
  if (!agreed) {
    return { ok: false, message: "Please agree to the Terms and Privacy Policy." };
  }
  return null;
}
