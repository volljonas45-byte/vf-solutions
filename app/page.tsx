import Link from "next/link";
import { STATS, LEISTUNGEN, USPS, REFERENZKUNDEN, CONTACT } from "@/lib/data";

export default function Home() {
  const featuredRefs = REFERENZKUNDEN.slice(0, 18);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#0A1628] grid-bg-dark overflow-hidden min-h-[90vh] flex items-center">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#1E6FD9]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C8A96E]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Label */}
              <div className="inline-flex items-center gap-2 bg-[#1E6FD9]/10 border border-[#1E6FD9]/20 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 bg-[#1E6FD9] rounded-full animate-pulse" />
                <span className="text-[#93C5FD] text-xs font-medium uppercase tracking-widest">Unabhängige technische Beratung</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
                CAD, PDM und ERP —<br />
                <span className="text-[#1E6FD9]">aus einer Hand.</span>
              </h1>

              <p className="text-[#94A3B8] text-lg leading-relaxed mb-10 max-w-lg">
                Seit 1989 unterstützt vf solutions Unternehmen im Maschinen- und Anlagenbau
                bei Analyse, Konzeption, Systemeinführung und nachhaltiger Prozessoptimierung.
                100% anbieterneutral.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 bg-[#1E6FD9] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1a5fc4] transition-colors"
                >
                  Projekt besprechen
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link
                  href="/leistungen"
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
                >
                  Leistungen ansehen
                </Link>
              </div>
            </div>

            {/* Right: Technical visual */}
            <div className="hidden lg:block relative">
              <div className="relative bg-[#0D1F3C] border border-white/10 rounded-xl p-8 shadow-2xl">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-[#475569] text-xs font-mono ml-2">vf-solutions :: profil</span>
                </div>

                {/* Content */}
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-[#1E6FD9] select-none">›</span>
                    <div>
                      <span className="text-[#64748B]">erfahrung</span>
                      <span className="text-[#94A3B8] mx-2">=</span>
                      <span className="text-[#C8A96E]">"35+ Jahre"</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1E6FD9] select-none">›</span>
                    <div>
                      <span className="text-[#64748B]">projekte</span>
                      <span className="text-[#94A3B8] mx-2">=</span>
                      <span className="text-[#C8A96E]">"180+"</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1E6FD9] select-none">›</span>
                    <div>
                      <span className="text-[#64748B]">referenzen</span>
                      <span className="text-[#94A3B8] mx-2">=</span>
                      <span className="text-[#C8A96E]">"43+ Kunden"</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1E6FD9] select-none">›</span>
                    <div>
                      <span className="text-[#64748B]">neutral</span>
                      <span className="text-[#94A3B8] mx-2">=</span>
                      <span className="text-[#86EFAC]">true</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1E6FD9] select-none">›</span>
                    <div>
                      <span className="text-[#64748B]">verfügbar</span>
                      <span className="text-[#94A3B8] mx-2">=</span>
                      <span className="text-[#86EFAC]">"sofort"</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#1E6FD9] select-none">›</span>
                    <div>
                      <span className="text-[#64748B]">einsatzgebiet</span>
                      <span className="text-[#94A3B8] mx-2">=</span>
                      <span className="text-[#C8A96E]">"D / A / CH"</span>
                    </div>
                  </div>
                </div>

                {/* Systems row */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <p className="text-[#475569] text-xs mb-3 uppercase tracking-widest font-mono">Systeme</p>
                  <div className="flex flex-wrap gap-2">
                    {["SolidWorks", "SAP PLM", "MaxxDB", "CATIA V5", "Inventor", "SAP R/3"].map((s) => (
                      <span key={s} className="text-xs font-mono bg-[#1E6FD9]/10 text-[#93C5FD] border border-[#1E6FD9]/20 px-2 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E2E8F0]">
            {STATS.map((s) => (
              <div key={s.value} className="px-8 py-8 text-center">
                <div className="text-4xl lg:text-5xl font-black text-[#0A1628] tracking-tight">{s.value}</div>
                <div className="text-sm font-semibold text-[#1A2332] mt-1">{s.label}</div>
                <div className="text-xs text-[#94A3B8] mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="section bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-3 block">Warum vf solutions</span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0A1628] tracking-tight">
              Beratung im Interesse des Kunden
            </h2>
            <p className="text-[#4A5568] mt-4 max-w-xl mx-auto">
              vf solutions versteht sich als Anwalt der Interessen seiner Kunden — unabhängig, direkt und mit 35 Jahren Erfahrung.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {USPS.map((usp) => (
              <div key={usp.title} className="bg-white rounded-xl p-6 border border-[#E2E8F0] card-hover">
                <div className="text-2xl text-[#1E6FD9] mb-4">{usp.icon}</div>
                <h3 className="text-base font-bold text-[#0A1628] mb-2">{usp.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEISTUNGEN PREVIEW */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-24">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-3 block">Leistungen</span>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0A1628] tracking-tight mb-6">
                Beratung, Umsetzung und Stabilisierung aus einer Hand
              </h2>
              <p className="text-[#4A5568] leading-relaxed mb-8">
                Von der Analyse bestehender Systemlandschaften bis zur langfristigen
                Stabilisierung im laufenden Betrieb — ohne signifikante Störung des Tagesgeschäfts.
              </p>
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 bg-[#0A1628] text-white px-5 py-2.5 rounded-md font-medium hover:bg-[#122040] transition-colors text-sm"
              >
                Alle Leistungen ansehen
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LEISTUNGEN.map((l) => (
                <div key={l.number} className="group bg-[#F8F9FB] hover:bg-white border border-[#E2E8F0] hover:border-[#1E6FD9]/30 rounded-xl p-5 transition-all duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-semibold text-[#94A3B8]">{l.number}</span>
                    <span className="text-xs font-mono bg-[#EEF4FF] text-[#1E6FD9] px-2 py-0.5 rounded border border-[#BFDBFE]">{l.tag}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#0A1628] mb-2 leading-tight">{l.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REFERENZKUNDEN */}
      <section className="section bg-[#0A1628] grid-bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1E6FD9] mb-3 block">Vertrauen</span>
            <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
              43+ Referenzkunden
            </h2>
            <p className="text-[#64748B] max-w-lg mx-auto">
              Namhafte Unternehmen des deutschen Maschinen- und Anlagenbaus vertrauen auf die Beratung von vf solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/10">
            {featuredRefs.map((name) => (
              <div
                key={name}
                className="bg-[#0D1F3C] hover:bg-[#122040] px-4 py-5 flex items-center justify-center transition-colors"
              >
                <span className="text-[#94A3B8] text-xs font-medium text-center leading-tight hover:text-white transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/projekte#referenzkunden"
              className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#93C5FD] text-sm transition-colors"
            >
              Alle 43 Referenzkunden ansehen
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#1E6FD9]">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight mb-2">
              Wie sieht Ihre Aufgabenstellung aus?
            </h2>
            <p className="text-blue-200">
              Ein direktes Gespräch klärt meist schnell, ob und wie vf solutions helfen kann.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <a
              href={`tel:${CONTACT.telHref}`}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-3 rounded-md font-medium hover:bg-white/20 transition-colors text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.04 11.04 0 005.105 5.105l.773-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V13a1 1 0 01-1 1h-1C7.82 14 2 8.18 2 4V3z" fill="currentColor"/>
              </svg>
              {CONTACT.tel}
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-[#1E6FD9] px-5 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors text-sm"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
