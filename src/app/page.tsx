import Link from "next/link";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Icon } from "@/components/Icon";
import { PricingCard } from "@/components/PricingCard";
import { ProcessSteps } from "@/components/ProcessStep";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonial } from "@/components/Testimonial";
import { faqGroups } from "@/data/faqs";
import { featuredPackages } from "@/data/packages";
import { coreServices } from "@/data/services";
import { placeholderTestimonials, testimonials } from "@/data/testimonials";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const homeTitle = `Digital Marketing Agency UK | SEO, Social & PPC | ${site.name}`;

export const metadata = {
  ...pageMetadata({
    title: homeTitle,
    description:
      "UK digital marketing agency helping businesses grow with SEO, local SEO, social media marketing, Google Ads and content. Transparent one-off packages from £10 to £150.",
    path: "/",
  }),
  title: { absolute: homeTitle },
};

const reasons = [
  { icon: "compass" as const, title: "Clear strategy", body: "Every recommendation ties back to your business goals, so you always know why you're doing something." },
  { icon: "shield" as const, title: "Transparent pricing", body: "Fixed, one-off prices published in full. No hidden fees, no lock-in contracts, no surprises." },
  { icon: "layers" as const, title: "Practical solutions", body: "Actionable recommendations in plain English that you, your team or your developer can put into practice." },
  { icon: "chart" as const, title: "Data-driven approach", body: "We base decisions on research and evidence, from keyword data to competitor analysis, not guesswork." },
  { icon: "sliders" as const, title: "Flexible packages", body: "Start small with a £10 audit or go further with a complete strategy. Choose what fits your stage and budget." },
  { icon: "briefcase" as const, title: "Business-focused execution", body: "We focus on enquiries, sales and growth, not vanity metrics that look good but don't pay the bills." },
];

const processSteps = [
  { title: "Discovery", body: "We learn about your business, customers, competitors and goals." },
  { title: "Strategy", body: "We identify the channels and priorities most likely to move the needle." },
  { title: "Implementation", body: "We deliver the agreed work: audits, plans, campaigns and recommendations." },
  { title: "Optimisation", body: "We refine based on what the data shows, focusing effort where it counts." },
  { title: "Reporting", body: "You get clear, honest reporting on what was done and what comes next." },
];

const outcomes = [
  { icon: "search" as const, title: "More visibility in search", body: "Appear for more of the searches your customers make, in both organic and local results." },
  { icon: "target" as const, title: "More qualified enquiries", body: "Attract people who are actively looking for what you offer, not just more traffic." },
  { icon: "cursor" as const, title: "Better website conversion", body: "Turn a higher share of visitors into calls, form submissions and sales." },
  { icon: "share" as const, title: "A stronger brand presence", body: "Build a consistent, professional presence that earns trust across channels." },
  { icon: "chart" as const, title: "Smarter marketing spend", body: "Focus budget on activity with a clear purpose and cut what isn't working." },
  { icon: "compass" as const, title: "A clear plan forward", body: "Know exactly what to do next, in what order, and why it matters." },
];

