import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessStep";
import { SectionHeading } from "@/components/SectionHeading";
import { coreServices } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "About Us | UK Digital Marketing Agency",
  description: `Learn about ${site.name}, a UK digital marketing agency focused on practical, measurable marketing for start-ups, small businesses and established companies.`,
  path: "/about",
});

const approach = [
  { icon: "compass" as const, title: "Strategy before tactics", body: "We start with your goals and customers, then choose the channels and activity that serve them." },
  { icon: "shield" as const, title: "Honest advice", body: "We tell you what we think will work, what won't, and when a package isn't the right fit." },
  { icon: "chart" as const, title: "Evidence over opinion", body: "Recommendations are grounded in research: keyword data, competitor analysis and how your audience behaves." },
  { icon: "layers" as const, title: "Plain-English deliverables", body: "Clear, prioritised recommendations that anyone in your business can understand and act on." },
];

const reasons = [
  "Published, fixed prices for every listed package",
  "No long-term contracts or automatic renewals",
  "Packages for every stage, from £10 to £150",
  "Focus on enquiries and sales, not vanity metrics",
  "Honest expectations, with no guaranteed-ranking promises",
  "Direct contact by phone and email",
];

const steps = [
  { title: "Discovery", body: "Understanding your business, audience, competitors and goals." },
  { title: "Strategy", body: "Prioritising the channels and actions with the most potential." },
  { title: "Implementation", body: "Delivering the agreed audits, plans, campaigns and recommendations." },
  { title: "Optimisation", body: "Refining based on what the evidence shows." },
  { title: "Reporting", body: "Clear updates on what was done and what comes next." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A practical digital marketing partner for UK businesses"
        description="We help start-ups, small businesses, entrepreneurs and established companies grow online with clear strategy, honest advice and transparent pricing."
        breadcrumbs={[{ name: "About", path: "/about" }]}
      >
        <Button href="/contact" size="lg" arrow>
          Get Started
        </Button>
        <Button href="/pricing" size="lg" variant="outline-light">
          View Packages
        </Button>
      </PageHero>

      <section className="section" aria-labelledby="who-heading">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-brand-600 uppercase">Who we are</p>
            <h2 id="who-heading" className="text-3xl font-bold sm:text-4xl">
              Marketing that makes sense for your business
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-navy-600">
            <p>
              {site.name} is a UK-based digital marketing agency. We exist to make professional digital marketing
              accessible to businesses of every size, without confusing jargon, inflated retainers or unrealistic
              promises.
            </p>
            <p>
              Too many businesses are told they need expensive long-term contracts before they see any value. We take a
              different approach: clear, fixed-price packages that deliver something useful from day one, and the
              flexibility to go further when you&apos;re ready.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-navy-50/60" aria-labelledby="what-heading">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we do"
            title={<span id="what-heading">Services across the full digital journey</span>}
            description="From being found to being chosen, we help with every stage of how customers discover and decide."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  className="flex h-full items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 transition hover:border-brand-200 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-bold text-navy-950">{s.name}</span>
                    <span className="mt-1 block text-[0.95rem] text-navy-600">{s.short}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="approach-heading">
        <div className="container-page">
          <SectionHeading eyebrow="Our approach" title={<span id="approach-heading">How we think about marketing</span>} />
          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {approach.map((a) => (
              <li key={a.title} className="card flex gap-5 p-7">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-accent text-white">
                  <Icon name={a.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold">{a.title}</h3>
                  <p className="mt-2 leading-relaxed text-navy-600">{a.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-navy-950" aria-labelledby="process-heading">
        <div className="container-page">
          <SectionHeading tone="light" eyebrow="Our process" title={<span id="process-heading">Five steps from first call to progress</span>} />
          <div className="mt-16">
            <ProcessSteps steps={steps} tone="light" />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-heading">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-brand-600 uppercase">Why businesses work with us</p>
            <h2 id="why-heading" className="text-3xl font-bold sm:text-4xl">
              Straightforward, transparent and focused on your growth
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-600">
              We want you to feel confident about every pound you spend on marketing. That starts with being clear about
              what you get, what it costs and what you can realistically expect.
            </p>
            <p className="mt-6 text-sm text-navy-500">
              Our company details are publicly available on{" "}
              <a
                href={site.companiesHouseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-600 underline underline-offset-2"
              >
                Companies House<span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r} className="flex gap-3 rounded-xl bg-navy-50 p-5 font-medium text-navy-800">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
