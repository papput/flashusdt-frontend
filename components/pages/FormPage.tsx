"use client";

import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  requestFlashTransfer,
  validateTransferForm,
} from "@/lib/services/transfer";
import type { NetworkName, TransferFormData } from "@/lib/types";
import { useState, type FormEvent } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { RiShieldFlashFill, RiTimerFlashFill, RiWallet3Fill } from "react-icons/ri";
import { TbCurrencyDollar, TbSend } from "react-icons/tb";

const highlights = [
  {
    icon: RiShieldFlashFill,
    title: "Secure Transfer",
    description: "End-to-end encrypted with advanced security protocols",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: RiTimerFlashFill,
    title: "Instant Processing",
    description: "Lightning-fast processing with real-time confirmations",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: TbSend,
    title: "Quick Setup",
    description: "Just enter address and amount to start your transfer",
    color: "from-emerald-500 to-teal-600",
  },
];

export function FormPage() {
  const [form, setForm] = useState<TransferFormData>({
    senderAddress: "",
    amount: "",
    network: "USDT (TRC20)",
    note: "",
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    if (name === "amount") {
      const next = value.replace(/[^\d.]/g, "");
      if (!/^\d*\.?\d{0,2}$/.test(next) && next !== "") return;
      setForm((current) => ({ ...current, amount: next }));
      return;
    }
    setForm((current) => ({ ...current, [name]: value as NetworkName }));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const invalid = validateTransferForm(form);
    if (invalid) {
      setError(invalid.message);
      return;
    }
    setProcessing(true);
    const result = requestFlashTransfer();
    setProcessing(false);
    setError(result.message);
  };

  return (
    <PageShell>
      <div className="pt-36 pb-8 text-center">
        <h1 className="font-display text-5xl md:text-6xl font-extrabold mb-4 text-gradient">
          Flash Transfer
        </h1>
        <p className="text-xl text-white/65 max-w-2xl mx-auto">
          Send instant USDT flash transfers with advanced security
        </p>
      </div>
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-12" hover={false}>
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="group">
                    <label className="flex items-center text-white font-semibold mb-3 text-lg">
                      <RiWallet3Fill className="mr-2 text-cyan-400" />
                      Sender Address
                    </label>
                    <input
                      type="text"
                      name="senderAddress"
                      value={form.senderAddress}
                      onChange={onChange}
                      placeholder="Enter sender wallet address..."
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all backdrop-blur-xl"
                    />
                  </div>
                  <div className="group relative">
                    <label className="flex items-center text-white font-semibold mb-3 text-lg">
                      <TbCurrencyDollar className="mr-2 text-emerald-400" />
                      Amount
                    </label>
                    <input
                      type="text"
                      name="amount"
                      value={form.amount}
                      onChange={onChange}
                      placeholder="Enter amount..."
                      required
                      className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all backdrop-blur-xl"
                    />
                    <p className="text-sm text-orange-400 mt-1">
                      Available Flash: $0.00
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="group">
                    <label className="flex items-center text-white font-semibold mb-3 text-lg">
                      <RiShieldFlashFill className="mr-2 text-purple-400" />
                      Network
                    </label>
                    <div className="relative">
                      <select
                        name="network"
                        value={form.network}
                        onChange={onChange}
                      className="w-full px-6 py-4 pr-10 bg-[#0b1220] border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all appearance-none"
                      >
                        <option value="USDT (TRC20)">USDT (TRC20)</option>
                        <option value="USDT (BEP20)">USDT (BEP20)</option>
                        <option value="USDT (ERC20)">USDT (ERC20)</option>
                      </select>
                      <HiChevronDown className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-white/70 text-xl" />
                    </div>
                  </div>
                  <div className="group">
                    <label className="flex items-center text-white font-semibold mb-3 text-lg">
                      Note (Optional)
                    </label>
                    <textarea
                      name="note"
                      value={form.note}
                      onChange={onChange}
                      placeholder="Add a note for this transfer..."
                      rows={3}
                      className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all backdrop-blur-xl resize-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 py-8 border-t border-white/20">
                {highlights.map(({ icon: Icon, title, description, color }) => (
                  <div key={title} className="text-center p-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-2xl text-2xl`}
                    >
                      <Icon />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm">{description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center pt-6 space-y-3">
                <Button type="submit" disabled={processing} className="px-12 py-4 text-xl rounded-2xl">
                  {processing ? "Processing Transfer..." : (
                    <>
                      <TbSend />
                      Initiate Flash Transfer
                    </>
                  )}
                </Button>
                {error && (
                  <p className="text-red-400 text-sm font-semibold">{error}</p>
                )}
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </PageShell>
  );
}