export default function HomePage() {
  const showTestimonials = testimonials.length > 0 || process.env.NODE_ENV !== "production";
  const testimonialItems = testimonials.length > 0 ? testimonials : placeholderTestimonials;
  const homeFaqs = [faqGroups[0].items[0], faqGroups[0].items[1], faqGroups[2].items[0], faqGroups[2].items[2]];

  return (
    <>
      <Hero />

      {/* Trust statement */}
      <section className="border-b border-navy-100 bg-navy-50/60" aria-labelledby="trust-heading">
        <div className="container-page grid gap-8 py-12 lg:grid-cols-[1fr_2fr] lg:items-center lg:py-14">
          <h2 id="trust-heading" className="text-2xl font-bold sm:text-3xl">
            Digital Marketing Services for Businesses Ready to Grow
          </h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {[
              { t: "Start-ups & entrepreneurs", d: "Build the right foundations from day one." },
              { t: "Small & local businesses", d: "Get found by customers in your area." },
              { t: "Established companies", d: "Get an independent view and a sharper plan." },
            ].map((x) => (
              <li key={x.t} className="rounded-xl border border-navy-100 bg-white p-5">
                <p className="font-semibold text-navy-950">{x.t}</p>
                <p className="mt-1 text-sm text-navy-600">{x.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services overview */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold tracking-wide text-brand-600 uppercase">What we do</p>
              <h2 id="services-heading" className="text-3xl font-bold sm:text-4xl lg:text-[2.75rem]">
                Digital marketing services UK businesses rely on
              </h2>
              <p className="mt-5 text-lg text-navy-600">
                From getting found on Google to turning visitors into customers, we cover the channels that matter most
                for growth.
              </p>
            </div>
            <Button href="/services" variant="ghost" arrow>
              All services
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section relative overflow-hidden bg-navy-50/60" aria-labelledby="why-heading">
        <div className="bg-grid-light pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-page relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="mb-3 text-sm font-semibold tracking-wide text-brand-600 uppercase">Why choose us</p>
            <h2 id="why-heading" className="text-3xl font-bold sm:text-4xl lg:text-[2.75rem]">
              A marketing partner that keeps things clear and practical
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              We believe good marketing should be understandable, accountable and affordable. That&apos;s why we publish
              our prices, explain our thinking and focus on the work that makes a real difference.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" arrow>
                Request a Free Consultation
              </Button>
              <Button href="/about" variant="ghost">
                About us
              </Button>
            </div>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r.title} className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-white">
                  <Icon name={r.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-navy-600">{r.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section" aria-labelledby="process-heading">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we work"
            title={<span id="process-heading">A simple, proven process</span>}
            description="Five clear stages take you from first conversation to measurable progress."
          />
          <div className="mt-16">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="section relative overflow-hidden bg-navy-950" aria-labelledby="pricing-heading">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-[48rem] max-w-full -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl" aria-hidden="true" />
        <div className="container-page relative">
          <SectionHeading
            tone="light"
            eyebrow="Digital marketing packages UK"
            title={<span id="pricing-heading">Transparent packages from £10 to £150</span>}
            description="25 fixed-price, one-off packages covering SEO, local SEO, social media, PPC, content and strategy. Here are three popular starting points."
          />
          <ul className="mt-14 grid gap-8 md:grid-cols-3">
            {featuredPackages.map((p) => (
              <li key={p.slug}>
                <PricingCard pkg={p} compact />
              </li>
            ))}
          </ul>
          <div className="mt-12 text-center">
            <Button href="/pricing" variant="light" size="lg" arrow>
              Compare all 25 packages
            </Button>
            <p className="mt-4 text-sm text-navy-300">
              Need something different?{" "}
              <Link href="/contact?service=Custom%20requirement" className="font-semibold text-white underline underline-offset-4">
                Request a custom quote
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section" aria-labelledby="results-heading">
        <div className="container-page">
          <SectionHeading
            eyebrow="Outcomes"
            title={<span id="results-heading">The results we help you work towards</span>}
            description="Every business is different, so we don't promise specific numbers. We do help you set clear goals and focus on the outcomes that matter."
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((o) => (
              <li key={o.title} className="flex gap-4 rounded-2xl border border-navy-100 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={o.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{o.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-navy-600">{o.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-navy-500">
            Results depend on factors including your market, competition, budget and how recommendations are
            implemented. We&apos;ll always be honest about what&apos;s realistic.
          </p>
        </div>
      </section>

      {showTestimonials ? (
        <section className="section bg-navy-50/60" aria-labelledby="testimonials-heading">
          <div className="container-page">
            <SectionHeading eyebrow="Client feedback" title={<span id="testimonials-heading">What our clients say</span>} />
            {testimonials.length === 0 ? (
              <p className="mx-auto mt-6 max-w-xl rounded-xl border border-amber-200 bg-amber-50 p-4 text-center text-sm text-amber-900">
                Development preview: these are placeholders, not real reviews. Add genuine testimonials in{" "}
                <code className="font-mono">src/data/testimonials.ts</code>. This section is hidden in production until
                you do.
              </p>
            ) : null}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonialItems.map((t, i) => (
                <Testimonial key={i} data={t} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ preview */}
      <section className="section" aria-labelledby="home-faq-heading">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-brand-600 uppercase">FAQ</p>
            <h2 id="home-faq-heading" className="text-3xl font-bold sm:text-4xl">
              Questions, answered honestly
            </h2>
            <p className="mt-5 text-lg text-navy-600">
              Can&apos;t find what you&apos;re looking for? Call us on{" "}
              <a href={site.phoneHref} className="font-semibold text-brand-600 hover:underline">
                {site.phoneDisplay}
              </a>{" "}
              or{" "}
              <Link href="/faq" className="font-semibold text-brand-600 hover:underline">
                read all FAQs
              </Link>
              .
            </p>
          </div>
          <FAQ items={homeFaqs} withSchema={false} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
