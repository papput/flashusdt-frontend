"use client";

import { PageShell } from "@/components/PageShell";
import { PaymentField } from "@/components/PaymentField";
import { PillBadge } from "@/components/PillBadge";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  DEFAULT_WALLET,
  NETWORK_LOGOS,
  WALLET_ADDRESSES,
} from "@/lib/constants";
import { useAppState } from "@/lib/context";
import {
  createTransactionId,
  parsePlanAmount,
  submitPaymentDetails,
} from "@/lib/services/payment";
import { HiCheck, HiOutlineCreditCard, HiOutlineEnvelope } from "react-icons/hi2";
import {
  RiFingerprintFill,
  RiHashtag,
  RiWallet3Fill,
} from "react-icons/ri";
import { TbCopy, TbCurrencyDollar, TbLoader2, TbXboxX } from "react-icons/tb";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

export function PaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const network = searchParams.get("network");
  const planId = searchParams.get("planId");
  const { ready, selectedPlan, transactionId, setAmount, setTransactionId } =
    useAppState();

  const [processing, setProcessing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const [hash, setHash] = useState("");
  const [email, setEmail] = useState("");
  const initialized = useRef(false);

  const wallet = WALLET_ADDRESSES[network ?? ""] || DEFAULT_WALLET;
  const logo = NETWORK_LOGOS[network ?? ""] || "/tether-usdt-logo.svg";
  const headingNetwork = useMemo(() => network || "BEP20", [network]);
  const transferAmount = selectedPlan
    ? parsePlanAmount(selectedPlan.price)
    : "";

  useEffect(() => {
    if (!ready) return;
    if (!selectedPlan || (planId && selectedPlan.id.toString() !== planId)) {
      router.replace("/pricing");
    }
  }, [ready, selectedPlan, planId, router]);

  useEffect(() => {
    if (!ready || !selectedPlan || initialized.current) return;
    initialized.current = true;
    const timer = window.setTimeout(() => {
      const txn = createTransactionId();
      setTransactionId(txn);
      setAmount(parsePlanAmount(selectedPlan.price));
      document.title = `Pay for ${selectedPlan.name} Plan | Flash USDT`;
    }, 0);
    return () => window.clearTimeout(timer);
  }, [ready, selectedPlan, setAmount, setTransactionId]);

  const copyAddress = async () => {
    await navigator.clipboard.writeText(wallet);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async () => {
    if (!transactionId || !hash || !transferAmount || !email) {
      alert("Please fill in all payment details before submitting.");
      return;
    }
    setProcessing(true);
    const result = await submitPaymentDetails({
      transactionId,
      walletAddress: hash,
      transferAmount,
      email,
    });
    setProcessing(false);
    if (!result.ok) setFailed(true);
  };

  if (failed) {
    return (
      <PageShell>
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
          <GlassCard className="p-10 max-w-lg w-full" hover={false}>
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <TbXboxX className="text-4xl" />
            </div>
            <h1 className="font-display text-2xl font-bold text-white mb-2">
              Payment Could Not Be Fetched
            </h1>
            <p className="text-white/65 mb-4">
              We are unable to retrieve your payment details at this moment.
            </p>
            <p className="text-sm text-red-400 mb-6">
              Please verify the transaction or contact support.
            </p>
            <Button
              type="button"
              onClick={() => router.push("/contact-us")}
              className="bg-gradient-to-r from-red-500 to-pink-500"
            >
              Contact Support
            </Button>
          </GlassCard>
        </div>
      </PageShell>
    );
  }

  if (!ready || !selectedPlan) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Redirecting to payment selection...
      </div>
    );
  }

  return (
    <PageShell variant="soft">
      <header className="relative bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border-b border-white/10 text-white py-20 z-10">
        <div className="container mx-auto px-6 text-center">
          <PillBadge tone="yellow">Payment Page</PillBadge>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo}
            alt="Network Logo"
            className="w-24 h-24 mx-auto mb-6 rounded-full shadow-2xl bg-white/10 p-3 backdrop-blur-xl"
          />
          <h1 className="font-display text-3xl md:text-4xl font-extrabold mb-4 text-gradient-gold">
            Complete Your Flash USDT Payment
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            You selected <strong>{selectedPlan.name}</strong> plan. Please
            transfer <strong>{selectedPlan.price}</strong> to our{" "}
            {headingNetwork} wallet.
          </p>
        </div>
      </header>
      <section className="relative py-20 px-6 z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <GlassCard className="p-8" hover={false}>
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-6 rounded-2xl mb-6">
                <div className="flex items-center mb-4">
                  <RiWallet3Fill className="text-2xl mr-3" />
                  <h2 className="font-display text-2xl font-bold">Wallet Address</h2>
                </div>
                <p className="text-emerald-50 text-sm">
                  Send USDT to the address below ({headingNetwork} Network)
                </p>
              </div>
              <label className="block text-white/70 text-sm font-medium mb-2">
                USDT Wallet Address
              </label>
              <div className="flex rounded-xl overflow-hidden border border-white/10">
                <input
                  type="text"
                  readOnly
                  value={wallet}
                  className="flex-1 bg-white/10 px-4 py-4 text-white text-sm font-mono"
                />
                <button
                  type="button"
                  onClick={copyAddress}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 font-semibold flex items-center"
                >
                  {copied ? (
                    <>
                      <HiCheck className="mr-2" />
                      Copied
                    </>
                  ) : (
                    <>
                      <TbCopy className="mr-2" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              {copied && (
                <div className="text-emerald-400 text-sm font-semibold mt-2">
                  Address copied!
                </div>
              )}
            </GlassCard>

            <GlassCard className="p-8" hover={false}>
              <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white p-6 rounded-2xl mb-6">
                <div className="flex items-center mb-4">
                  <HiOutlineCreditCard className="text-2xl mr-3" />
                  <h2 className="font-display text-2xl font-bold">Payment Details</h2>
                </div>
                <p className="text-fuchsia-50 text-sm">
                  Enter your transaction information
                </p>
              </div>
              <div className="space-y-6">
                <PaymentField
                  label="Transaction ID"
                  icon={<RiHashtag className="mr-2" />}
                  name="transactionId"
                  placeholder="Transaction ID"
                  value={transactionId}
                  readOnly
                />
                <PaymentField
                  label="Txn Hash Code (Transaction ID)"
                  icon={<RiFingerprintFill className="mr-2" />}
                  name="walletAddress"
                  placeholder="Enter your Txn Hash ID"
                  value={hash}
                  onChange={(event) => setHash(event.target.value)}
                />
                <PaymentField
                  label="Transfer Amount"
                  icon={<TbCurrencyDollar className="mr-2" />}
                  name="transferAmount"
                  value={transferAmount}
                  readOnly
                />
                <PaymentField
                  label="Email Address"
                  icon={<HiOutlineEnvelope className="mr-2" />}
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </GlassCard>
          </div>
          <div className="mt-12 text-center">
            <Button
              type="button"
              onClick={onSubmit}
              disabled={processing}
              variant="success"
              className="px-8 py-4 text-lg rounded-2xl mx-auto"
            >
              {processing ? (
                <>
                  <TbLoader2 className="animate-spin text-xl" />
                  Processing Payment...
                </>
              ) : (
                "Submit Payment"
              )}
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
