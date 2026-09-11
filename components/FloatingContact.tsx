import { TELEGRAM_HREF, TELEGRAM_USERNAME, WHATSAPP_HREF } from "@/lib/constants";
import { RiTelegramFill, RiWhatsappFill } from "react-icons/ri";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-600 px-4 py-3 text-white font-medium shadow-lg shadow-emerald-500/30 hover:scale-105 transition-transform"
      >
        <RiWhatsappFill className="text-2xl" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
      <a
        href={TELEGRAM_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-indigo-600 px-4 py-3 text-white font-medium shadow-lg shadow-sky-500/30 hover:scale-105 transition-transform"
      >
        <RiTelegramFill className="text-2xl" />
        <span className="hidden sm:inline">Telegram</span>
      </a>
      <span className="sr-only">Chat with {TELEGRAM_USERNAME}</span>
    </div>
  );
}
