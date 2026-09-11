import { PageShell } from "@/components/PageShell";
import { SITE_EMAIL } from "@/lib/constants";
import Link from "next/link";

export function TermsPage() {
  return (
    <PageShell>
      <div className="max-w-4xl mx-auto pt-36 pb-16 px-6">
        <div className="glass-panel rounded-[32px] p-8 md:p-12">
          <h1 className="font-display text-4xl font-extrabold mb-8 text-gradient">
          Terms and Conditions
        </h1>
        <ol className="list-decimal list-inside space-y-8 text-gray-300">
          <li>
            <strong className="text-white">Introduction</strong>
            <p className="mt-2">
              Welcome to{" "}
              <strong className="text-cyan-400">FlashUSDT - Pro</strong>. By
              accessing our platform, you agree to these terms. FlashUSDT - Pro
              allows users to initiate flash transfers using USDT
              (TRC20/BEP20/ERC20), choose custom plans, activate licenses, and
              process secure crypto payments.
            </p>
          </li>
          <li>
            <strong className="text-white">Service Overview</strong>
            <p className="mt-2">FlashX enables users to:</p>
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>Buy crypto-based plans</li>
              <li>Activate license keys</li>
              <li>Send flash USDT transfers</li>
              <li>Select supported networks (TRC20, BEP20, ERC20)</li>
              <li>Track transactions using hash codes</li>
            </ul>
          </li>
          <li>
            <strong className="text-white">User Responsibility</strong>
            <p className="mt-2">
              Users are responsible for providing correct wallet addresses and
              transaction details. We do not take responsibility for failed
              transactions due to incorrect data.
            </p>
          </li>
          <li>
            <strong className="text-white">Licensing and Activation</strong>
            <p className="mt-2">
              To use Flash Transfer features, users must activate a valid
              license key after purchasing a plan. Without activation, flash
              transfer requests will not be processed.
            </p>
          </li>
          <li>
            <strong className="text-white">Payment & Refunds</strong>
            <p className="mt-2">
              Payments are made in USDT on selected networks. All payments are
              final. Refunds are not supported once the transaction hash is
              verified and confirmed.
            </p>
          </li>
          <li>
            <strong className="text-white">Security</strong>
            <p className="mt-2">
              FlashX uses encryption, secure storage, and token validation to
              protect user data. We do not store private keys or sensitive
              wallet credentials.
            </p>
          </li>
          <li>
            <strong className="text-white">Limitation of Liability</strong>
            <p className="mt-2">
              We are not liable for any financial losses, delays, or third-party
              issues arising from your use of FlashX. Ensure all entered details
              are accurate before initiating a flash transfer.
            </p>
          </li>
          <li>
            <strong className="text-white">Termination</strong>
            <p className="mt-2">
              FlashX reserves the right to suspend accounts that violate our
              terms or attempt fraudulent activities.
            </p>
          </li>
          <li>
            <strong className="text-white">Changes to This Policy</strong>
            <p className="mt-2">
              We may modify these Terms and Conditions. Updates will be posted
              on this page. Continued use of the site after changes constitutes
              acceptance.
            </p>
          </li>
          <li>
            <strong className="text-white">Contact</strong>
            <p className="mt-2">
              For questions or support, email us at{" "}
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
