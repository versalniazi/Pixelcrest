import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileCTABar } from "@/components/MobileCTABar";
import { organizationSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Digital Marketing Agency UK | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: { siteName: site.name, locale: site.locale, type: "website" },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <JsonLd
          data={[
            organizationSchema,
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: site.name,
              url: site.url,
              inLanguage: "en-GB",
              publisher: { "@id": organizationSchema["@id"] },
            },
          ]}
        />
        <Header />
        <main id="main" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
