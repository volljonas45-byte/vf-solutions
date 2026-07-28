import { notFound } from "next/navigation";
import { CONTACT, LOCALES, type Locale } from "@/lib/data";
import { t } from "@/lib/i18n";
import ContactForm from "@/components/ContactForm";
import { asset } from "@/lib/basePath";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return {};
  const tr = t(locale as Locale);
  return { title: tr.kontakt.title, description: tr.kontakt.description };
}

export default async function Kontakt({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!LOCALES.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const tr = t(locale);

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1628] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-4 block">
              {tr.kontakt.eyebrow}
            </span>
            <h1 className="text-5xl font-black text-white tracking-tight mb-6">
              {tr.kontakt.heroTitle}
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">{tr.kontakt.heroLead}</p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Kontaktdaten */}
            <div>
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 mb-6">
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#E2E8F0]">
                  <div className="h-12 px-3 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0">
                    <img src={asset("/images/logo-vf.png")} alt="vf solutions" className="h-8 w-auto object-contain" />
                  </div>
                  <div>
                    <h2 className="font-bold text-[#0A1628]">{CONTACT.name}</h2>
                    <p className="text-[#64748B] text-sm">{CONTACT.person}</p>
                    <div className="mt-1 inline-flex items-center gap-1.5 bg-[#ECFDF5] text-[#059669] text-xs font-medium px-2 py-0.5 rounded-full border border-[#A7F3D0]">
                      <span className="w-1.5 h-1.5 bg-[#059669] rounded-full" />
                      {tr.kontakt.availability}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#F8F9FB] flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1.5 2.5a.5.5 0 01.5-.5h2.17a.5.5 0 01.49.4l.65 3.26a.5.5 0 01-.27.53l-1.07.53a7.5 7.5 0 003.76 3.76l.53-1.07a.5.5 0 01.53-.27l3.26.65a.5.5 0 01.4.49V11.5a.5.5 0 01-.5.5H10.5A9 9 0 011.5 3.5v-1z" stroke="#64748B" strokeWidth="1.2" fill="none"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8] uppercase tracking-wide mb-0.5">
                        {tr.kontakt.phoneLabel}
                      </p>
                      <a href={`tel:${CONTACT.telHref}`} className="text-sm text-[#1E6FD9] hover:underline block">
                        {CONTACT.tel}
                      </a>
                      <a
                        href={`tel:${CONTACT.mobilHref}`}
                        className="text-sm text-[#1A2332] hover:text-[#1E6FD9] transition-colors"
                      >
                        {CONTACT.mobil} ({tr.kontakt.phoneMobil})
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#F8F9FB] flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="1.5" y="3" width="11" height="8" rx="1" stroke="#64748B" strokeWidth="1.2" fill="none"/>
                        <path d="M1.5 4l5.5 4L12.5 4" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8] uppercase tracking-wide mb-0.5">
                        {tr.kontakt.emailLabel}
                      </p>
                      <a href={`mailto:${CONTACT.email}`} className="text-sm text-[#1E6FD9] hover:underline">
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E2E8F0] flex gap-3">
                  <a
                    href={`tel:${CONTACT.telHref}`}
                    className="flex-1 text-center bg-[#0A1628] text-white py-2.5 rounded-md text-sm font-semibold hover:bg-[#122040] transition-colors"
                  >
                    {tr.kontakt.callBtn}
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex-1 text-center border border-[#E2E8F0] text-[#0A1628] py-2.5 rounded-md text-sm font-medium hover:bg-[#F8F9FB] transition-colors"
                  >
                    {tr.kontakt.mailBtn}
                  </a>
                </div>
              </div>

            </div>

            {/* Kontaktformular */}
            <ContactForm locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
