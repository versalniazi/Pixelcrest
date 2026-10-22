import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PricingCard } from "@/components/PricingCard";
import { ProcessSteps } from "@/components/ProcessStep";
import { SectionHeading } from "@/components/SectionHeading";
import { formatPrice, packagesByCategory } from "@/data/packages";
import { getServicePage, servicePages } from "@/data/service-pages";
import { organizationId, pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params) {
  const page = getServicePage((await params).slug);
  if (!page) return {};
  return pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: `/services/${page.slug}` });
}

export default async function ServiceLandingPage({ params }: Params) {
  const page = getServicePage((await params).slug);
  if (!page) notFound();

  const related = packagesByCategory(page.packageCategories);
  const shown = related.slice(0, 6);
  const enquireHref = `/contact?service=${encodeURIComponent(page.formService)}`;
  const others = servicePages.filter((p) => p.slug !== page.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.h1,
          serviceType: page.navLabel,
          description: page.metaDescription,
          provider: { "@id": organizationId },
          areaServed: { "@type": "Country", name: "United Kingdom" },
          url: absoluteUrl(`/services/${page.slug}`),
          offers: related.map((p) => ({
            "@type": "Offer",
            name: p.name,
            price: p.price,
            priceCurrency: "GBP",
            url: absoluteUrl(`/contact?package=${p.slug}`),
          })),
        }}
      />
      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        description={page.intro}
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: page.navLabel, path: `/services/${page.slug}` },
        ]}
        aside={
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-accent text-white">
              <Icon name={page.icon} className="h-7 w-7" />
            </span>
            <p className="mt-6 text-sm font-semibold tracking-wide text-brand-200 uppercase">Packages from</p>
            <p className="mt-1 font-display text-5xl font-extrabold text-white">
              {formatPrice(Math.min(...related.map((p) => p.price)))}
            </p>
            <p className="mt-2 text-sm text-navy-300">One-off, fixed price. No contracts.</p>
            <ul className="mt-6 space-y-2.5 text-sm text-navy-100">
              {page.objectives.slice(0, 3).map((o) => (
                <li key={o} className="flex gap-2">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <Button href={enquireHref} size="lg" arrow>
          Get a Quote
        </Button>
        <Button href="#packages" size="lg" variant="outline-light">
          View Packages
        </Button>
      </PageHero>

      <section className="section" aria-labelledby="overview-heading">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 id="overview-heading" className="text-3xl font-bold sm:text-4xl">
              {page.overview.heading}
            </h2>
            {page.overview.body.map((p) => (
              <p key={p} className="mt-5 text-lg leading-relaxed text-navy-600">
                {p}
              </p>
            ))}
          </div>
          <aside className="rounded-2xl bg-navy-50 p-7" aria-labelledby="who-heading">
            <h2 id="who-heading" className="text-xl font-bold">
              Who it&apos;s for
            </h2>
            <ul className="mt-5 space-y-3.5">
              {page.whoFor.map((w) => (
                <li key={w} className="flex gap-3 text-navy-700">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {w}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section bg-navy-50/60" aria-labelledby="included-heading">
        <div className="container-page">
          <SectionHeading eyebrow="What's included" title={<span id="included-heading">What we cover</span>} />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.included.map((item, i) => (
              <li key={item.title} className="card p-7">
                <span className="font-display text-sm font-bold text-brand-600">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-navy-600">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="objectives-heading">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-brand-600 uppercase">Business objectives</p>
            <h2 id="objectives-heading" className="text-3xl font-bold sm:text-4xl">
              What this work is designed to achieve
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              We focus on outcomes that matter to your business. We don&apos;t promise specific figures, because results
              depend on your market and how recommendations are put into practice.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {page.objectives.map((o) => (
              <li key={o} className="flex gap-3 rounded-xl border border-navy-100 p-5 text-navy-800">
                <Icon name="target" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-navy-950" aria-labelledby="steps-heading">
        <div className="container-page">
          <SectionHeading tone="light" eyebrow="Our process" title={<span id="steps-heading">How it works</span>} />
          <div className="mt-16">
            <ProcessSteps steps={page.steps} tone="light" />
          </div>
        </div>
      </section>

      <section id="packages" className="section scroll-mt-20" aria-labelledby="packages-heading">
        <div className="container-page">
          <SectionHeading
            eyebrow="Packages"
            title={<span id="packages-heading">Related packages</span>}
            description="Fixed, one-off prices. Choose a package, or ask us to tailor one to your needs."
          />
          <ul className="mt-14 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <li key={p.slug}>
                <PricingCard pkg={p} />
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/pricing" variant="ghost" arrow>
              {related.length > shown.length ? `See all ${related.length} related packages` : "Compare all packages"}
            </Button>
            <Button href={enquireHref}>Request a custom quote</Button>
          </div>
        </div>
      </section>

      <section className="section bg-navy-50/60" aria-labelledby="service-faq-heading">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 id="service-faq-heading" className="text-3xl font-bold sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-5 text-lg text-navy-600">
              More questions? See our{" "}
              <Link href="/faq" className="font-semibold text-brand-600 hover:underline">
                full FAQ
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="font-semibold text-brand-600 hover:underline">
                get in touch
              </Link>
              .
            </p>
          </div>
          <FAQ items={page.faqs} />
        </div>
      </section>

      <section className="pt-16 sm:pt-20" aria-labelledby="other-services-heading">
        <div className="container-page">
          <h2 id="other-services-heading" className="text-2xl font-bold">
            Explore other services
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/services/${o.slug}`}
                  className="flex items-center gap-3 rounded-xl border border-navy-100 p-4 font-semibold text-navy-900 transition hover:border-brand-200 hover:bg-brand-50"
                >
                  <Icon name={o.icon} className="h-5 w-5 text-brand-600" />
                  {o.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
