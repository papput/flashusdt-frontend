import { BrandLogo } from "@/components/BrandLogo";
import { TELEGRAM_HREF, WHATSAPP_HREF } from "@/lib/constants";
import Link from "next/link";
import { RiTelegramFill, RiWhatsappFill } from "react-icons/ri";

const productLinks = [
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/get-started", label: "Documentation" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export function Footer() {
  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto glass-panel rounded-[32px] p-8 md:p-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="mb-6">
              <BrandLogo />
            </div>
            <p className="text-white/60 max-w-md text-base leading-relaxed">
              A premium crypto interface for fast, private USDT workflows —
              designed with studio-grade glass, motion, and network clarity.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center text-emerald-300 hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <RiWhatsappFill className="text-xl" />
              </a>
              <a
                href={TELEGRAM_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-sky-500/15 border border-sky-400/20 flex items-center justify-center text-sky-300 hover:scale-110 transition-transform"
                aria-label="Telegram"
              >
                <RiTelegramFill className="text-xl" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display text-white mb-5 text-lg">Product</h4>
            <ul className="space-y-3 text-white/55">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-cyan-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-white mb-5 text-lg">Company</h4>
            <ul className="space-y-3 text-white/55">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-cyan-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-white/45 text-sm tracking-wide">
          © 2026 FLASH USDT PRO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
