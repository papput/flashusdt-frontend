import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageShell>
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-lg glass-panel rounded-[32px] p-10">
          <p className="text-cyan-300 mb-3 font-mono tracking-[0.3em]">404</p>
          <h1 className="font-display text-4xl font-extrabold mb-4 text-gradient">
            Page not found
          </h1>
          <p className="text-white/55 mb-8">
            The page you are looking for does not exist in this interface.
          </p>
          <Link href="/">
            <Button>Back to home</Button>
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
