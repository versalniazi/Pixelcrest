import { site } from "@/lib/site";
import { Button } from "./Button";
import { HeroVisual } from "./HeroVisual";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl lg:left-[70%]"
        aria-hidden="true"
      />
      <div className="container-page relative grid items-center gap-16 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
        <div className="animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1.5 text-sm font-medium text-brand-100 ring-1 ring-white/15">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            UK digital marketing agency
          </p>
          <h1 className="text-[2.6rem] leading-[1.05] font-extrabold text-white sm:text-6xl lg:text-[4.1rem]">
            Grow your business with <span className="text-gradient">digital marketing</span> that delivers
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200 sm:text-xl">
            SEO, local SEO, social media, Google Ads and content marketing for UK businesses, delivered through clear
            strategy and transparent packages from £10 to £150.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg" arrow>
              Get Started
            </Button>
            <Button href="/pricing" size="lg" variant="outline-light">
              View Packages
            </Button>
          </div>
          <ul className="mt-10 grid gap-3 text-sm text-navy-200 sm:grid-cols-3">
            {["Fixed, transparent prices", "No contracts or subscriptions", "Plain-English recommendations"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 shrink-0 text-emerald-400" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-navy-300">
            Prefer to talk?{" "}
            <a href={site.phoneHref} className="font-semibold text-white underline-offset-4 hover:underline">
              {site.phoneDisplay}
            </a>{" "}
            or{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-white underline-offset-4 hover:underline">
              email us
            </a>
          </p>
        </div>
        <div className="animate-fade-up [animation-delay:150ms]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
