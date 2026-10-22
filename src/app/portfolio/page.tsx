import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudies } from "@/data/case-studies";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies & Portfolio | Digital Marketing Work",
  description:
    "How we document and report on digital marketing work for UK businesses, from SEO audits and local SEO to social media strategy and Google Ads.",
  path: "/portfolio",
});

const deliverables = [
  {
    icon: "search" as const,
    title: "SEO audit report",
    items: ["Technical health findings", "On-page issues by page", "Keyword opportunities", "Prioritised fixes"],
  },
  {
    icon: "pin" as const,
    title: "Local SEO action plan",
    items: ["Google Business Profile checklist", "Citation recommendations", "Local keyword map", "Review strategy"],
  },
  {
    icon: "calendar" as const,
    title: "Social media content plan",
    items: ["Content pillars", "30-day calendar", "Post concepts & captions", "Posting recommendations"],
  },
  {
    icon: "target" as const,
    title: "Google Ads review",
    items: ["Campaign structure notes", "Targeting & keyword review", "Ad-copy suggestions", "Improvement checklist"],
  },
  {
    icon: "compass" as const,
    title: "Digital growth roadmap",
    items: ["Audience & competitor insight", "Channel priorities", "Content direction", "30 to 90-day action plan"],
  },
  {
    icon: "cursor" as const,
    title: "Conversion checklist",
    items: ["Landing-page review", "CTA & form improvements", "Trust and messaging notes", "Mobile experience checks"],
  },
];

const structure = [
  { title: "The challenge", body: "What the business wanted to achieve and what was holding it back." },
  { title: "Our approach", body: "The research we carried out and the strategy we recommended." },
  { title: "What we delivered", body: "The specific audits, plans, campaigns or recommendations provided." },
  { title: "The outcome", body: "Verified results, shared only with the client's permission." },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio & case studies"
        title="Our work and how we report on it"
        description="We believe case studies should be genuine, verifiable and shared with permission. Here's what our work looks like and how we document results."
        breadcrumbs={[{ name: "Case Studies", path: "/portfolio" }]}
      />

      {caseStudies.length > 0 ? (
        <section className="section" aria-labelledby="cases-heading">
          <div className="container-page">
            <SectionHeading title={<span id="cases-heading">Case studies</span>} />
            <ul className="mt-14 grid gap-6 lg:grid-cols-2">
              {caseStudies.map((c) => (
                <li key={c.slug} className="card p-8">
                  <p className="text-sm font-semibold text-brand-600">{c.sector}</p>
                  <h3 className="mt-2 text-2xl font-bold">{c.client}</h3>
                  <p className="mt-1 text-sm text-navy-500">{c.services.join(" · ")}</p>
                  <dl className="mt-6 space-y-4">
                    {[
                      ["Challenge", c.challenge],
                      ["Approach", c.approach],
                      ["Outcome", c.outcome],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-semibold text-navy-950">{k}</dt>
                        <dd className="mt-1 text-navy-600">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : (
        <section className="section" aria-labelledby="coming-heading">
          <div className="container-page">
            <div className="mx-auto max-w-3xl rounded-3xl border border-navy-100 bg-navy-50/60 p-8 text-center sm:p-12">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white">
                <Icon name="file" className="h-7 w-7" />
              </span>
              <h2 id="coming-heading" className="mt-6 text-3xl font-bold">
                Client case studies are on their way
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-navy-600">
                We only publish case studies with our clients&apos; permission and real, verifiable results. Rather than
                show invented examples, we&apos;ll add detailed write-ups here as they&apos;re approved. In the
                meantime, you&apos;re welcome to ask us about our approach to your type of business.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/contact" arrow>
                  Ask About Our Work
                </Button>
                <Button href="/pricing" variant="ghost">
                  View Packages
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section bg-navy-50/60" aria-labelledby="deliverables-heading">
        <div className="container-page">
          <SectionHeading
            eyebrow="What you receive"
            title={<span id="deliverables-heading">The kind of work we deliver</span>}
            description="Every package results in a clear, practical deliverable. These are the typical contents of our most common outputs."
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d) => (
              <li key={d.title} className="card p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                  <Icon name={d.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{d.title}</h3>
                <ul className="mt-4 space-y-2">
                  {d.items.map((i) => (
                    <li key={i} className="flex gap-2 text-[0.95rem] text-navy-700">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      {i}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="structure-heading">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our standard"
            title={<span id="structure-heading">How our case studies are structured</span>}
            description="When we publish client work, every case study follows the same honest format."
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {structure.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-navy-100 p-6">
                <span className="font-display text-3xl font-extrabold text-brand-600/30">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-navy-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}
