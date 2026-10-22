import type { Metadata } from "next";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page max-w-2xl text-center">
        <p className="font-display text-sm font-semibold tracking-wide text-brand-600 uppercase">404</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">We couldn&apos;t find that page</h1>
        <p className="mt-5 text-lg text-navy-600">
          The page may have moved or no longer exists. Try one of these instead.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" arrow>
            Back to home
          </Button>
          <Button href="/pricing" variant="ghost">
            View packages
          </Button>
          <Button href="/contact" variant="ghost">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
