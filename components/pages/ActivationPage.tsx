"use client";

import { ShieldCrestSvg } from "@/components/graphics/CryptoArt";
import { PageShell } from "@/components/PageShell";
import { PillBadge } from "@/components/PillBadge";
import { StepIndicator } from "@/components/StepIndicator";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  activateLicense,
  validateLicenseAgreement,
} from "@/lib/services/license";
import Link from "next/link";
import { useState } from "react";
import { HiArrowPath } from "react-icons/hi2";
import { RiShieldFlashFill } from "react-icons/ri";

export function ActivationPage() {
  const [license, setLicense] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [step, setStep] = useState(1);
  const [isActivating, setIsActivating] = useState(false);
  const [licenseError, setLicenseError] = useState("");
  const [agreementError, setAgreementError] = useState("");

  const onActivate = async () => {
    setLicenseError("");
    setAgreementError("");

    const agreement = validateLicenseAgreement(agreed);
    if (agreement) {
      setAgreementError(agreement.message);
      return;
    }

    if (!license.trim()) {
      setLicenseError("License not valid.");
      return;
    }

    setIsActivating(true);
    setStep(2);
    const result = await activateLicense(license);
    setIsActivating(false);
    setStep(1);
    setLicenseError(result.message);
  };

  const disabled = !license.trim() || isActivating || step > 1;

  return (
    <PageShell>
      <header className="relative text-center pt-28 sm:pt-36 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <PillBadge>License Activation</PillBadge>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gradient mb-4">
            Activate Your License
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Enter your USDT license key to unlock all premium features
          </p>
        </div>
      </header>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <GlassCard className="mb-12" hover={false}>
          <div className="p-5 sm:p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4">
                <ShieldCrestSvg className="w-20 h-20 drop-shadow-[0_10px_30px_rgba(34,211,238,0.35)]" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2">
                Enter License Key
              </h2>
              <p className="text-gray-400">
                This is the key you received after payment
              </p>
            </div>
            <StepIndicator step={step} isActivating={isActivating} />
            <div className="max-w-md mx-auto space-y-6">
              <div className="space-y-3">
                <label className="block font-medium text-white text-center">
                  License Key *
                </label>
                <div className="flex items-center rounded-xl border p-3 shadow-inner bg-white/5 backdrop-blur-xl border-white/20">
                  <input
                    className="flex-1 outline-none text-base p-2 bg-transparent text-white placeholder-gray-400 transition text-center"
                    placeholder="USDT-XXXX-XXXX-XXXX"
                    value={license}
                    onChange={(event) => setLicense(event.target.value)}
                    aria-invalid={Boolean(licenseError)}
                  />
                </div>
                {licenseError && (
                  <p className="text-sm text-red-400 font-medium text-center">
                    {licenseError}
                  </p>
                )}
              </div>
              <div className="space-y-3">
                <div className="flex items-start justify-center space-x-2">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(event) => {
                      setAgreed(event.target.checked);
                      if (event.target.checked) setAgreementError("");
                    }}
                    className="mt-1 accent-cyan-500"
                    id="agree"
                  />
                  <label
                    htmlFor="agree"
                    className="text-sm leading-tight text-gray-300 max-w-xs"
                  >
                    I agree to the{" "}
                    <Link href="/terms" className="text-cyan-400 underline">
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-cyan-400 underline"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {agreementError && (
                  <p className="text-sm text-red-400 font-medium text-center">
                    {agreementError}
                  </p>
                )}
              </div>
              <Button
                type="button"
                onClick={onActivate}
                disabled={disabled}
                className="w-full"
              >
                {isActivating ? (
                  <>
                    <HiArrowPath className="animate-spin" />
                    Activating...
                  </>
                ) : (
                  <>
                    <RiShieldFlashFill />
                    Activate License
                  </>
                )}
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </PageShell>
  );
}
