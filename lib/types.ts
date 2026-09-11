export type NetworkName = "USDT (TRC20)" | "USDT (BEP20)" | "TRX (TRON)" | "USDT (ERC20)";

export interface PricingPlan {
  id: number;
  name: string;
  icon: "zap" | "shield" | "clock" | "sparkles";
  description: string;
  duration: string;
  amount: string;
  price: string;
  features: string[];
  popular: boolean;
  gradient: string;
}

export interface StoredPlan {
  id: number;
  name: string;
  description: string;
  duration: string;
  amount: string;
  price: string;
  features: string[];
  popular: boolean;
  gradient: string;
}

export interface Coin {
  id: number;
  name: string;
  symbol: string;
  geckoId: string;
  logo?: string;
  price: string;
  change: string;
  isPositive: boolean;
  marketCap: string;
  description: string;
  features: string[];
  gradient: string;
  popular: boolean;
}

export interface MarketQuote {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume: number;
  marketCap: number;
}

export interface NetworkOption {
  id: number;
  name: NetworkName;
  description: string;
  image: string;
  color: string;
}

export interface Testimonial {
  name: string;
  title: string;
  message: string;
  rating: number;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  featured: boolean;
  content: string[];
}

export interface TransferFormData {
  senderAddress: string;
  amount: string;
  network: NetworkName;
  note: string;
}

export interface PaymentFormData {
  transactionId: string;
  walletAddress: string;
  transferAmount: string;
  email: string;
}

export interface ServiceResult {
  ok: boolean;
  message: string;
}
