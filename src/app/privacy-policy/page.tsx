import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal data, and your rights under UK data protection law.`,
  path: "/privacy-policy",
});

// Template wording: have it reviewed against your actual data practices before launch.
export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy"
      updated="22 October 2026"
      intro="This policy explains what personal data we collect when you use our website or contact us, how we use it, and the rights you have."
    >
      <h2>Who we are</h2>
      <p>
        This website is operated by {site.name} (Companies House company number{" "}
        <a href={site.companiesHouseUrl} target="_blank" rel="noopener noreferrer">
          {site.companyNumber}
        </a>
        ). For the purposes of UK data protection law, including the UK General Data Protection Regulation (UK GDPR)
        and the Data Protection Act 2018, we are the controller of the personal data described in this policy.
      </p>
      <p>
        If you have any questions about this policy or how we handle your data, contact us at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or call <a href={site.phoneHref}>{site.phoneDisplay}</a>.
      </p>

      <h2>The information we collect</h2>
      <h3>Information you give us</h3>
      <p>When you submit our enquiry form, email or call us, we may collect:</p>
      <ul>
        <li>Your name and business name</li>
        <li>Your email address and phone number</li>
        <li>Your website address</li>
        <li>The service you&apos;re interested in, your budget and the content of your message</li>
        <li>Any other information you choose to share with us when we work together</li>
      </ul>
      <h3>Information collected automatically</h3>
      <p>
        Like most websites, our hosting provider may record basic technical information when you visit, such as your IP
        address, browser type and the pages requested, for security and to keep the website running reliably. We do not
        currently use analytics or advertising cookies. See our <Link href="/cookie-policy">Cookie Policy</Link> for
        details.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and provide quotes or recommendations</li>
        <li>To deliver the services you purchase and communicate with you about them</li>
        <li>To manage our business records, including invoicing and accounts</li>
        <li>To keep our website secure and prevent misuse</li>
        <li>To comply with our legal obligations</li>
      </ul>
      <p>We do not sell your personal data, and we will not send you marketing emails without your consent.</p>

      <h2>Our lawful bases</h2>
      <ul>
        <li>
          <strong>Legitimate interests:</strong> responding to enquiries you send us and running our business.
        </li>
        <li>
          <strong>Contract:</strong> where processing is needed to provide services you&apos;ve requested or to take steps
          before entering into a contract with you.
        </li>
        <li>
          <strong>Legal obligation:</strong> where we must keep records, for example for tax purposes.
        </li>
        <li>
          <strong>Consent:</strong> where we ask for it, for example for optional marketing. You can withdraw consent at
          any time.
        </li>
      </ul>

      <h2>Who we share your information with</h2>
      <p>
        We only share personal data with trusted service providers who help us operate our business, such as website
        hosting, email delivery and accounting providers. They may only use your data to provide services to us. We may
        also disclose information where required by law.
      </p>
      <p>
        Some providers may process data outside the UK. Where this happens, we make sure appropriate safeguards are in
        place, as required by UK data protection law.
      </p>

      <h2>How long we keep your information</h2>
      <p>
        We keep enquiry information for as long as needed to respond and follow up, and generally no longer than 24
        months if you don&apos;t become a client. Client records are kept for as long as needed to provide our services
        and to meet legal and accounting requirements, typically up to six years after our work ends.
      </p>

      <h2>Keeping your information secure</h2>
      <p>
        We use appropriate technical and organisational measures to protect your personal data, including encrypted
        connections (HTTPS) on this website. No method of transmission over the internet is completely secure, but we
        take reasonable steps to protect your information.
      </p>

      <h2>Your rights</h2>
      <p>Under UK data protection law you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Ask us to correct inaccurate or incomplete data</li>
        <li>Ask us to delete your data</li>
        <li>Object to or ask us to restrict how we use your data</li>
        <li>Ask for your data to be transferred to another organisation</li>
        <li>Withdraw consent at any time, where we rely on consent</li>
      </ul>
      <p>
        To exercise any of these rights, email <a href={`mailto:${site.email}`}>{site.email}</a>. We&apos;ll respond within
        one month.
      </p>

      <h2>Complaints</h2>
      <p>
        If you&apos;re unhappy with how we&apos;ve handled your data, please contact us first so we can try to put it
        right. You also have the right to complain to the Information Commissioner&apos;s Office (ICO) at{" "}
        <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>
        .
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The latest version will always be on this page, with the date it
        was last updated.
      </p>
    </LegalPage>
  );
}
