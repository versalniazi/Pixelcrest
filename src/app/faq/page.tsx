import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqGroups } from "@/data/faqs";
import { faqSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ | Digital Marketing Packages, Pricing & Process",
  description:
    "Answers to common questions about our digital marketing packages, pricing, process, timescales and what results you can realistically expect.",
  path: "/faq",
});

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqGroups.flatMap((g) => g.items))} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Straight answers about how we work, what our packages include and what you can expect."
        breadcrumbs={[{ name: "FAQ", path: "/faq" }]}
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[16rem_1fr]">
          <nav aria-label="FAQ topics" className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm font-semibold tracking-wide text-navy-500 uppercase">Topics</p>
            <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col">
              {faqGroups.map((g) => (
                <li key={g.title}>
                  <a
                    href={`#${slug(g.title)}`}
                    className="block rounded-full bg-navy-50 px-4 py-2 text-sm font-medium text-navy-700 hover:bg-brand-50 hover:text-brand-700 lg:rounded-lg"
                  >
                    {g.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-14">
            {faqGroups.map((g) => (
              <section key={g.title} id={slug(g.title)} className="scroll-mt-28" aria-labelledby={`${slug(g.title)}-h`}>
                <h2 id={`${slug(g.title)}-h`} className="mb-6 text-2xl font-bold sm:text-3xl">
                  {g.title}
                </h2>
                <FAQ items={g.items} withSchema={false} />
              </section>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Still have a question?"
        description="Get in touch and we'll be happy to help. There's no obligation and no pressure."
        primary={{ href: "/contact", label: "Contact Us" }}
        secondary={{ href: "/pricing", label: "View Packages" }}
      />
    </>
  );
}
