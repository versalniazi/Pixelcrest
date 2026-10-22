import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { Button } from "./Button";
import { Icon } from "./Icon";

type Props = {
  title?: ReactNode;
  description?: ReactNode;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export function CTASection({
  title = "Ready to Grow Your Business Online?",
  description = "Tell us about your business and goals. We'll review your requirements and recommend the right next step, with no obligation.",
  primary = { href: "/contact", label: "Get Started" },
  secondary = { href: "/contact", label: "Contact Us" },
}: Props) {
  return (
    <section className="section" aria-labelledby="cta-heading">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-6 py-14 text-center sm:px-12 lg:py-20">
          <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-brand-600/40 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 id="cta-heading" className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-200">{description}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={primary.href} size="lg" arrow>
                {primary.label}
              </Button>
              <Button href={secondary.href} size="lg" variant="outline-light">
                {secondary.label}
              </Button>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-navy-200 sm:flex-row sm:gap-8">
              <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-white">
                <Icon name="phone" className="h-4 w-4" /> {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white">
                <Icon name="mail" className="h-4 w-4" /> {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
