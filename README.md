# Pixelcrest: UK Digital Marketing Agency Website

A production-ready marketing website built with **Next.js 15 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS 4**.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

| Script              | Purpose                    |
| ------------------- | -------------------------- |
| `npm run dev`       | Local development server   |
| `npm run build`     | Production build           |
| `npm start`         | Serve the production build |
| `npm run lint`      | ESLint                     |
| `npm run typecheck` | TypeScript checks          |

## Before launch

1. **Set `NEXT_PUBLIC_SITE_URL`** to the live domain. Canonical URLs, the sitemap, `robots.txt` and Open Graph tags depend on it.
2. **Configure enquiry delivery.** The contact form posts to `/api/enquiry`, which sends email via [Resend](https://resend.com) when `RESEND_API_KEY` and `ENQUIRY_FROM_EMAIL` are set (`ENQUIRY_TO_EMAIL` defaults to the business email). Without them, enquiries are logged in development. In production the API returns an error, and the form shows the phone/email fallback rather than pretending it worked.
3. **Testimonials.** Add genuine testimonials, with permission, to `src/data/testimonials.ts`. Until you do, labelled placeholders appear only in development, and the section is hidden in production.
4. **Case studies.** Add approved case studies to `src/data/case-studies.ts`. The portfolio page shows them automatically.
5. **Legal pages.** The Privacy Policy, Terms and Cookie Policy are sensible templates. Have them reviewed against your actual practices. If you add analytics or other non-essential cookies, update the cookie policy and add a consent banner first.

## Structure

```
src/
  app/                 Routes (one folder per page), sitemap, robots, OG image, API route
  components/          Header, Footer, Hero, ServiceCard, PricingCard, PricingExplorer, CTASection,
                       FAQ, ContactForm, Testimonial, ProcessStep, SectionHeading, Button, ...
  data/                Packages (£10–£150), services, service landing pages, FAQs, testimonials
  lib/                 Site config (name, email, phone), SEO helpers, enquiry validation
```

Edit business details in `src/lib/site.ts` and package details in `src/data/packages.ts`. Every page reads from these files.

## Pages

Home · Services · Pricing · About · Case Studies · SEO · Social Media Marketing · Google Ads / PPC · Website & Conversion · Content Marketing · Local SEO · Contact · FAQ · Privacy Policy · Terms & Conditions · Cookie Policy
