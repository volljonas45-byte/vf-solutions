import Link from "next/link";
import { notFound } from "next/navigation";
import { LEISTUNGEN, LOCALES, type Locale } from "@/lib/data";
import { t } from "@/lib/i18n";
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
  return { title: tr.leistungen.title, description: tr.leistungen.description };
}

export default async function Leistungen({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!LOCALES.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const tr = t(locale);
  const leistungen = LEISTUNGEN[locale];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#0A1628] py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={asset("/images/leistungen-hero.jpg")}
            alt=""
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 photo-overlay-dark" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-4 block">
              {tr.leistungen.eyebrow}
            </span>
            <h1 className="text-5xl font-black text-white tracking-tight mb-6">
              {tr.leistungen.heroTitle}
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              {tr.leistungen.heroLead}
            </p>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN GRID */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leistungen.map((l) => (
              <article
                key={l.number}
                className={`rounded-xl p-7 card-hover group ${
                  l.highlight
                    ? "bg-gradient-to-br from-[#FFF7E5] to-[#FFFCF0] border-2 border-[#C8A96E]/50 shadow-[0_4px_20px_rgba(200,169,110,0.15)]"
                    : "bg-[#F8F9FB] border border-[#E2E8F0]"
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-1 rounded ${
                      l.highlight
                        ? "text-[#A07E3A] bg-[#C8A96E]/15"
                        : "text-[#C8A96E] bg-[#C8A96E]/10"
                    }`}
                  >
                    {l.number}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {l.highlight && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A07E3A] bg-[#C8A96E]/20 border border-[#C8A96E]/40 px-2 py-0.5 rounded">
                        {tr.leistungen.focusBadge}
                      </span>
                    )}
                    <span className="tech-badge">{l.tag}</span>
                  </div>
                </div>
                <h2 className="text-lg font-bold text-[#0A1628] mb-3 leading-tight">{l.title}</h2>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-5">{l.desc}</p>
                <ul className="space-y-2">
                  {l.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-[#64748B]">
                      <svg
                        className={`mt-0.5 shrink-0 ${l.highlight ? "text-[#C8A96E]" : "text-[#1E6FD9]"}`}
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path d="M2.5 7l3.5 3.5 5.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KOMMERZIELLE USPs */}
      <section className="section bg-[#F8F9FB] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-3 block">
              {tr.leistungen.uspEyebrow}
            </span>
            <h2 className="text-3xl font-black text-[#0A1628] tracking-tight">
              {tr.leistungen.uspTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tr.leistungen.usp.map((item) => (
              <div key={item.title} className="bg-white border border-[#E2E8F0] rounded-xl p-6 text-center">
                <div className="w-10 h-10 bg-[#EEF4FF] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="text-[#1E6FD9]" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm3.5 5.5l-4 4-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-bold text-[#0A1628] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-white mb-4">{tr.leistungen.ctaTitle}</h2>
          <p className="text-[#64748B] mb-8">{tr.leistungen.ctaLead}</p>
          <Link
            href={`/${locale}/kontakt`}
            className="inline-flex items-center gap-2 bg-[#1E6FD9] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1a5fc4] transition-colors"
          >
            {tr.common.ctaContactNow}
          </Link>
        </div>
      </section>
    </>
  );
}
