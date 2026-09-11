"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Coin, PricingPlan, StoredPlan } from "@/lib/types";

interface AppContextValue {
  ready: boolean;
  selectedPlan: StoredPlan | null;
  updateSelectedPlan: (plan: PricingPlan) => void;
  transactionId: string;
  setTransactionId: (value: string) => void;
  amount: string;
  setAmount: (value: string) => void;
  licenseKey: string;
  setLicenseKey: (value: string) => void;
  selectedCoin: Coin | null;
  setSelectedCoin: (coin: Coin | null) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function readItem(key: string) {
  return localStorage.getItem(key);
}

function writeItem(key: string, value: string) {
  localStorage.setItem(key, value);
  emit();
}

function emptySubscribe() {
  return () => {};
}

function parseJson<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function useStorageItem(key: string) {
  return useSyncExternalStore(
    subscribe,
    () => readItem(key),
    () => null,
  );
}

export function AppProvider({ children }: { children: ReactNode }) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const planRaw = useStorageItem("selectedPlan");
  const transactionId = useStorageItem("transactionId") ?? "";
  const amount = useStorageItem("amount") ?? "";
  const licenseKey = useStorageItem("licenseKey") ?? "";
  const coinRaw = useStorageItem("selectedCoin");

  const selectedPlan = parseJson<StoredPlan>(planRaw);
  const selectedCoin = parseJson<Coin>(coinRaw);

  const updateSelectedPlan = useCallback((plan: PricingPlan) => {
    const { icon: _icon, ...stored } = plan;
    void _icon;
    writeItem("selectedPlan", JSON.stringify(stored));
  }, []);

  const setTransactionId = useCallback((value: string) => {
    writeItem("transactionId", value);
  }, []);

  const setAmount = useCallback((value: string) => {
    writeItem("amount", value);
  }, []);

  const setLicenseKey = useCallback((value: string) => {
    writeItem("licenseKey", value);
  }, []);

  const setSelectedCoin = useCallback((coin: Coin | null) => {
    if (!coin) return;
    writeItem("selectedCoin", JSON.stringify(coin));
  }, []);

  const value = useMemo(
    () => ({
      ready: isClient,
      selectedPlan,
      updateSelectedPlan,
      transactionId,
      setTransactionId,
      amount,
      setAmount,
      licenseKey,
      setLicenseKey,
      selectedCoin,
      setSelectedCoin,
    }),
    [
      isClient,
      selectedPlan,
      updateSelectedPlan,
      transactionId,
      setTransactionId,
      amount,
      setAmount,
      licenseKey,
      setLicenseKey,
      selectedCoin,
      setSelectedCoin,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within AppProvider");
  }
  return context;
}
