import { Navbar } from "@/components/Navbar";
import { PageBackground } from "@/components/PageBackground";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import type { ReactNode } from "react";

export function PageShell({
  children,
  footer = true,
  contact = true,
  variant = "default",
}: {
  children: ReactNode;
  footer?: boolean;
  contact?: boolean;
  variant?: "default" | "soft";
}) {
  return (
    <div className="min-h-screen relative overflow-x-hidden text-white">
      <PageBackground variant={variant} />
      <Navbar />
      <div className="relative z-10 pb-28 sm:pb-16">{children}</div>
      {footer ? (
        <div className="relative z-10 pb-24 sm:pb-8">
          <Footer />
        </div>
      ) : null}
      {contact ? <FloatingContact /> : null}
    </div>
  );
}
