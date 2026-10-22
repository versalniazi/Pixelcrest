export type FaqGroup = { title: string; items: { q: string; a: string }[] };

export const faqGroups: FaqGroup[] = [
  {
    title: "Packages & pricing",
    items: [
      {
        q: "Are your prices fixed?",
        a: "Yes. Every listed package has a fixed, one-off price between £10 and £150, shown in full on our pricing page. There are no hidden fees, setup charges or automatic renewals.",
      },
      {
        q: "Are the packages monthly subscriptions?",
        a: "No. All listed packages are one-off. If you'd like ongoing support, we can discuss a custom arrangement that suits your needs.",
      },
      {
        q: "What if I need something not listed?",
        a: "Use the custom enquiry option on our pricing or contact page and tell us what you need. We'll let you know honestly whether we can help and what it would cost.",
      },
      {
        q: "Does the Google Ads package include ad spend?",
        a: "No. Package prices cover our work only. Any advertising budget is paid directly to the ad platform from your own account.",
      },
      {
        q: "How do I pay?",
        a: "Once we've confirmed your requirements, we'll send you payment details. Work begins once the scope is agreed and payment has been arranged.",
      },
    ],
  },
  {
    title: "Working with us",
    items: [
      {
        q: "How do I get started?",
        a: "Choose a package and click Get Started, or send us an enquiry through the contact form. We'll review your requirements and confirm the next steps.",
      },
      {
        q: "What information will you need from me?",
        a: "Usually your website address, social profile links where relevant, a summary of your business and goals, and any competitors you'd like us to consider. For account reviews we'll need appropriate access.",
      },
      {
        q: "How long does each package take?",
        a: "Timescales depend on the package and our current workload. We'll confirm an expected delivery time before you commit.",
      },
      {
        q: "How will I receive my deliverables?",
        a: "Deliverables are sent digitally, typically as a document or report, with clear, prioritised recommendations written in plain English.",
      },
      {
        q: "Do you work with businesses outside the UK?",
        a: "We focus on UK businesses, but we're happy to discuss your needs if you're based elsewhere.",
      },
    ],
  },
  {
    title: "Results & expectations",
    items: [
      {
        q: "Do you guarantee results?",
        a: "No. No honest agency can guarantee rankings, followers or sales, because results depend on factors outside anyone's control, including competition, search engine algorithms and how recommendations are implemented. We guarantee clear, practical, carefully researched work.",
      },
      {
        q: "Will you implement the recommendations?",
        a: "Most listed packages deliver strategy, audits and recommendations that you or your team can implement. If you'd like implementation support, ask us for a quote.",
      },
      {
        q: "I'm not sure which package I need. Can you help?",
        a: "Yes. Request a free consultation, tell us about your business and goals, and we'll suggest the package that fits best, or tell you if none of them is right.",
      },
    ],
  },
];
