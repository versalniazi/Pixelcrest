import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description: `How the ${site.name} website uses cookies and similar technologies, and how you can control them.`,
  path: "/cookie-policy",
});

// If analytics, advertising or other non-essential cookies are added later, update this page and add a consent banner first.
export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      path="/cookie-policy"
      updated="22 October 2026"
      intro="This policy explains what cookies are, how our website uses them and how you can manage them."
    >
      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They are widely used to make
        websites work, to remember preferences and to provide information to website owners. Similar technologies, such
        as local storage, work in a comparable way.
      </p>

      <h2>How we use cookies</h2>
      <p>
        Our website is designed to work without non-essential cookies. We do <strong>not</strong> currently use
        analytics, advertising, social media tracking or other non-essential cookies, so we don&apos;t show a cookie
        consent banner.
      </p>
      <p>
        Our hosting provider may use strictly necessary technologies to deliver the website securely and reliably, for
        example to protect against malicious traffic. These do not track you across other websites and don&apos;t require
        consent under the Privacy and Electronic Communications Regulations (PECR).
      </p>

      <h2>Third-party links</h2>
      <p>
        Our website links to some external websites, such as Companies House. Those websites may set their own cookies,
        which are governed by their own policies.
      </p>

      <h2>If this changes</h2>
      <p>
        If we introduce analytics or other non-essential cookies in future, we will update this policy and ask for your
        consent before setting them.
      </p>

      <h2>Managing cookies</h2>
      <p>
        You can control and delete cookies through your browser settings. Most browsers let you block all cookies, block
        third-party cookies or delete cookies when you close the browser. Blocking strictly necessary cookies may affect
        how some websites work. The{" "}
        <a href="https://ico.org.uk/for-the-public/online/cookies/" target="_blank" rel="noopener noreferrer">
          ICO&apos;s guidance on cookies
        </a>{" "}
        explains more.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy? Email <a href={`mailto:${site.email}`}>{site.email}</a>. See also our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
