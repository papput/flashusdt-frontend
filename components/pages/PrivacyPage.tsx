import { PageShell } from "@/components/PageShell";
import { SITE_EMAIL } from "@/lib/constants";
import Link from "next/link";

export function PrivacyPage() {
  return (
    <PageShell>
      <div className="max-w-4xl mx-auto pt-28 sm:pt-36 pb-16 px-4 sm:px-6">
        <div className="glass-panel rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-12">
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold mb-8 text-gradient">
          Privacy Policy
        </h1>
        <ol className="list-decimal list-inside space-y-8 text-gray-300">
          <li>
            <strong className="text-white text-lg">Introduction</strong>
            <p className="mt-2">
              Welcome to{" "}
              <span className="text-cyan-400 font-semibold">
                FlashUSDT - Pro
              </span>
              . Your privacy is important to us. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you use our platform.
            </p>
          </li>
          <li>
            <strong className="text-white text-lg">
              Information We Collect
            </strong>
            <p className="mt-2">
              We may collect personal information such as your name, email,
              phone number, wallet address, and transaction details when you use
              our services.
            </p>
          </li>
          <li>
            <strong className="text-white text-lg">
              How We Use Your Information
            </strong>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>To process transactions and payments</li>
              <li>To provide customer support</li>
              <li>To improve our services</li>
            </ul>
          </li>
          <li>
            <strong className="text-white text-lg">Data Security</strong>
            <p className="mt-2">
              We use industry-standard security measures to protect your
              personal information. However, please note that no online platform
              is 100% secure.
            </p>
          </li>
          <li>
            <strong className="text-white text-lg">
              Changes to This Privacy Policy
            </strong>
            <p className="mt-2">
              We may update our Privacy Policy from time to time. Any changes
              will be posted on this page and will become effective immediately
              upon posting.
            </p>
          </li>
          <li>
            <strong className="text-white text-lg">Contact Us</strong>
            <p className="mt-2">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at{" "}
              <Link
                href={`mailto:${SITE_EMAIL}`}
                className="text-cyan-400 underline hover:text-cyan-300"
              >
                {SITE_EMAIL}
              </Link>
              .
            </p>
          </li>
        </ol>
        </div>
      </div>
    </PageShell>
  );
}
