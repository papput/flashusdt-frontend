"use client";

import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { HiBars3, HiOutlineSparkles, HiXMark } from "react-icons/hi2";
import { RiCoinsLine, RiKey2Line, RiNewspaperLine, RiPriceTag3Line } from "react-icons/ri";
import { TbMessage2 } from "react-icons/tb";

const navLinks = [
  { href: "/pricing", label: "Pricing", icon: RiPriceTag3Line },
  { href: "/activation", label: "License", icon: RiKey2Line },
  { href: "/coins", label: "Coins", icon: RiCoinsLine, desktopLabel: "Buy Coins" },
  { href: "/blog", label: "Blog", icon: RiNewspaperLine },
  { href: "/contact-us", label: "Contact", icon: TbMessage2, desktopLabel: "Contact Us" },
] as const;

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="glass-panel glow-ring flex h-[72px] items-center justify-between rounded-2xl px-4 sm:px-6">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="cursor-pointer"
            aria-label="FLASH USDT PRO home"
          >
            <BrandLogo />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "bg-white/10 text-cyan-300"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="text-base" />
                  {"desktopLabel" in link ? link.desktopLabel : link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button onClick={() => router.push("/get-started")} className="!py-2.5 !px-5 text-sm">
              <HiOutlineSparkles />
              Get Started
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-white hover:text-cyan-300 transition-colors"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <HiXMark className="text-2xl" /> : <HiBars3 className="text-2xl" />}
          </button>
        </div>

        {open ? (
          <div className="md:hidden mt-2 glass-panel rounded-2xl px-4 py-5 space-y-2 animate-fade-in">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-white/80 hover:text-cyan-300 transition-colors py-3 px-3 rounded-xl hover:bg-white/5"
                >
                  <Icon />
                  {"desktopLabel" in link ? link.desktopLabel : link.label}
                </Link>
              );
            })}
            <Button
              className="w-full mt-3"
              onClick={() => {
                setOpen(false);
                router.push("/get-started");
              }}
            >
              Get Started
            </Button>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
