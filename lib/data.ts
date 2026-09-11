import type {
  Coin,
  NetworkOption,
  PricingPlan,
  Testimonial,
} from "@/lib/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Flash USDT Starter",
    icon: "zap",
    description: "Great for beginners and simple test transactions",
    duration: "3 Days",
    amount: "2,000 USDT",
    price: "$149",
    features: [
      "3-Day active duration",
      "Basic transaction speed",
      "Email-only support",
      "Single wallet access",
      "1 Jump",
    ],
    popular: false,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 2,
    name: "Flash USDT Plus",
    icon: "shield",
    description: "Ideal for regular traders needing more power",
    duration: "30 Days",
    amount: "10,000 USDT",
    price: "$199",
    features: [
      "30-Days active duration",
      "Faster transaction execution",
      "Priority chat support",
      "Multi-wallet support",
      "3 Jump",
    ],
    popular: true,
    gradient: "from-sky-500 to-indigo-500",
  },
  {
    id: 3,
    name: "Flash USDT Premium",
    icon: "clock",
    description: "Premium users enjoy high limits and automation",
    duration: "90 Days",
    amount: "40,000 USDT",
    price: "$499",
    features: [
      "90-Days active duration",
      "High-speed transaction engine",
      "24/7 dedicated support",
      "Multi-wallet + whitelist control",
      "8 Jump",
    ],
    popular: false,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 4,
    name: "Flash USDT Executive",
    icon: "sparkles",
    description: "Executive-grade performance and capacity",
    duration: "180 Days",
    amount: "80,000 USDT",
    price: "$749",
    features: [
      "180-Days valid duration",
      "Enterprise-grade transfer queue",
      "VIP onboarding support",
      "Unlimited wallet addresses",
      "15 Jump",
    ],
    popular: false,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 5,
    name: "Flash USDT Titan",
    icon: "zap",
    description: "Designed for exchanges and high-volume users",
    duration: "1 Year",
    amount: "150,000 USDT",
    price: "$999",
    features: [
      "1-Year uptime",
      "Automated batch processing",
      "Account manager access",
      "Audit logs included",
      "35 Jump",
    ],
    popular: false,
    gradient: "from-purple-600 to-fuchsia-500",
  },
  {
    id: 6,
    name: "Flash USDT Stealth",
    icon: "shield",
    description: "Maximum privacy and stealth for sensitive cases",
    duration: "LifeTime",
    amount: "250,000 USDT",
    price: "$1499",
    features: [
      "LifeTime Warranty",
      "End-to-end encrypted routing",
      "No KYC required",
      "Anonymous support line",
      "Unlimited Jump",
    ],
    popular: false,
    gradient: "from-red-600 to-orange-400",
  },
];

export const coins: Coin[] = [
  {
    id: 1,
    name: "USDT (Tether)",
    symbol: "USDT",
    geckoId: "tether",
    price: "$1.00",
    change: "+0.01%",
    isPositive: true,
    marketCap: "$95.2B",
    description: "The most popular stablecoin pegged to USD",
    features: [
      "Stable value",
      "High liquidity",
      "Wide acceptance",
      "Instant transfers",
    ],
    gradient: "from-emerald-500 to-teal-500",
    popular: true,
  },
  {
    id: 2,
    name: "Bitcoin",
    symbol: "BTC",
    geckoId: "bitcoin",
    price: "$43,250",
    change: "+2.45%",
    isPositive: true,
    marketCap: "$850.4B",
    description: "The original and most valuable cryptocurrency",
    features: [
      "Store of value",
      "Decentralized",
      "Limited supply",
      "Global acceptance",
    ],
    gradient: "from-orange-500 to-red-500",
    popular: false,
  },
  {
    id: 3,
    name: "TRON (TRX)",
    symbol: "TRX",
    geckoId: "tron",
    price: "$0.09",
    change: "+0.85%",
    isPositive: true,
    marketCap: "$8.5B",
    description: "High-throughput blockchain for content sharing",
    features: [
      "Fast transactions",
      "Low fees",
      "Content decentralization",
      "Scalable dApps",
    ],
    gradient: "from-red-500 to-pink-500",
    popular: false,
  },
];

export const networks: NetworkOption[] = [
  {
    id: 1,
    name: "USDT (TRC20)",
    description:
      "Tether on the TRON network. Fast and low-fee transactions for stablecoin transfers.",
    image: "/tether-usdt-logo.svg",
    color: "from-red-500 to-pink-500",
  },
  {
    id: 2,
    name: "USDT (BEP20)",
    description:
      "Tether on Binance Smart Chain. Scalable, secure, and low-cost stablecoin transfers.",
    image: "/tether-usdt-logo.svg",
    color: "from-yellow-400 to-amber-500",
  },
  {
    id: 3,
    name: "TRX (TRON)",
    description:
      "Native cryptocurrency of the TRON network. High-speed, decentralized, and efficient.",
    image: "/tron-trx-logo.svg",
    color: "from-rose-500 to-red-600",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Arvind Mehta",
    title: "Blockchain Developer",
    message:
      "The platform made it incredibly easy for me to handle secure transfers. Super intuitive and fast.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1717672134174-bba6868108b7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Derick Doe",
    title: "Crypto Analyst",
    message:
      "Finally a tool that understands what users need. Clean UI, blazing speed, and accurate insights.",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1583195763986-0231686dcd43?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rohan Pandita",
    title: "Web3 Enthusiast",
    message:
      "I was amazed by how quickly I could complete my first transaction. Everything just works!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1729157661483-ed21901ed892?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Choose a package on the Pricing page, select a network, complete the payment form, then enter the license key you receive on the License Activation screen.",
  },
  {
    question: "Which networks are supported?",
    answer:
      "The interface currently lists USDT on TRC20 and BEP20, plus TRX on TRON. ERC20 appears as an option on the transfer form.",
  },
  {
    question: "Why did license activation fail?",
    answer:
      "This frontend recreates the original activation screen. Without a connected license API, the form reports that the key is not valid.",
  },
  {
    question: "Where can I get help?",
    answer:
      "Use the Contact page, WhatsApp, Telegram, or email info@flashusdtpro. Support hours are listed as available 24x7.",
  },
];
