"use client";

import { AppProvider } from "@/lib/context";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}
