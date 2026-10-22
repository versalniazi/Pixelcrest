import type { PackageCategory } from "./packages";
import type { IconName } from "./services";

export type ServicePage = {
  slug: string;
  navLabel: string;
  /** Matching option in the contact form's "Service required" list. */
  formService: string;
  icon: IconName;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  overview: { heading: string; body: string[] };
  whoFor: string[];
  included: { title: string; body: string }[];
  objectives: string[];
  steps: { title: string; body: string }[];
  packageCategories: PackageCategory[];
  faqs: { q: string; a: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "seo",
    navLabel: "SEO Services",
    formService: "SEO",
    icon: "search",
    metaTitle: "SEO Services UK | SEO Audits, Strategy & Optimisation",
    metaDescription:
      "Practical SEO services for UK businesses: keyword research, technical SEO, on-page optimisation and content strategy. Transparent one-off SEO packages from £25.",
    eyebrow: "SEO services UK",
    h1: "SEO services that build lasting search visibility",
    intro:
      "We help UK businesses understand why their website is or isn't being found in Google, then give them a clear, prioritised plan to improve it, without jargon or long contracts.",
    overview: {
      heading: "What SEO involves",
      body: [
        "Search engine optimisation is about making your website the most relevant, trustworthy answer to the searches your customers make. That means getting the technical foundations right, structuring pages around real search intent, and publishing content that deserves to rank.",
        "SEO is a long-term channel. Results depend on your market, your competitors and how consistently recommendations are implemented, so we focus on clear priorities you can act on rather than promises about rankings.",
      ],
    },
    whoFor: [
      "Businesses with a website that isn't bringing in enquiries from Google",
      "Start-ups planning a new website who want to get the structure right from day one",
      "Companies spending heavily on ads who want to build an organic channel alongside",
      "Owners who want an independent view before hiring an ongoing SEO provider",
    ],
    included: [
      { title: "Keyword research", body: "The search terms your customers use, grouped by intent and prioritised by opportunity." },
      { title: "Technical SEO review", body: "Crawlability, indexing, page speed indicators, mobile usability and site structure." },
      { title: "On-page optimisation", body: "Title tags, meta descriptions, headings and internal links that match search intent." },
      { title: "Competitor review", body: "What competing websites do well in search, and where you can realistically compete." },
      { title: "Content recommendations", body: "Topics and page ideas that fill gaps and support your most valuable keywords." },
      { title: "Prioritised action plan", body: "A clear order of work so the highest-impact fixes happen first." },
    ],
    objectives: [
      "More qualified organic visitors to the pages that matter",
      "Better visibility for high-intent, service-related searches",
      "A website structure search engines can easily understand",
      "Less dependence on paid advertising over time",
    ],
    steps: [
      { title: "Discovery", body: "We learn about your business, customers, goals and current website." },
      { title: "Research & audit", body: "We review your site, keywords and competitors." },
      { title: "Recommendations", body: "You receive clear, prioritised recommendations in plain English." },
      { title: "Next steps", body: "We walk through the findings and agree what to tackle first." },
    ],
    packageCategories: ["seo", "content"],
    faqs: [
      {
        q: "How long does SEO take to work?",
        a: "It varies by competition, the state of your website and how quickly changes are implemented. Some technical fixes can have an effect within weeks, while content and authority building usually take several months. We don't guarantee rankings or timescales because no one can control Google's results.",
      },
      {
        q: "Do you guarantee first-page rankings?",
        a: "No. Anyone who guarantees specific rankings is over-promising. We focus on doing the right work in the right order and reporting honestly on progress.",
      },
      {
        q: "Will you make the changes to my website?",
        a: "Our listed packages deliver research and recommendations. If you would like help implementing changes, request a quote and we'll scope it with you.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    navLabel: "Social Media Marketing",
    formService: "Social Media Marketing",
    icon: "share",
    metaTitle: "Social Media Marketing UK | Strategy, Content Plans & Management",
    metaDescription:
      "Social media marketing for UK businesses: profile audits, content plans, platform strategy and management support. Clear one-off packages from £10.",
    eyebrow: "Social media marketing UK",
    h1: "Social media marketing with a clear purpose",
    intro:
      "Posting without a plan is exhausting and rarely brings in customers. We help you choose the right platforms, define what to say, and build a content rhythm you can keep up.",
    overview: {
      heading: "Our approach to social media",
      body: [
        "Good social media starts with knowing who you're talking to and why they should care. We define your audience, positioning and content pillars first, then turn them into practical plans, post ideas and captions.",
        "Whether you need a quick profile review or a full strategy with monthly planning support, every package is designed to leave you with something you can use straight away.",
      ],
    },
    whoFor: [
      "Small businesses that post inconsistently or aren't sure what to post",
      "Start-ups building an audience from scratch",
      "Brands whose social profiles don't reflect the quality of their work",
      "Teams that need a structured monthly content plan",
    ],
    included: [
      { title: "Profile audits", body: "A review of your bio, imagery, highlights and recent content with improvement suggestions." },
      { title: "Bio optimisation", body: "A clear, keyword-aware bio with a strong call to action." },
      { title: "Platform strategy", body: "Which platforms suit your audience and goals, and how to use each one." },
      { title: "Content pillars", body: "The recurring themes that make your content recognisable and useful." },
      { title: "Content plans", body: "A 30-day calendar with post concepts, captions and posting recommendations." },
      { title: "Management support", body: "Monthly planning and creative direction to keep you consistent." },
    ],
    objectives: [
      "A professional profile that builds trust at first glance",
      "Consistent, on-brand content without last-minute stress",
      "Stronger engagement from the right audience",
      "More enquiries and website visits from social channels",
    ],
    steps: [
      { title: "Discovery", body: "We review your current channels, audience and goals." },
      { title: "Strategy", body: "We define positioning, platforms and content pillars." },
      { title: "Planning", body: "We create content ideas, captions and a posting plan." },
      { title: "Review", body: "We suggest how to measure what's working and refine it." },
    ],
    packageCategories: ["social"],
    faqs: [
      {
        q: "Which platforms do you work with?",
        a: "Our recommendations cover the major platforms, including Instagram, Facebook, LinkedIn and TikTok. We'll recommend the ones that make sense for your audience rather than suggesting you be everywhere.",
      },
      {
        q: "Do you post content on our behalf?",
        a: "Our listed packages focus on strategy, planning and content direction. If you need us to schedule or publish posts, get in touch for a custom quote.",
      },
      {
        q: "Can you guarantee follower growth?",
        a: "No. Growth depends on many factors including your industry, content consistency and budget. We focus on building a strategy that gives you the best chance of reaching the right people.",
      },
    ],
  },
  {
    slug: "google-ads-ppc",
    navLabel: "Google Ads / PPC",
    formService: "Google Ads / PPC",
    icon: "target",
    metaTitle: "Google Ads Agency UK | PPC Services, Setup & Account Reviews",
    metaDescription:
      "Google Ads and PPC services for UK businesses: account reviews, campaign setup, ad copy and conversion recommendations. Transparent PPC packages from £55.",
    eyebrow: "Google Ads / PPC services UK",
    h1: "Google Ads campaigns built around results, not clicks",
    intro:
      "Paid search can bring in enquiries quickly, but poorly structured campaigns waste budget fast. We help you set up, review and improve Google Ads so every pound has a clear job to do.",
    overview: {
      heading: "How we approach PPC",
      body: [
        "Effective Google Ads campaigns are built on tight keyword groups, relevant ad copy, sensible bidding and landing pages that convert. We look at the whole journey, from search term to enquiry.",
        "Our packages are one-off and fixed-price. Your advertising budget is paid directly to Google and stays under your control.",
      ],
    },
    whoFor: [
      "Businesses launching Google Ads for the first time",
      "Advertisers unsure whether their current account is set up well",
      "Companies that need enquiries quickly while SEO builds",
      "Businesses with traffic from ads that isn't converting",
    ],
    included: [
      { title: "Account review", body: "Structure, targeting, keywords, negatives and settings, with an improvement checklist." },
      { title: "Campaign setup", body: "Campaigns and ad groups organised around clear intent and themes." },
      { title: "Keyword targeting", body: "Relevant keywords and match types, plus negative keywords to reduce waste." },
      { title: "Ad copy", body: "Clear, benefit-led ads that match what people are searching for." },
      { title: "Landing-page recommendations", body: "Changes that make it easier for visitors to enquire or buy." },
      { title: "Conversion focus", body: "Recommendations on tracking what matters, so decisions are based on data." },
    ],
    objectives: [
      "More relevant clicks from people ready to buy",
      "Less wasted spend on irrelevant searches",
      "Clearer measurement of what your ads deliver",
      "Higher conversion rates from paid traffic",
    ],
    steps: [
      { title: "Discovery", body: "We learn about your offer, margins, locations and goals." },
      { title: "Review or research", body: "We audit your existing account or research a new one." },
      { title: "Build & recommend", body: "We set out the structure, keywords, ads and landing-page improvements." },
      { title: "Optimisation guidance", body: "We explain what to monitor and how to refine over time." },
    ],
    packageCategories: ["ppc"],
    faqs: [
      {
        q: "Is the Google Ads budget included in the package price?",
        a: "No. Package prices cover our work only. Your advertising spend is paid directly to Google from your own account.",
      },
      {
        q: "Do I need an existing Google Ads account?",
        a: "Not for the setup package. For the account review, you'll need to give us access to your existing account.",
      },
      {
        q: "How quickly will I see results?",
        a: "Ads can start generating traffic soon after they go live, but it usually takes time and data to refine performance. We won't promise specific returns because results depend on your market, offer and budget.",
      },
    ],
  },
  {
    slug: "website-conversion-marketing",
    navLabel: "Website & Conversion",
    formService: "Website Conversion Optimisation",
    icon: "cursor",
    metaTitle: "Website Conversion Optimisation UK | Landing Page & CRO Reviews",
    metaDescription:
      "Website and conversion marketing for UK businesses: landing-page reviews, CTA and form recommendations, and conversion checklists to turn more visitors into enquiries.",
    eyebrow: "Website & conversion marketing",
    h1: "Turn more website visitors into enquiries",
    intro:
      "Traffic only matters if it turns into customers. We review how your website guides visitors towards taking action, and give you practical changes to make that path clearer.",
    overview: {
      heading: "Why conversion matters",
      body: [
        "Many websites lose potential customers because of unclear messaging, hidden contact details, confusing forms or a lack of trust signals. Small improvements can make a meaningful difference to how many visitors get in touch.",
        "We look at your site from your customer's point of view, focusing on your key pages: home, service pages, landing pages and contact.",
      ],
    },
    whoFor: [
      "Websites that get visitors but too few enquiries",
      "Businesses running ads to pages that weren't built to convert",
      "Owners planning a website redesign who want a clear brief",
      "E-commerce and service businesses alike",
    ],
    included: [
      { title: "Landing-page review", body: "Messaging, layout and flow on the pages that matter most." },
      { title: "CTA recommendations", body: "Where calls to action should appear and what they should say." },
      { title: "Form review", body: "Fewer, clearer fields and less friction when people enquire." },
      { title: "Trust & credibility", body: "How to show genuine proof and reassurance at the right moment." },
      { title: "Mobile experience", body: "Checks on how the site works for visitors on their phones." },
      { title: "Conversion checklist", body: "A prioritised list of changes to implement." },
    ],
    objectives: [
      "A higher proportion of visitors taking action",
      "Better returns from SEO, ads and social traffic",
      "Clearer messaging that explains your value quickly",
      "A smoother experience on mobile and desktop",
    ],
    steps: [
      { title: "Discovery", body: "We learn what a successful visit looks like for your business." },
      { title: "Review", body: "We walk through key pages as a customer would." },
      { title: "Recommendations", body: "We list improvements, ordered by expected impact and effort." },
      { title: "Support", body: "We answer questions so you or your developer can implement them." },
    ],
    packageCategories: ["ppc", "strategy"],
    faqs: [
      {
        q: "Do you redesign or build websites?",
        a: "Our listed packages focus on reviews and recommendations. If you need design or development work, tell us what you need and we'll let you know whether we can help.",
      },
      {
        q: "Which package includes conversion recommendations?",
        a: "The PPC + Conversion Package and the Complete Digital Marketing Audit both include website conversion recommendations. For a standalone conversion review, request a custom quote.",
      },
    ],
  },
  {
    slug: "content-marketing",
    navLabel: "Content Marketing",
    formService: "Content Marketing",
    icon: "pen",
    metaTitle: "Content Marketing UK | SEO Content Briefs, Plans & Strategy",
    metaDescription:
      "Content marketing services for UK businesses: SEO content briefs, content plans and strategy that attract the right audience. Clear one-off packages from £65.",
    eyebrow: "Content marketing UK",
    h1: "Content marketing that earns attention and trust",
    intro:
      "Useful content answers your customers' questions, supports your SEO and builds trust long before someone gets in touch. We help you plan what to create and how to structure it.",
    overview: {
      heading: "Content with a strategy behind it",
      body: [
        "We base content recommendations on what your audience is actually searching for and what they need to know at each stage of their decision. That keeps your content focused and useful.",
        "Our detailed briefs mean you, your team or a freelance writer can produce search-ready content with confidence.",
      ],
    },
    whoFor: [
      "Businesses with expertise they're not yet sharing online",
      "Teams that write content but aren't sure it's helping SEO",
      "Companies working with freelance writers who need clear briefs",
      "Service businesses wanting to answer common customer questions",
    ],
    included: [
      { title: "Content strategy", body: "Topics, formats and priorities aligned to your goals." },
      { title: "Keyword targeting", body: "The primary and supporting keywords each piece should target." },
      { title: "Search-intent analysis", body: "What searchers actually want, so content meets their needs." },
      { title: "Content structure", body: "Outlines and heading recommendations for each piece." },
      { title: "Content plan", body: "A schedule that builds topical depth over time." },
      { title: "Competitor comparison", body: "How your content compares and where to differentiate." },
    ],
    objectives: [
      "Content that ranks for relevant, valuable searches",
      "A clear, consistent publishing plan",
      "Stronger trust and authority with potential customers",
      "Better support for your service and landing pages",
    ],
    steps: [
      { title: "Discovery", body: "We understand your audience, offer and expertise." },
      { title: "Research", body: "We research topics, keywords and competing content." },
      { title: "Plan & brief", body: "We create your content plan and detailed briefs." },
      { title: "Review", body: "We suggest how to measure and refine content performance." },
    ],
    packageCategories: ["content", "social"],
    faqs: [
      {
        q: "Do you write the content?",
        a: "Our listed packages include planning and briefing. If you'd like us to write content, get in touch with your requirements for a custom quote.",
      },
      {
        q: "How many content briefs are included?",
        a: "The scope of each brief package is confirmed with you before work starts, so you know exactly what you'll receive.",
      },
    ],
  },
  {
    slug: "local-seo",
    navLabel: "Local SEO",
    formService: "Local SEO",
    icon: "pin",
    metaTitle: "Local SEO Services UK | Google Business Profile & Local Search",
    metaDescription:
      "Local SEO services for UK businesses: Google Business Profile audits and optimisation, citations, local keywords and review strategy. Packages from £20.",
    eyebrow: "Local SEO services UK",
    h1: "Local SEO that helps nearby customers find you",
    intro:
      "When people search for a service near them, the businesses at the top of the map get the calls. We help you strengthen the signals that influence local search visibility.",
    overview: {
      heading: "How local search works",
      body: [
        "Local results are influenced by relevance, distance and prominence. You can't change where customers are searching from, but you can make your business more relevant and more prominent.",
        "That means a complete and accurate Google Business Profile, consistent business information across the web, location-relevant website content and a steady flow of genuine reviews.",
      ],
    },
    whoFor: [
      "Trades and home services covering specific towns or areas",
      "Shops, cafés, restaurants and salons",
      "Clinics, practices and professional services",
      "Multi-location businesses wanting consistent local visibility",
    ],
    included: [
      { title: "Google Business Profile audit", body: "Categories, services, description, photos, posts and Q&A reviewed." },
      { title: "Local keyword strategy", body: "The location-based searches that matter to your business." },
      { title: "Citation strategy", body: "Where your business should be listed, with consistent details." },
      { title: "Local landing pages", body: "Recommendations for pages that target the areas you serve." },
      { title: "Review strategy", body: "Ethical ways to encourage and respond to genuine reviews." },
      { title: "Improvement checklist", body: "A clear list of actions in priority order." },
    ],
    objectives: [
      "Stronger visibility in Google Maps and local results",
      "More calls, direction requests and local enquiries",
      "Accurate, consistent business information online",
      "A trustworthy profile that stands out from nearby competitors",
    ],
    steps: [
      { title: "Discovery", body: "We confirm your locations, service areas and priorities." },
      { title: "Audit", body: "We review your profile, citations, website and local competitors." },
      { title: "Recommendations", body: "We provide a prioritised local SEO action plan." },
      { title: "Guidance", body: "We explain how to maintain and build on your local presence." },
    ],
    packageCategories: ["local"],
    faqs: [
      {
        q: "Do I need a physical address for local SEO?",
        a: "Not necessarily. Service-area businesses can have a Google Business Profile without showing their address publicly. We'll recommend the right set-up for your situation.",
      },
      {
        q: "Can you get us more reviews?",
        a: "We can recommend an ethical review strategy to encourage genuine customer reviews. We never create fake reviews or recommend incentivising reviews in ways that break platform rules.",
      },
    ],
  },
];

export const getServicePage = (slug: string) => servicePages.find((p) => p.slug === slug);
