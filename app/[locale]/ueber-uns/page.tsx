import Link from "next/link";
import { notFound } from "next/navigation";
import { KARRIERE, PARTNER, CONTACT, LOCALES, type Locale } from "@/lib/data";
import { t } from "@/lib/i18n";
import PartnerCard from "@/components/PartnerCard";
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
  return { title: tr.ueberUns.title, description: tr.ueberUns.description };
}

export default async function UeberUns({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!LOCALES.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const tr = t(locale);
  const karriere = KARRIERE[locale];
  const partner = PARTNER[locale];
  const partnerCta = locale === "de" ? "Zur Website" : "Visit website";

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#0A1628] min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={asset("/images/hero-ueber.jpg")}
            alt=""
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 photo-overlay-dark" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full py-24">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="block w-8 h-px bg-[#1E6FD9]" />
              <span className="text-[#1E6FD9] text-xs font-semibold tracking-[0.18em] uppercase">
                {tr.ueberUns.eyebrow}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              {tr.ueberUns.heroTitle}
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">{tr.ueberUns.heroLead}</p>
          </div>
        </div>
      </section>

      {/* PERSON */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="py-16 lg:pr-20 border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
              <span className="rule-blue" />
              <div className="text-xs font-mono text-[#9CA3AF] mb-1">Dipl.-Ing. (FH)</div>
              <h2 className="text-3xl font-bold text-[#0A1628] mb-1">Volker Freundt</h2>
              <p className="text-[#6B7280] text-sm mb-8">{tr.ueberUns.role}</p>

              <div className="space-y-0 mb-8">
                {tr.ueberUns.facts.map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-baseline border-b border-[#F3F4F6] py-3 last:border-0"
                  >
                    <span className="text-sm text-[#9CA3AF]">{row.label}</span>
                    <span className="text-sm font-medium text-[#111827]">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={`tel:${CONTACT.telHref}`}
                  className="bg-[#0A1628] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#122040] transition-colors"
                >
                  {CONTACT.tel}
                </a>
                <Link
                  href={`/${locale}/kontakt`}
                  className="border border-[#E5E7EB] text-[#374151] px-5 py-2.5 text-sm font-medium hover:bg-[#F7F8FA] transition-colors"
                >
                  {tr.common.ctaContact}
                </Link>
              </div>
            </div>

            {/* Foto */}
            <div className="relative min-h-[300px] lg:min-h-[480px] overflow-hidden bg-[#F7F8FA]">
              <img
                src={asset("/images/ueber-arbeitsplatz.jpg")}
                alt={locale === "de"
                  ? "Ingenieur bei der Arbeit an technischen Konstruktionszeichnungen"
                  : "Engineer working on technical engineering drawings"}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className="section bg-[#F7F8FA] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="rule-blue" />
            <h2 className="text-2xl font-bold text-[#0A1628] mb-6">{tr.ueberUns.philoTitle}</h2>
            <div className="space-y-4 text-[#374151] leading-relaxed">
              <p>
                <strong className="text-[#0A1628]">{tr.ueberUns.philoP1Strong}</strong>
                {tr.ueberUns.philoP1Post}
              </p>
              <p>{tr.ueberUns.philoP2}</p>
              <p>
                {tr.ueberUns.philoP3Pre}
                <strong className="text-[#0A1628]">{tr.ueberUns.philoP3Strong}</strong>
                {tr.ueberUns.philoP3Post}
              </p>
              <p>
                {tr.ueberUns.philoP4Pre}
                <strong className="text-[#0A1628]">{tr.ueberUns.philoP4Strong1}</strong>
                {tr.ueberUns.philoP4Mid}
                <strong className="text-[#0A1628]">{tr.ueberUns.philoP4Strong2}</strong>
                {tr.ueberUns.philoP4Post}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KARRIERE */}
      <section className="section bg-[#0A1628] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-3 block">
              {tr.ueberUns.careerEyebrow}
            </span>
            <h2 className="text-3xl font-black text-white mb-3">{tr.ueberUns.careerTitle}</h2>
            <p className="text-[#475569] text-sm max-w-lg">{tr.ueberUns.careerLead}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {karriere.map((item, i) => {
              const isCurrent = i === karriere.length - 1;
              const ghostYear = item.year.replace(/\s/g, "").replace(/[^0-9]/g, "").slice(-4);
              return (
                <div
                  key={i}
                  className={`relative rounded-xl p-6 overflow-hidden transition-all group ${
                    isCurrent
                      ? "bg-[#1A2F4E] border border-[#C8A96E]/40 hover:border-[#C8A96E]/70"
                      : "bg-[#0D1F3C] border border-white/8 hover:border-[#1E6FD9]/30"
                  }`}
                >
                  <div
                    className={`absolute -bottom-3 -right-2 text-8xl font-black select-none pointer-events-none leading-none ${
                      isCurrent ? "text-[#C8A96E]/10" : "text-[#1E6FD9]/8"
                    }`}
                  >
                    {ghostYear}
                  </div>
                  <div
                    className={`absolute left-0 top-4 bottom-4 w-[3px] rounded-r ${
                      isCurrent ? "bg-[#C8A96E]" : "bg-[#1E6FD9]/40 group-hover:bg-[#1E6FD9]/80"
                    } transition-colors`}
                  />

                  <div className="relative pl-2">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-[10px] font-mono font-bold tracking-widest ${
                          isCurrent ? "text-[#C8A96E]" : "text-[#1E6FD9]"
                        }`}
                      >
                        {item.year}
                      </span>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#C8A96E] bg-[#C8A96E]/10 border border-[#C8A96E]/25 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 bg-[#C8A96E] rounded-full animate-pulse" />
                          {tr.ueberUns.today}
                        </span>
                      )}
                    </div>
                    <h3
                      className={`text-sm font-bold leading-tight mb-1 ${
                        isCurrent ? "text-white" : "text-[#94A3B8] group-hover:text-white"
                      } transition-colors`}
                    >
                      {item.title}
                    </h3>
                    {item.desc && (
                      <p className={`text-xs leading-relaxed ${isCurrent ? "text-[#64748B]" : "text-[#475569]"}`}>
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="section bg-[#0D1F3C] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <span className="block w-8 h-px bg-[#1E6FD9] mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">{tr.ueberUns.partnerTitle}</h2>
              <p className="text-[#475569] text-sm leading-relaxed">{tr.ueberUns.partnerLead}</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {partner.map((p) => (
                <PartnerCard key={p.name} {...p} ctaLabel={partnerCta} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">{tr.ueberUns.ctaTitle}</h2>
            <p className="text-[#64748B] text-sm">{tr.ueberUns.ctaLead}</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href={`tel:${CONTACT.telHref}`}
              className="border border-white/20 text-[#94A3B8] hover:text-white px-5 py-2.5 text-sm transition-colors"
            >
              {CONTACT.tel}
            </a>
            <Link
              href={`/${locale}/kontakt`}
              className="bg-[#1E6FD9] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#1a5fc4] transition-colors"
            >
              {tr.common.ctaContact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
