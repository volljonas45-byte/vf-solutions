import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CAD_SYSTEME,
  PDM_SYSTEME,
  PROGRAMMIERUNG,
  API_SYSTEME,
  DATENBANKEN,
  LOCALES,
  type Locale,
} from "@/lib/data";
import { t } from "@/lib/i18n";

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
  return { title: tr.kompetenz.title, description: tr.kompetenz.description };
}

export default async function Kompetenz({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!LOCALES.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const tr = t(locale);

  const GRUPPEN = [
    {
      title: tr.kompetenz.cadTitle,
      tag: "CAD",
      count: CAD_SYSTEME.length,
      items: CAD_SYSTEME,
      color: "text-[#1E6FD9] bg-[#EEF4FF] border-[#BFDBFE]",
    },
    {
      title: tr.kompetenz.pdmTitle,
      tag: "PDM",
      count: PDM_SYSTEME.length,
      items: PDM_SYSTEME,
      color: "text-[#7C3AED] bg-[#F5F3FF] border-[#DDD6FE]",
    },
    {
      title: tr.kompetenz.progTitle,
      tag: "DEV",
      count: PROGRAMMIERUNG.length,
      items: PROGRAMMIERUNG,
      color: "text-[#D97706] bg-[#FFFBEB] border-[#FDE68A]",
    },
    {
      title: tr.kompetenz.apiTitle,
      tag: "API",
      count: API_SYSTEME.length,
      items: API_SYSTEME,
      color: "text-[#059669] bg-[#ECFDF5] border-[#A7F3D0]",
    },
    {
      title: tr.kompetenz.dbTitle,
      tag: "DB",
      count: DATENBANKEN.length,
      items: DATENBANKEN,
      color: "text-[#DC2626] bg-[#FEF2F2] border-[#FECACA]",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1628] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-4 block">
              {tr.kompetenz.eyebrow}
            </span>
            <h1 className="text-5xl font-black text-white tracking-tight mb-6">
              {tr.kompetenz.heroTitle}
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">{tr.kompetenz.heroLead}</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
            {["SolidWorks", "SAP PLM", "CATIA V5", "MaxxDB", "SolidEdge", "Inventor"].map((s) => (
              <span
                key={s}
                className="font-mono text-sm bg-[#1E6FD9]/10 text-[#93C5FD] border border-[#1E6FD9]/20 px-3 py-1.5 rounded-md"
              >
                {s}
              </span>
            ))}
            <span className="font-mono text-sm bg-white/5 text-[#475569] border border-white/10 px-3 py-1.5 rounded-md">
              {tr.kompetenz.morePill}
            </span>
          </div>
        </div>
      </section>

      {/* SYSTEME GRUPPEN */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {GRUPPEN.map((g) => (
              <div key={g.title} className="bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-base font-bold text-[#0A1628]">{g.title}</h2>
                  <div className="flex items-center gap-2">
                    <span className={`tech-badge ${g.color}`}>{g.tag}</span>
                    <span className="text-xs text-[#94A3B8] font-mono">{g.count}x</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-mono font-medium border ${g.color}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EINSATZGEBIET */}
      <section className="section bg-[#F8F9FB] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-center">
            {[
              { label: tr.kompetenz.einsatzgebiet, value: tr.kompetenz.einsatzgebietValue },
              { label: tr.kompetenz.verfuegbarkeit, value: tr.kompetenz.verfuegbarkeitValue },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-[#E2E8F0] rounded-xl p-6">
                <div className="text-3xl text-[#1E6FD9] mb-3">→</div>
                <div className="text-xs text-[#94A3B8] uppercase tracking-widest mb-1.5">{item.label}</div>
                <div className="text-base font-bold text-[#0A1628]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-white mb-4">{tr.kompetenz.ctaTitle}</h2>
          <p className="text-[#64748B] mb-8 max-w-xl mx-auto">{tr.kompetenz.ctaLead}</p>
          <div className="flex justify-center gap-4">
            <Link
              href={`/${locale}/projekte`}
              className="bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-md font-medium hover:bg-white/20 transition-colors text-sm"
            >
              {tr.common.ctaViewProjects}
            </Link>
            <Link
              href={`/${locale}/kontakt`}
              className="bg-[#1E6FD9] text-white px-5 py-2.5 rounded-md font-semibold hover:bg-[#1a5fc4] transition-colors text-sm"
            >
              {tr.common.ctaContact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
