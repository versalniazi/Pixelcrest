import type { PackageCategory } from "./packages";

export type IconName =
  | "search"
  | "pin"
  | "store"
  | "target"
  | "share"
  | "calendar"
  | "pen"
  | "key"
  | "binoculars"
  | "cursor"
  | "compass";

export type Service = {
  id: string;
  name: string;
  icon: IconName;
  short: string;
  whatItIs: string;
  whoFor: string;
  included: string[];
  objective: string;
  /** Dedicated landing page, if one exists; otherwise the service is described on /services. */
  href: string;
  packageCategories: PackageCategory[];
};

export const services: Service[] = [
  {
    id: "seo",
    name: "Search Engine Optimisation",
    icon: "search",
    short: "Improve how your website is found, understood and chosen in Google search.",
    whatItIs:
      "SEO is the ongoing work of making your website easier for search engines to crawl, understand and rank for the searches your customers make.",
    whoFor:
      "Businesses that want a sustainable source of enquiries from people already searching for what they offer.",
    included: [
      "Keyword research and search-intent mapping",
      "Technical SEO checks",
      "On-page optimisation recommendations",
      "Content and internal linking strategy",
    ],
    objective: "Grow qualified organic traffic and reduce reliance on paid channels over time.",
    href: "/services/seo",
    packageCategories: ["seo"],
  },
  {
    id: "local-seo",
    name: "Local SEO",
    icon: "pin",
    short: "Show up when nearby customers search for your services in your area.",
    whatItIs:
      "Local SEO focuses on the signals that influence map results and location-based searches, from your Google Business Profile to local citations and landing pages.",
    whoFor: "Shops, trades, clinics, salons, restaurants and service businesses that serve a defined area.",
    included: [
      "Local keyword strategy",
      "Google Business Profile recommendations",
      "Citation review and strategy",
      "Local landing-page recommendations",
    ],
    objective: "Increase visibility in local and map results so more nearby customers call, visit or enquire.",
    href: "/services/local-seo",
    packageCategories: ["local"],
  },
  {
    id: "google-business-profile",
    name: "Google Business Profile Optimisation",
    icon: "store",
    short: "Make your Google Business Profile complete, accurate and compelling.",
    whatItIs:
      "A structured review and improvement plan for your Google Business Profile: categories, services, descriptions, photos, posts and reviews.",
    whoFor: "Any business with a physical location or service area that customers find through Google Maps.",
    included: [
      "Profile completeness review",
      "Category and services recommendations",
      "Description and post guidance",
      "Review strategy",
    ],
    objective: "Turn profile views into calls, direction requests and website visits.",
    href: "/services/local-seo",
    packageCategories: ["local"],
  },
  {
    id: "ppc",
    name: "Google Ads / PPC",
    icon: "target",
    short: "Reach people at the moment they search, with campaigns built to convert.",
    whatItIs:
      "Pay-per-click advertising places your business at the top of search results for chosen keywords. You pay when someone clicks, so structure and targeting matter.",
    whoFor:
      "Businesses that want predictable, measurable enquiries quickly, or want to test demand before investing in SEO.",
    included: [
      "Account and campaign structure",
      "Keyword and audience targeting",
      "Ad copy and extensions",
      "Landing-page and conversion recommendations",
    ],
    objective: "Generate measurable leads and sales while keeping wasted ad spend under control.",
    href: "/services/google-ads-ppc",
    packageCategories: ["ppc"],
  },
  {
    id: "social-media-marketing",
    name: "Social Media Marketing",
    icon: "share",
    short: "Build a clear, consistent presence on the platforms your audience uses.",
    whatItIs:
      "Strategy and content planning that positions your brand on social media and gives people a reason to follow, engage and get in touch.",
    whoFor: "Businesses that want to build awareness and trust with an audience that spends time on social platforms.",
    included: [
      "Platform and audience strategy",
      "Content pillars and themes",
      "Profile and bio optimisation",
      "Growth recommendations",
    ],
    objective: "Build brand awareness and an engaged audience that turns into enquiries.",
    href: "/services/social-media-marketing",
    packageCategories: ["social"],
  },
  {
    id: "social-media-management",
    name: "Social Media Management",
    icon: "calendar",
    short: "Consistent planning and creative direction for your social channels.",
    whatItIs:
      "Ongoing planning support covering content calendars, post concepts and caption direction, so your channels stay active and on-brand.",
    whoFor: "Busy owners and small teams who know social matters but don't have time to plan it every week.",
    included: ["Monthly content planning", "Post concepts", "Caption direction", "Monthly strategy review"],
    objective: "Maintain a consistent, professional presence without it taking over your week.",
    href: "/services/social-media-marketing",
    packageCategories: ["social"],
  },
  {
    id: "content-marketing",
    name: "Content Marketing",
    icon: "pen",
    short: "Content that answers real questions, ranks in search and builds trust.",
    whatItIs:
      "Planning and briefing content (articles, guides and service pages) around what your audience searches for and needs to know before they buy.",
    whoFor: "Businesses with expertise to share that want to attract and educate customers over the long term.",
    included: ["Content strategy and planning", "SEO content briefs", "Topic and keyword research", "Content structure"],
    objective: "Attract qualified visitors and support SEO with genuinely useful content.",
    href: "/services/content-marketing",
    packageCategories: ["content"],
  },
  {
    id: "keyword-research",
    name: "Keyword Research",
    icon: "key",
    short: "Understand exactly what your customers type into Google.",
    whatItIs:
      "Research into the search terms, questions and phrases relevant to your business, grouped by intent and prioritised by opportunity.",
    whoFor: "Anyone planning a website, new pages, content or a Google Ads campaign.",
    included: ["Keyword discovery", "Search-intent grouping", "Prioritised keyword list", "Page-mapping suggestions"],
    objective: "Focus your website and content on the searches most likely to bring customers.",
    href: "/services/seo",
    packageCategories: ["seo"],
  },
  {
    id: "competitor-analysis",
    name: "Competitor Analysis",
    icon: "binoculars",
    short: "See what competitors are doing online and where you can do better.",
    whatItIs:
      "A structured look at competitors' search visibility, content, social presence and messaging to identify gaps and opportunities.",
    whoFor: "Businesses entering a new market, launching a service, or losing ground to rivals online.",
    included: ["Competitor identification", "SEO observations", "Content comparison", "Opportunity report"],
    objective: "Make informed decisions about where to compete and how to stand out.",
    href: "/services",
    packageCategories: ["strategy"],
  },
  {
    id: "conversion-optimisation",
    name: "Website Conversion Optimisation",
    icon: "cursor",
    short: "Turn more of your existing website visitors into enquiries and sales.",
    whatItIs:
      "A review of how visitors move through your website, and practical recommendations to make it easier for them to take action.",
    whoFor: "Businesses getting traffic that isn't turning into enough calls, forms or purchases.",
    included: [
      "Landing-page review",
      "CTA and form recommendations",
      "Trust and messaging review",
      "Conversion optimisation checklist",
    ],
    objective: "Get more value from the traffic you already have, whether it comes from search, ads or social.",
    href: "/services/website-conversion-marketing",
    packageCategories: ["ppc", "strategy"],
  },
  {
    id: "digital-marketing-strategy",
    name: "Digital Marketing Strategy",
    icon: "compass",
    short: "A clear plan that connects your goals to the right channels.",
    whatItIs:
      "A strategic review of your business, audience and competitors, turned into a prioritised plan across SEO, paid, social and content.",
    whoFor: "Businesses that want direction before investing time or money in marketing activity.",
    included: ["Business and audience analysis", "Channel strategy", "Competitor research", "30 to 90-day roadmap"],
    objective: "Invest your marketing budget with confidence, in the right order.",
    href: "/services",
    packageCategories: ["strategy"],
  },
];

export const coreServiceIds = [
  "seo",
  "local-seo",
  "social-media-marketing",
  "ppc",
  "content-marketing",
  "conversion-optimisation",
];

export const coreServices = coreServiceIds.map((id) => services.find((s) => s.id === id)!);

export const serviceOptions = [
  "SEO",
  "Local SEO",
  "Google Business Profile",
  "Google Ads / PPC",
  "Social Media Marketing",
  "Social Media Management",
  "Content Marketing",
  "Website Conversion Optimisation",
  "Digital Marketing Strategy",
  "A specific package",
  "Custom requirement",
  "Not sure yet",
];

export const budgetOptions = ["Under £50", "£50 – £100", "£100 – £150", "Over £150 (custom)", "Not sure yet"];
