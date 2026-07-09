import Link from "next/link";
import { notFound } from "next/navigation";
import {
  STATS,
  LEISTUNGEN,
  USPS,
  REFERENZKUNDEN,
  REFERENZKUNDEN_DOMAINS,
  REFERENZKUNDEN_LOGOS,
  CONTACT,
  LOCALES,
  type Locale,
} from "@/lib/data";
import { t } from "@/lib/i18n";
import LogoCell from "@/components/LogoCell";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!LOCALES.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const tr = t(locale);
  const stats = STATS[locale];
  const leistungen = LEISTUNGEN[locale];
  const usps = USPS[locale];
  const featuredRefs = REFERENZKUNDEN.slice(0, 24);

  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/vf-solutions/images/hero-cad.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 photo-overlay-dark" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="block w-8 h-px bg-[#1E6FD9]" />
              <span className="text-[#1E6FD9] text-xs font-semibold tracking-[0.18em] uppercase">
                {tr.common.eyebrowConsulting}
              </span>
            </div>

            <h1 className="text-5xl lg:text-[3.6rem] font-bold text-white leading-[1.08] tracking-tight mb-7">
              {tr.home.heroHeadlineA}<br />
              <span className="text-[#1E6FD9]">{tr.home.heroHeadlineB}</span>
            </h1>

            <p className="text-[#94A3B8] text-lg leading-relaxed mb-10 max-w-xl">
              {tr.home.heroLead}
            </p>

            <div className="flex gap-8 mb-10 py-7 border-y border-white/10">
              {stats.map((s) => (
                <div key={s.value}>
                  <div className="text-2xl font-bold text-white leading-none">{s.value}</div>
                  <div className="text-[#64748B] text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/kontakt`}
                className="bg-[#1E6FD9] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1a5fc4] transition-colors inline-flex items-center gap-2"
              >
                {tr.common.ctaTalk}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href={`/${locale}/leistungen`}
                className="border border-white/25 text-white px-6 py-3 text-sm font-medium hover:bg-white/8 hover:border-white/40 transition-colors"
              >
                {tr.common.ctaServices}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHIE ──────────────────────────────────── */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="py-20 lg:pr-20 border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
              <span className="rule-blue" />
              <h2 className="text-3xl font-bold text-[#0A1628] leading-tight mb-5">
                {tr.home.philoTitleA}<br />{tr.home.philoTitleB}
              </h2>
              <p className="text-[#374151] leading-relaxed mb-5">
                {tr.home.philoP1}
              </p>
              <p className="text-[#374151] leading-relaxed mb-5">
                {tr.home.philoP2}
              </p>
              <p className="text-[#374151] leading-relaxed mb-8">
                {tr.home.philoP3Pre}<strong className="text-[#0A1628]">{tr.home.philoP3Strong}</strong>{tr.home.philoP3Post}
              </p>
              <Link
                href={`/${locale}/ueber-uns`}
                className="text-[#1E6FD9] text-sm font-semibold hover:underline inline-flex items-center gap-1.5"
              >
                {tr.common.ctaMore}
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="relative min-h-[300px] lg:min-h-[460px] overflow-hidden bg-[#F7F8FA]">
              <img
                src="/vf-solutions/images/philosophie-blueprint.jpg"
                alt={tr.common.consultingPhotoAlt}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── USPs ──────────────────────────────────────────── */}
      <section className="section bg-[#F7F8FA] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, i) => (
              <div key={usp.title}>
                <div className="text-xs font-mono text-[#9CA3AF] mb-4">0{i + 1}</div>
                <h3 className="text-base font-semibold text-[#0A1628] mb-2 leading-snug">{usp.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEISTUNGEN ────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <span className="rule-blue" />
              <h2 className="text-3xl font-bold text-[#0A1628] leading-tight mb-5">
                {tr.home.servicesTitleA}<br />{tr.home.servicesTitleB}
              </h2>
              <p className="text-[#374151] text-sm leading-relaxed mb-8">
                {tr.home.servicesLead}
              </p>
              <Link
                href={`/${locale}/leistungen`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E6FD9] hover:underline"
              >
                {tr.common.ctaAllServices}
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="lg:col-span-2">
              {leistungen.map((l, i) => (
                <div
                  key={l.number}
                  className={`flex gap-6 py-6 ${i < leistungen.length - 1 ? "border-b border-[#E5E7EB]" : ""}`}
                >
                  <div className="shrink-0 w-8">
                    <span className="text-xs font-mono text-[#9CA3AF]">{l.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <h3 className="text-base font-semibold text-[#0A1628]">{l.title}</h3>
                      <span className="text-[10px] font-mono bg-[#EEF4FF] text-[#1E6FD9] border border-[#BFDBFE] px-1.5 py-0.5 rounded">
                        {l.tag}
                      </span>
                      {l.highlight && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#C8A96E]/15 text-[#A07E3A] border border-[#C8A96E]/40 px-1.5 py-0.5 rounded">
                          {locale === "de" ? "Schwerpunkt" : "Core focus"}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── REFERENZKUNDEN ─────────────────────────────── */}
      <section className="relative bg-[#0A1628] section overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/vf-solutions/images/precision-detail.jpg"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="block w-8 h-px bg-[#1E6FD9] mb-5" />
              <h2 className="text-3xl font-bold text-white leading-tight">
                {tr.home.refsTitle}
              </h2>
              <p className="text-[#64748B] mt-3 max-w-md text-sm leading-relaxed">
                {tr.home.refsLead}
              </p>
            </div>
            <Link
              href={`/${locale}/projekte#referenzkunden`}
              className="text-[#64748B] hover:text-white text-sm font-medium transition-colors inline-flex items-center gap-1.5 shrink-0"
            >
              {tr.common.ctaAllRefs}
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/5 border border-white/8 overflow-hidden">
            {featuredRefs.map((name) => (
              <LogoCell
                key={name}
                name={name}
                domain={REFERENZKUNDEN_DOMAINS[name]}
                logo={REFERENZKUNDEN_LOGOS[name]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className="bg-[#0A1628] border-t border-white/8 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{tr.home.ctaTitle}</h2>
            <p className="text-[#64748B] text-sm">{tr.home.ctaLead}</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={`tel:${CONTACT.telHref}`}
              className="inline-flex items-center gap-2 border border-white/30 rounded-md text-[#94A3B8] hover:text-white hover:border-white/60 hover:bg-white/5 px-5 py-2.5 text-sm transition-colors whitespace-nowrap"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.04 11.04 0 005.105 5.105l.773-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V13a1 1 0 01-1 1h-1C7.82 14 2 8.18 2 4V3z" fill="currentColor"/>
              </svg>
              {CONTACT.tel}
            </a>
            <Link
              href={`/${locale}/kontakt`}
              className="inline-flex items-center bg-[#1E6FD9] text-white rounded-md px-5 py-2.5 text-sm font-semibold hover:bg-[#1a5fc4] transition-colors whitespace-nowrap"
            >
              {tr.common.ctaContact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
