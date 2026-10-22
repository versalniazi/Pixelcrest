export type EnquiryInput = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  service: string;
  budget: string;
  message: string;
  consent: boolean;
  /** Honeypot: must stay empty. */
  company_url?: string;
};

export type EnquiryErrors = Partial<Record<keyof EnquiryInput, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s-]{7,20}$/;

export const enquiryLimits = { fullName: 100, businessName: 120, website: 200, message: 3000 };

/** Shared by the browser form and the API route so both enforce the same rules. */
export function validateEnquiry(input: Partial<EnquiryInput>): EnquiryErrors {
  const errors: EnquiryErrors = {};
  const fullName = input.fullName?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const phone = input.phone?.trim() ?? "";
  const website = input.website?.trim() ?? "";
  const message = input.message?.trim() ?? "";

  if (fullName.length < 2) errors.fullName = "Please enter your full name.";
  else if (fullName.length > enquiryLimits.fullName) errors.fullName = "Name is too long.";

  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address, like name@example.co.uk.";

  if (phone && !PHONE_RE.test(phone)) errors.phone = "Please enter a valid phone number.";

  if ((input.businessName?.trim().length ?? 0) > enquiryLimits.businessName)
    errors.businessName = "Business name is too long.";

  if (website) {
    const candidate = /^https?:\/\//i.test(website) ? website : `https://${website}`;
    try {
      const url = new URL(candidate);
      if (!url.hostname.includes(".")) throw new Error();
    } catch {
      errors.website = "Please enter a valid website address, like example.co.uk.";
    }
    if (website.length > enquiryLimits.website) errors.website = "Website address is too long.";
  }

  if (!input.service?.trim()) errors.service = "Please choose the service you're interested in.";

  if (message.length < 10) errors.message = "Please tell us a little about what you need (at least 10 characters).";
  else if (message.length > enquiryLimits.message)
    errors.message = `Please keep your message under ${enquiryLimits.message} characters.`;

  if (!input.consent) errors.consent = "Please confirm you're happy for us to use your details to respond.";

  return errors;
}
