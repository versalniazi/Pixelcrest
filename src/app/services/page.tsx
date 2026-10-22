import Link from "next/link";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceDetailCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { organizationId, pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Digital Marketing Services UK | SEO, PPC, Social & Content",
  description:
    "Explore our digital marketing services for UK businesses: SEO, local SEO, Google Business Profile, Google Ads, social media, content, keyword research, competitor analysis and strategy.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Digital marketing services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.name,
              description: s.whatItIs,
              provider: { "@id": organizationId },
              areaServed: "GB",
              url: absoluteUrl(s.href === "/services" ? `/services#${s.id}` : s.href),
            },
          })),
        }}
      />
      <PageHero
        eyebrow="Digital marketing services UK"
        title="Digital marketing services built around your goals"
        description="Whether you need to be found on Google, win local customers, run effective ads or build a stronger social presence, we provide practical expertise with transparent pricing."
        breadcrumbs={[{ name: "Services", path: "/services" }]}
      >
        <Button href="/contact" size="lg" arrow>
          Get a Quote
        </Button>
        <Button href="/pricing" size="lg" variant="outline-light">
          View Packages
        </Button>
      </PageHero>

      <nav aria-label="Jump to a service" className="sticky top-16 z-30 border-b border-navy-100 bg-white/90 backdrop-blur lg:top-20">
        <div className="container-page overflow-x-auto">
          <ul className="flex gap-2 py-3 whitespace-nowrap">
            {services.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3.5 py-1.5 text-sm font-medium text-navy-700 hover:bg-brand-50 hover:text-brand-700"
                >
                  <Icon name={s.icon} className="h-3.5 w-3.5" />
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="section" aria-labelledby="all-services-heading">
        <div className="container-page">
          <SectionHeading
            title={<span id="all-services-heading">Our services</span>}
            description="Each service is available through fixed-price packages, or as part of a custom engagement shaped around your needs."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {services.map((s) => (
              <ServiceDetailCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-4" aria-labelledby="unsure-heading">
        <div className="container-page">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 id="unsure-heading" className="text-2xl font-bold">
                Not sure which service you need?
              </h2>
              <p className="mt-2 text-navy-600">
                Tell us about your business and goals. We&apos;ll recommend where to start, or suggest a{" "}
                <Link href="/pricing" className="font-semibold text-brand-600 hover:underline">
                  package
                </Link>{" "}
                that fits.
              </p>
            </div>
            <Button href="/contact?service=Not%20sure%20yet" arrow>
              Request a Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
