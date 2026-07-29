"use client";

import { useState } from "react";
import { CONTACT, WEB3FORMS_ACCESS_KEY, type Locale } from "@/lib/data";
import { t } from "@/lib/i18n";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ locale }: { locale: Locale }) {
  const tr = t(locale);
  const k = tr.kontakt;
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const inputClass =
    "w-full border border-[#E2E8F0] rounded-md px-3 py-2.5 text-sm text-[#1A2332] placeholder-[#CBD5E0] focus:outline-none focus:ring-2 focus:ring-[#1E6FD9]/20 focus:border-[#1E6FD9] transition-colors";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();
    const privacy = data.get("privacy") === "on";

    if (!name || !email || !message || !privacy) {
      setStatus("error");
      setErrorMsg(k.formRequired);
      return;
    }

    const company = (data.get("company") as string)?.trim() ?? "";
    const phone = (data.get("phone") as string)?.trim() ?? "";
    const service = (data.get("service") as string) ?? "";

    // No Web3Forms key configured yet → fall back to the visitor's email client.
    if (!WEB3FORMS_ACCESS_KEY) {
      const subject =
        locale === "de"
          ? `Anfrage über vfsolutions.de — ${name}`
          : `Enquiry via vfsolutions.de — ${name}`;
      const bodyLines = [
        `${k.formName}: ${name}`,
        `${k.formCompany}: ${company}`,
        `${k.formEmail}: ${email}`,
        `${k.formPhone}: ${phone}`,
        `${k.formService}: ${service}`,
        "",
        message,
      ];
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject:
            locale === "de"
              ? `Neue Anfrage über vfsolutions.de — ${name}`
              : `New enquiry via vfsolutions.de — ${name}`,
          from_name: name,
          name,
          company,
          email,
          phone,
          service,
          message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(k.formError);
      }
    } catch {
      setStatus("error");
      setErrorMsg(k.formError);
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-[#E2E8F0] rounded-xl p-8">
        <h2 className="text-xl font-bold text-[#0A1628] mb-2">{k.formTitle}</h2>
        <div className="mt-4 flex items-start gap-3 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] p-4">
          <svg className="mt-0.5 shrink-0 text-[#059669]" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm3.5 5.5l-4 4-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-sm text-[#065F46] leading-relaxed">{k.formSuccess}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-8">
      <h2 className="text-xl font-bold text-[#0A1628] mb-2">{k.formTitle}</h2>
      <p className="text-sm text-[#64748B] mb-6">{k.formLead}</p>

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-[#4A5568] mb-1.5 uppercase tracking-wide">
              {k.formName} *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder={locale === "de" ? "Max Mustermann" : "Jane Doe"}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#4A5568] mb-1.5 uppercase tracking-wide">
              {k.formCompany}
            </label>
            <input
              type="text"
              name="company"
              placeholder={locale === "de" ? "Muster GmbH" : "Acme Ltd."}
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-[#4A5568] mb-1.5 uppercase tracking-wide">
            {k.formEmail} *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder={locale === "de" ? "m.mustermann@firma.de" : "j.doe@company.com"}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#4A5568] mb-1.5 uppercase tracking-wide">
            {k.formPhone}
          </label>
          <input type="tel" name="phone" placeholder="+49 123 456 789" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#4A5568] mb-1.5 uppercase tracking-wide">
            {k.formService}
          </label>
          <select name="service" defaultValue="" className={`${inputClass} bg-white`}>
            <option value="">{k.formServicePlaceholder}</option>
            {k.formServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-[#4A5568] mb-1.5 uppercase tracking-wide">
            {k.formMessage} *
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder={k.formPlaceholderMessage}
            className={`${inputClass} resize-none`}
          />
        </div>
        <div className="flex items-start gap-2">
          <input type="checkbox" name="privacy" id="dsgvo" className="mt-1 accent-[#1E6FD9]" />
          <label htmlFor="dsgvo" className="text-xs text-[#64748B] leading-relaxed">
            {k.formPrivacyPre}
            <a href={`/${locale}/datenschutz`} className="text-[#1E6FD9] hover:underline">
              {k.formPrivacyLink}
            </a>
            {k.formPrivacyPost}
          </label>
        </div>

        {status === "error" && (
          <p className="text-sm text-[#B91C1C] leading-relaxed">
            {errorMsg}{" "}
            {errorMsg === k.formError && (
              <a href={`mailto:${CONTACT.email}`} className="underline">
                {CONTACT.email}
              </a>
            )}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-[#0A1628] text-white py-3 rounded-md font-semibold text-sm hover:bg-[#122040] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? k.formSending : k.formSubmit}
        </button>
        <p className="text-xs text-[#94A3B8] text-center">
          {k.formHint}{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-[#1E6FD9] hover:underline">
            {CONTACT.email}
          </a>
        </p>
      </form>
    </div>
  );
}
