import { Providers } from "@/components/Providers";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "FLASH USDT PRO",
    template: "%s | FLASH USDT PRO",
  },
  description:
    "FLASH USDT PRO — a premium crypto interface for packages, networks, license activation, and transfer UI.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${manrope.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#05070f] text-white font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
