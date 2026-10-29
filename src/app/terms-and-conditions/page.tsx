import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { registeredOfficeText, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description: `The terms that apply when you use the ${site.name} website and purchase our digital marketing packages and services.`,
  path: "/terms-and-conditions",
});

// Template wording: have it reviewed by a qualified professional before launch.
export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      path="/terms-and-conditions"
      updated="29 October 2026"
      intro="These terms explain how our website may be used and the basis on which we provide our digital marketing packages and services."
    >
      <h2>1. About us</h2>
      <p>
        This website is operated by {site.legalName}, a {site.companyType} registered in {site.registeredIn}{" "}
        (company number{" "}
        <a href={site.companiesHouseUrl} target="_blank" rel="noopener noreferrer">
          {site.companyNumber}
        </a>
        ), whose registered office is at {registeredOfficeText}. You can contact us at <a href={`mailto:${site.email}`}>{site.email}</a> or on{" "}
        <a href={site.phoneHref}>{site.phoneDisplay}</a>.
      </p>

      <h2>2. Using our website</h2>
      <p>
        You may use this website for lawful purposes only. We try to keep the information on it accurate and up to date,
        but it is provided for general information and does not constitute professional advice for your specific
        situation. We may change or update the website at any time.
      </p>

      <h2>3. Our packages and services</h2>
      <p>
        Our listed packages are one-off engagements with the scope described on our{" "}
        <Link href="/pricing">pricing page</Link>. Before any work begins, we will confirm the scope, deliverables,
        price and expected timescale with you in writing (email is fine). Custom services are provided on the scope we
        agree with you.
      </p>
      <p>
        Unless agreed otherwise, our packages provide research, audits, strategies and recommendations. Implementation of
        recommendations is not included unless specifically agreed.
      </p>

      <h2>4. Prices and payment</h2>
      <ul>
        <li>All prices are shown in pounds sterling (GBP).</li>
        <li>The price for a listed package is the price shown on our pricing page at the time you order.</li>
        <li>
          Package prices do not include third-party costs, such as advertising spend on Google Ads or social platforms,
          which you pay directly to those providers.
        </li>
        <li>We will tell you how and when to pay when we confirm your order.</li>
      </ul>

      <h2>5. Your responsibilities</h2>
      <p>
        To deliver our services, we may need information, materials or access to accounts (such as your website, Google
        Business Profile, Google Ads or social media accounts). You agree to provide accurate information and appropriate
        access in good time, and confirm you have the right to share it with us. Delays in providing these may affect
        delivery timescales.
      </p>

      <h2>6. Results</h2>
      <p>
        Digital marketing results depend on many factors outside our control, including search engine and platform
        algorithms, competition, market conditions, budget and how recommendations are implemented. We will carry out our
        services with reasonable skill and care, but we do not guarantee specific rankings, traffic, followers, leads or
        sales.
      </p>

      <h2>7. Cancellations and refunds</h2>
      <p>
        If you&apos;re a consumer buying online, you may have a legal right to cancel within 14 days under the Consumer
        Contracts Regulations. If you ask us to start work within that period, you agree that you may have to pay for
        work already carried out, and that the right to cancel is lost once the service has been fully delivered.
      </p>
      <p>
        If you&apos;re not satisfied with our work, please tell us promptly and we will work with you to put things right.
        Nothing in these terms affects your statutory rights.
      </p>

      <h2>8. Intellectual property</h2>
      <p>
        Once you have paid in full, you may use the deliverables we create for you for your own business purposes. The
        content and design of this website belong to us or our licensors and may not be copied without permission.
      </p>

      <h2>9. Confidentiality</h2>
      <p>
        We treat information you share with us about your business as confidential and use it only to deliver our
        services, except where disclosure is required by law.
      </p>

      <h2>10. Liability</h2>
      <p>
        Nothing in these terms limits or excludes liability that cannot legally be limited or excluded. Subject to that,
        our total liability to you in connection with any package or service is limited to the price you paid for it, and
        we are not liable for indirect or consequential losses, or for loss of profit, revenue or business opportunity.
      </p>

      <h2>11. Third-party links and platforms</h2>
      <p>
        Our website may link to third-party websites, and our services may involve third-party platforms. We are not
        responsible for their content, availability or policies.
      </p>

      <h2>12. Privacy</h2>
      <p>
        We handle personal data in line with our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>13. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The version in force when you place an order applies to that order.
      </p>

      <h2>14. Governing law</h2>
      <p>
        These terms are governed by the laws of England and Wales, and the courts of England and Wales will have
        jurisdiction over any disputes. If you are a consumer living in Scotland or Northern Ireland, you may also bring
        proceedings in your local courts.
      </p>
    </LegalPage>
  );
}
