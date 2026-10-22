import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PricingExplorer } from "@/components/PricingExplorer";
import { faqGroups } from "@/data/faqs";
import { categoryLabels, packages } from "@/data/packages";
import { organizationId, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Digital Marketing Packages UK | Fixed Prices from £10 to £150",
  description:
    "Compare 25 affordable digital marketing packages for UK businesses: SEO, local SEO, social media, Google Ads, content and strategy. Fixed one-off prices from £10 to £150, no hidden fees.",
  path: "/pricing",
});

const promises = [
  { icon: "shield" as const, title: "No hidden fees", body: "The price you see is the price you pay for the listed scope." },
  { icon: "calendar" as const, title: "One-off, no subscriptions", body: "Every package is a single engagement. Nothing renews automatically." },
  { icon: "file" as const, title: "Scope confirmed first", body: "We confirm exactly what's included before any payment is taken." },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: `${site.name} digital marketing packages`,
          url: absoluteUrl("/pricing"),
          itemListElement: packages.map((p) => ({
            "@type": "Offer",
            name: p.name,
            description: `${p.summary} Includes: ${p.features.join(", ")}.`,
            price: p.price,
            priceCurrency: "GBP",
            category: categoryLabels[p.category],
            seller: { "@id": organizationId },
            url: absoluteUrl(`/contact?package=${p.slug}`),
          })),
        }}
      />
      <PageHero
        eyebrow="Pricing & packages"
        title="Clear, fixed-price digital marketing packages"
        description="25 one-off packages from £10 to £150, covering SEO, local SEO, social media, Google Ads, content and strategy. Filter by category or price, compare what's included, and get started when you're ready."
        breadcrumbs={[{ name: "Pricing", path: "/pricing" }]}
      />

      <section className="border-b border-navy-100 bg-navy-50/60">
        <ul className="container-page grid gap-4 py-8 md:grid-cols-3">
          {promises.map((p) => (
            <li key={p.title} className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-brand-600 ring-1 ring-navy-100">
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-navy-950">{p.title}</p>
                <p className="text-sm text-navy-600">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="packages-heading">
        <div className="container-page">
          <h2 id="packages-heading" className="sr-only">
            All packages
          </h2>
          <PricingExplorer />
          <p className="mt-10 text-center text-sm text-navy-500">
            All prices are in GBP. &ldquo;Recommended&rdquo; marks good starting points for most businesses; &ldquo;Best
            Value&rdquo; marks the package with the broadest scope. Advertising spend is never included.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-20" aria-labelledby="custom-heading">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl border border-navy-100 bg-gradient-to-br from-white via-brand-50 to-white p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold tracking-wide text-brand-600 uppercase">Custom enquiry</p>
                <h2 id="custom-heading" className="mt-2 text-3xl font-bold">
                  Need something outside these packages?
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-navy-600">
                  Whether you need ongoing support, implementation help, a combination of services or something
                  entirely different, tell us what you need and we&apos;ll put together a clear, honest quote.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button href="/contact?service=Custom%20requirement" size="lg" arrow>
                  Request a Custom Quote
                </Button>
                <Button href={site.phoneHref} size="lg" variant="ghost">
                  <Icon name="phone" className="h-4 w-4" /> Call {site.phoneDisplay}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-navy-50/60" aria-labelledby="pricing-faq-heading">
        <div className="container-page max-w-4xl">
          <h2 id="pricing-faq-heading" className="text-center text-3xl font-bold sm:text-4xl">
            Pricing questions
          </h2>
          <div className="mt-10">
            <FAQ items={faqGroups[0].items} />
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which package is right?"
        description="Request a free consultation and we'll recommend the package that fits your goals and budget, or tell you honestly if none of them does."
        primary={{ href: "/contact?service=Not%20sure%20yet", label: "Request a Free Consultation" }}
        secondary={{ href: "/services", label: "Explore Services" }}
      />
    </>
  );
}
