import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { organizationId, pageMetadata } from "@/lib/seo";
import { absoluteUrl, mailto, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Us | Get a Quote or Free Consultation",
  description: `Contact ${site.name} for a free consultation or quote on SEO, local SEO, social media, Google Ads and content marketing. Call ${site.phoneDisplay} or email us.`,
  path: "/contact",
});

const nextSteps = [
  "We review your enquiry and requirements",
  "We get in touch to discuss your goals and confirm scope",
  "You receive a clear recommendation and price before any work begins",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: absoluteUrl("/contact"),
          about: { "@id": organizationId },
        }}
      />
      <PageHero
        eyebrow="Contact"
        title="Let's talk about growing your business"
        description="Request a free consultation, ask about a package or get a quote for something custom. Fill in the form, call or email, whichever suits you best."
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
      />

      <section className="section" aria-label="Contact options">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          <aside className="space-y-6">
            <div className="card p-7">
              <h2 className="text-xl font-bold">Contact details</h2>
              <ul className="mt-6 space-y-5">
                <li>
                  <a href={site.phoneHref} className="group flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
                      <Icon name="phone" className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm text-navy-500">Call us</span>
                      <span className="block font-semibold text-navy-950 group-hover:text-brand-600">
                        {site.phoneDisplay}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={mailto("Website enquiry")} className="group flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
                      <Icon name="mail" className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-navy-500">Email us</span>
                      <span className="block font-semibold break-all text-navy-950 group-hover:text-brand-600">
                        {site.email}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-navy-950 p-7 text-white">
              <h2 className="text-xl font-bold text-white">What happens next?</h2>
              <ol className="mt-5 space-y-4">
                {nextSteps.map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-500 text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="text-navy-200">{s}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-white/10 pt-5 text-sm text-navy-300">
                No obligation. Your details are used only to respond to your enquiry.
              </p>
            </div>
          </aside>

          <div className="card p-6 sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Send us an enquiry</h2>
            <p className="mt-2 mb-8 text-navy-600">
              Tell us a little about your business and what you need. The more detail, the more useful our reply.
            </p>
            <Suspense fallback={<div className="h-[40rem] animate-pulse rounded-xl bg-navy-50" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
