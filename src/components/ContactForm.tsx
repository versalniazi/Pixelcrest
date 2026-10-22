"use client";

import { useSearchParams } from "next/navigation";
import { useId, useRef, useState, type FormEvent } from "react";
import { formatPrice, getPackage } from "@/data/packages";
import { budgetOptions, serviceOptions } from "@/data/services";
import { enquiryLimits, validateEnquiry, type EnquiryErrors, type EnquiryInput } from "@/lib/enquiry";
import { site } from "@/lib/site";
import { SubmitButton } from "./Button";
import { Icon } from "./Icon";

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-navy-950 placeholder:text-navy-400 transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100 focus:outline-none";

function budgetFor(price: number) {
  if (price < 50) return budgetOptions[0];
  if (price <= 100) return budgetOptions[1];
  return budgetOptions[2];
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const params = useSearchParams();
  const pkg = getPackage(params.get("package") ?? "");
  const serviceParam = params.get("service");
  const presetService = pkg
    ? "A specific package"
    : serviceParam && serviceOptions.includes(serviceParam)
      ? serviceParam
      : serviceParam
        ? "Custom requirement"
        : "";

  const [values, setValues] = useState<EnquiryInput>({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    website: "",
    service: presetService,
    budget: pkg ? budgetFor(pkg.price) : "",
    message: pkg
      ? `I'm interested in Package ${String(pkg.number).padStart(2, "0")}: ${pkg.name} (${formatPrice(pkg.price)}).\n\n`
      : serviceParam && !serviceOptions.includes(serviceParam)
        ? `I'm interested in ${serviceParam}.\n\n`
        : "",
    consent: false,
    company_url: "",
  });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;

  const set = <K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validateEnquiry(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.status === 422) {
        const data = (await res.json()) as { errors?: EnquiryErrors };
        setErrors(data.errors ?? {});
        setStatus("idle");
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center sm:p-10">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h2 className="mt-5 text-2xl font-bold">Enquiry sent</h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-navy-700">
          Thank you for your enquiry. Our team will review your requirements and get back to you as soon as possible.
        </p>
      </div>
    );
  }

  const fieldError = (name: keyof EnquiryInput) =>
    errors[name] ? (
      <p id={id(`${name}-error`)} className="mt-2 flex items-center gap-1.5 text-sm font-medium text-red-700">
        <span aria-hidden="true">!</span> {errors[name]}
      </p>
    ) : null;

  const a11y = (name: keyof EnquiryInput) => ({
    id: id(name),
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? id(`${name}-error`) : undefined,
    className: `${inputCls} ${errors[name] ? "border-red-400" : "border-navy-200"}`,
  });

  const label = (name: keyof EnquiryInput, text: string, required = false) => (
    <label htmlFor={id(name)} className="text-sm font-semibold text-navy-900">
      {text}
      {required ? (
        <span className="text-red-600" aria-hidden="true">
          {" "}
          *
        </span>
      ) : (
        <span className="font-normal text-navy-500"> (optional)</span>
      )}
    </label>
  );

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby={id("required-note")}>
      {pkg ? (
        <div className="flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-navy-800">
          <Icon name="briefcase" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
          <p>
            You&apos;re enquiring about <strong>{pkg.name}</strong> ({formatPrice(pkg.price)}, one-off). We&apos;ll
            confirm the scope with you before any payment is taken.
          </p>
        </div>
      ) : null}

      <p id={id("required-note")} className="text-sm text-navy-500">
        Fields marked <span className="text-red-600">*</span> are required.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          {label("fullName", "Full name", true)}
          <input
            {...a11y("fullName")}
            type="text"
            autoComplete="name"
            required
            maxLength={enquiryLimits.fullName}
            value={values.fullName}
            onChange={(e) => set("fullName", e.target.value)}
          />
          {fieldError("fullName")}
        </div>
        <div>
          {label("businessName", "Business name")}
          <input
            {...a11y("businessName")}
            type="text"
            autoComplete="organization"
            maxLength={enquiryLimits.businessName}
            value={values.businessName}
            onChange={(e) => set("businessName", e.target.value)}
          />
          {fieldError("businessName")}
        </div>
        <div>
          {label("email", "Email", true)}
          <input
            {...a11y("email")}
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
          />
          {fieldError("email")}
        </div>
        <div>
          {label("phone", "Phone")}
          <input
            {...a11y("phone")}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
          {fieldError("phone")}
        </div>
        {!compact ? (
          <div className="sm:col-span-2">
            {label("website", "Website")}
            <input
              {...a11y("website")}
              type="text"
              autoComplete="url"
              inputMode="url"
              placeholder="example.co.uk"
              maxLength={enquiryLimits.website}
              value={values.website}
              onChange={(e) => set("website", e.target.value)}
            />
            {fieldError("website")}
          </div>
        ) : null}
        <div>
          {label("service", "Service required", true)}
          <select
            {...a11y("service")}
            required
            value={values.service}
            onChange={(e) => set("service", e.target.value)}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          {fieldError("service")}
        </div>
        <div>
          {label("budget", "Budget")}
          <select {...a11y("budget")} value={values.budget} onChange={(e) => set("budget", e.target.value)}>
            <option value="">Select a budget</option>
            {budgetOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          {fieldError("budget")}
        </div>
        <div className="sm:col-span-2">
          {label("message", "Message", true)}
          <textarea
            {...a11y("message")}
            required
            rows={compact ? 4 : 6}
            maxLength={enquiryLimits.message}
            placeholder="Tell us about your business, your goals and what you'd like help with."
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
          />
          {fieldError("message")}
        </div>
      </div>

      {/* Honeypot field for spam bots; hidden from people and assistive technology. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id("company_url")}>Leave this field empty</label>
        <input
          id={id("company_url")}
          name="company_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company_url}
          onChange={(e) => set("company_url", e.target.value)}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-navy-700">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? id("consent-error") : undefined}
            className="mt-1 h-4 w-4 shrink-0 rounded border-navy-300 accent-brand-600"
          />
          <span>
            I&apos;m happy for {site.name} to use these details to respond to my enquiry, as described in the{" "}
            <a href="/privacy-policy" className="font-medium text-brand-600 underline underline-offset-2">
              Privacy Policy
            </a>
            . <span className="text-red-600" aria-hidden="true">*</span>
          </span>
        </label>
        {fieldError("consent")}
      </div>

      {status === "error" ? (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          Sorry, we couldn&apos;t send your enquiry just now. Please try again, or contact us directly at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>{" "}
          or{" "}
          <a href={site.phoneHref} className="font-semibold underline">
            {site.phoneDisplay}
          </a>
          .
        </div>
      ) : null}

      <SubmitButton type="submit" size="lg" arrow className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </SubmitButton>
    </form>
  );
}
