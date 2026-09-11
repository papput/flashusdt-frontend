import { PageShell } from "@/components/PageShell";
import { PillBadge } from "@/components/PillBadge";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  SITE_EMAIL,
  SITE_LOCATION,
  TELEGRAM_HREF,
  WHATSAPP_HREF,
} from "@/lib/constants";
import { HiOutlineChatBubbleLeftRight, HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { RiTelegramFill, RiWhatsappFill } from "react-icons/ri";

export function ContactPage() {
  return (
    <PageShell>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20">
        <div className="text-center mb-12">
          <PillBadge>Get In Touch</PillBadge>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-3 text-gradient">
            Contact Us
          </h1>
          <p className="text-white/65 text-lg">
            We&apos;d love to hear from you. Reach out with any questions or
            feedback!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <GlassCard className="p-6 space-y-3" hover={false}>
              <h3 className="font-display text-xl font-semibold">Reach us directly</h3>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="flex items-center text-sm text-white/70 hover:text-cyan-300 transition-colors"
              >
                <HiOutlineEnvelope className="mr-2 text-cyan-300" />
                {SITE_EMAIL}
              </a>
              <div className="flex items-start text-sm text-white/70">
                <HiOutlineMapPin className="mr-2 text-cyan-300" />
                {SITE_LOCATION}
              </div>
            </GlassCard>
            <GlassCard className="p-5 border-emerald-400/20" hover={false}>
              <h4 className="font-semibold mb-2 text-emerald-300">Support Hours</h4>
              <p className="text-sm text-white/65">Available 24x7</p>
            </GlassCard>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-green-600 px-6 py-3 rounded-full text-white font-medium hover:scale-105 transition-transform w-full lg:w-auto"
            >
              <RiWhatsappFill className="text-xl" />
              Chat on WhatsApp
            </a>
            <a
              href={TELEGRAM_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-400 to-indigo-600 px-6 py-3 rounded-full text-white font-medium hover:scale-105 transition-transform w-full lg:w-auto"
            >
              <RiTelegramFill className="text-xl" />
              Message on Telegram
            </a>
          </div>
          <GlassCard className="hidden lg:flex items-center justify-center p-10 text-center" hover={false}>
            <div>
              <HiOutlineChatBubbleLeftRight className="text-5xl text-cyan-300 mx-auto mb-6" />
              <h3 className="font-display text-2xl font-semibold mb-2">
                Let&apos;s start a conversation!
              </h3>
              <p className="text-white/55 max-w-sm mx-auto">
                We&apos;re here to help and answer any question you might have.
                We look forward to hearing from you.
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageShell>
  );
}
