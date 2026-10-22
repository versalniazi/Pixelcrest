import { NextResponse } from "next/server";
import { validateEnquiry, type EnquiryInput } from "@/lib/enquiry";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let body: Partial<EnquiryInput>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Silently accept honeypot submissions so bots get no signal.
  if (body.company_url) return NextResponse.json({ ok: true });

  const errors = validateEnquiry(body);
  if (Object.keys(errors).length > 0) return NextResponse.json({ errors }, { status: 422 });

  const fields: [string, string][] = [
    ["Full name", body.fullName!.trim()],
    ["Business name", body.businessName?.trim() || "—"],
    ["Email", body.email!.trim()],
    ["Phone", body.phone?.trim() || "—"],
    ["Website", body.website?.trim() || "—"],
    ["Service required", body.service!.trim()],
    ["Budget", body.budget?.trim() || "—"],
    ["Message", body.message!.trim()],
  ];

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  const to = process.env.ENQUIRY_TO_EMAIL || site.email;

  if (!apiKey || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[enquiry] Email delivery not configured; enquiry received:\n" + fields.map(([k, v]) => `${k}: ${v}`).join("\n"));
      return NextResponse.json({ ok: true });
    }
    // Never report success in production if the enquiry can't be delivered; the form shows direct contact details instead.
    console.error("[enquiry] RESEND_API_KEY / ENQUIRY_FROM_EMAIL not set; enquiry could not be delivered.");
    return NextResponse.json({ error: "Enquiry delivery is not configured" }, { status: 503 });
  }

  const html = `<h2>New website enquiry</h2><table cellpadding="6">${fields
    .map(([k, v]) => `<tr><th align="left" valign="top">${k}</th><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: body.email!.trim(),
      subject: `New enquiry: ${body.service} from ${body.fullName!.trim()}`,
      html,
      text: fields.map(([k, v]) => `${k}: ${v}`).join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("[enquiry] Email provider error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "Could not send enquiry" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
