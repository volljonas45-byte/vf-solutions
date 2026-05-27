import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PROJEKTBEREICHE,
  REFERENZKUNDEN,
  REFERENZKUNDEN_DOMAINS,
  LOCALES,
  type Locale,
} from "@/lib/data";
import { t } from "@/lib/i18n";
import LogoCell from "@/components/LogoCell";

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
  return { title: tr.projekte.title, description: tr.projekte.description };
}

export default async function Projekte({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!LOCALES.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const tr = t(locale);
  const bereiche = PROJEKTBEREICHE[locale];

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1628] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-4 block">
              {tr.projekte.eyebrow}
            </span>
            <h1 className="text-5xl font-black text-white tracking-tight mb-6">
              {tr.projekte.heroTitleA}<br />{tr.projekte.heroTitleB}
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              {tr.projekte.heroLead}
            </p>
          </div>
          <div className="flex flex-wrap gap-6 mt-12">
            {tr.projekte.stats.map((s) => (
              <div key={s.value} className="bg-white/5 border border-white/10 rounded-lg px-6 py-4">
                <div className="text-3xl font-black text-white">{s.value}</div>
                <div className="text-xs text-[#64748B] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJEKTBEREICHE */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-3 block">
              {tr.projekte.areasEyebrow}
            </span>
            <h2 className="text-3xl font-black text-[#0A1628] tracking-tight">
              {tr.projekte.areasTitle}
            </h2>
            <p className="text-[#4A5568] mt-3 max-w-xl mx-auto">
              {tr.projekte.areasLead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bereiche.map((p) => (
              <article
                key={p.title}
                className={`rounded-xl overflow-hidden card-hover ${
                  p.highlight
                    ? "border-2 border-[#C8A96E]/60 shadow-[0_4px_20px_rgba(200,169,110,0.18)]"
                    : "border border-[#E2E8F0]"
                }`}
              >
                <div
                  className={`px-6 py-4 flex items-center justify-between gap-4 flex-wrap ${
                    p.highlight ? "bg-[#1A2F4E]" : "bg-[#0A1628]"
                  }`}
                >
                  <h2 className="text-base font-bold text-white">{p.title}</h2>
                  <div className="flex items-center gap-2 flex-wrap">
                    {p.highlight && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#C8A96E]/20 text-[#C8A96E] border border-[#C8A96E]/40 px-2 py-0.5 rounded">
                        {tr.projekte.focusBadge}
                      </span>
                    )}
                    <span className="text-xs font-mono bg-[#1E6FD9]/20 text-[#93C5FD] border border-[#1E6FD9]/30 px-2 py-0.5 rounded">
                      {p.tag}
                    </span>
                    <span className={`text-xs font-medium ${p.highlight ? "text-[#C8A96E]" : "text-[#C8A96E]"}`}>
                      {p.count}
                    </span>
                  </div>
                </div>
                <div className={`p-6 ${p.highlight ? "bg-gradient-to-br from-[#FFF7E5] to-[#FFFCF0]" : "bg-[#F8F9FB]"}`}>
                  <p className="text-sm text-[#4A5568] mb-5 leading-relaxed italic border-l-2 border-[#E2E8F0] pl-3">
                    {p.desc}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-[#64748B] mb-1.5 block">
                        {tr.projekte.vorgehen}
                      </span>
                      <p className="text-sm text-[#1A2332] leading-relaxed">{p.vorgehen}</p>
                    </div>
                    <div className="border-t border-[#E2E8F0] pt-4">
                      <span className={`text-xs font-semibold uppercase tracking-wide mb-1.5 block ${p.highlight ? "text-[#A07E3A]" : "text-[#1E6FD9]"}`}>
                        {tr.projekte.nutzen}
                      </span>
                      <p className="text-sm text-[#1A2332] leading-relaxed">{p.nutzen}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENZKUNDEN */}
      <section id="referenzkunden" className="section bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-3 block">
              {tr.projekte.refsEyebrow}
            </span>
            <h2 className="text-3xl font-black text-white tracking-tight mb-4">
              {tr.projekte.refsTitle}
            </h2>
            <p className="text-[#64748B] max-w-lg mx-auto">{tr.projekte.refsLead}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-white/5 border border-white/8 overflow-hidden">
            {REFERENZKUNDEN.map((name) => (
              <LogoCell key={name} name={name} domain={REFERENZKUNDEN_DOMAINS[name]} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E6FD9] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">{tr.projekte.ctaTitle}</h2>
            <p className="text-blue-200">{tr.projekte.ctaLead}</p>
          </div>
          <Link
            href={`/${locale}/kontakt`}
            className="shrink-0 bg-white text-[#1E6FD9] px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            {tr.common.ctaContactNow}
          </Link>
        </div>
      </section>
    </>
  );
}
