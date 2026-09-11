function env(name: string, fallback: string) {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : fallback;
}

export const SITE_NAME = "FLASH USDT PRO";
export const SITE_EMAIL = env(
  "NEXT_PUBLIC_SITE_EMAIL",
  "info@flashusdtpro",
);
export const SITE_LOCATION = "California, USA";
export const WHATSAPP_NUMBER = env(
  "NEXT_PUBLIC_WHATSAPP_NUMBER",
  "+44 7436103569",
);

export const WHATSAPP_MESSAGE = env(
  "NEXT_PUBLIC_WHATSAPP_MESSAGE",
  "Hi! I'm interested in FLASH USDT PRO.",
);

export const TELEGRAM_USERNAME = env(
  "NEXT_PUBLIC_TELEGRAM_USERNAME",
  "@flashusdtproo",
).replace(/^@/, "");

export const TELEGRAM_MESSAGE = env(
  "NEXT_PUBLIC_TELEGRAM_MESSAGE",
  "Hi! I'm interested in FLASH USDT PRO.",
);

export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const TELEGRAM_HREF = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(TELEGRAM_MESSAGE)}`;

export const DEMO_VIDEO = {
  title: "Watch Usdt flash demo",
  url: "https://www.youtube.com/embed/ws_cTJzNvZo?autoplay=1&controls=1",
};

export const BINANCE_VIDEO = {
  title: "Watch Usdt flash demo",
  url: "https://www.youtube.com/embed/QlQkIwv_N_8?autoplay=1&controls=1",
};

export const WALLET_BEP20 = env(
  "NEXT_PUBLIC_WALLET_BEP20",
  "0xe2E2B49742e9d55C83e16A416beF1b899eA14863",
);
export const WALLET_TRC20 = env(
  "NEXT_PUBLIC_WALLET_TRC20",
  "TAf269QDEDbdPHP9Z3Db9Fjse5krxqymke",
);
export const WALLET_TRON = env(
  "NEXT_PUBLIC_WALLET_TRON",
  "TAf269QDEDbdPHP9Z3Db9Fjse5krxqymke",
);

export const WALLET_ADDRESSES: Record<string, string> = {
  "USDT (TRC20)": WALLET_TRC20,
  "USDT (BEP20)": WALLET_BEP20,
  "TRX (TRON)": WALLET_TRON,
};

export const NETWORK_LOGOS: Record<string, string> = {
  "USDT (TRC20)": "/tether-usdt-logo.svg",
  "USDT (BEP20)": "/tether-usdt-logo.svg",
  "TRX (TRON)": "/tron-trx-logo.svg",
};

export const DEFAULT_WALLET = WALLET_BEP20;
