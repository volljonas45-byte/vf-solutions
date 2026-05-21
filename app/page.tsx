import Link from "next/link";
import { STATS, LEISTUNGEN, USPS, REFERENZKUNDEN, CONTACT } from "@/lib/data";

export default function Home() {
  const featuredRefs = REFERENZKUNDEN.slice(0, 24);

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] min-h-[92vh] flex items-center overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="/vf-solutions/images/hero-industry.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 photo-overlay-dark" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full py-28">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <span className="block w-8 h-px bg-[#1E6FD9]" />
              <span className="text-[#1E6FD9] text-xs font-semibold tracking-[0.18em] uppercase">
                Unabhängige technische Beratung · seit 1989
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-[3.6rem] font-bold text-white leading-[1.08] tracking-tight mb-7">
              CAD, PDM und ERP —<br />
              <span className="text-[#1E6FD9]">aus einer Hand.</span>
            </h1>

            <p className="text-[#94A3B8] text-lg leading-relaxed mb-10 max-w-xl">
              Seit 1989 unterstützt vf solutions Unternehmen im Maschinen- und
              Anlagenbau bei Analyse, Konzeption, Systemeinführung und nachhaltiger
              Prozessoptimierung — zu 100% anbieterneutral.
            </p>

            {/* Inline stats */}
            <div className="flex gap-8 mb-10 py-7 border-y border-white/10">
              {STATS.map((s) => (
                <div key={s.value}>
                  <div className="text-2xl font-bold text-white leading-none">{s.value}</div>
                  <div className="text-[#64748B] text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="bg-[#1E6FD9] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1a5fc4] transition-colors inline-flex items-center gap-2"
              >
                Projekt besprechen
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/leistungen"
                className="border border-white/25 text-white px-6 py-3 text-sm font-medium hover:bg-white/8 hover:border-white/40 transition-colors"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHIE ───────────────────────────────────────────── */}
      <section className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Text */}
            <div className="py-20 lg:pr-20 border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
              <span className="rule-blue" />
              <h2 className="text-3xl font-bold text-[#0A1628] leading-tight mb-5">
                Anwalt der Interessen<br />seiner Kunden.
              </h2>
              <p className="text-[#374151] leading-relaxed mb-5">
                vf solutions versteht sich als unabhängiger Berater — ohne Bindung an
                Softwarehersteller, Vertriebsprogramme oder Provisionen. Systemauswahl
                nach den tatsächlichen Anforderungen des Kunden, nicht nach Marktanteilen.
              </p>
              <p className="text-[#374151] leading-relaxed mb-8">
                Projekte laufen ohne signifikante Störung des Tagesbetriebs. Die Ergebnisse
                sind <strong className="text-[#0A1628]">„controlling-fest"</strong> — messbar,
                nachweisbar, praxistauglich.
              </p>
              <Link
                href="/ueber-uns"
                className="text-[#1E6FD9] text-sm font-semibold hover:underline inline-flex items-center gap-1.5"
              >
                Mehr über vf solutions
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Image */}
            <div className="hidden lg:block relative min-h-[360px]">
              <img
                src="/vf-solutions/images/factory-cad.jpg"
                alt="Präzision in der Praxis"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0A1628]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── USPs ──────────────────────────────────────────────────── */}
      <section className="section bg-[#F7F8FA] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {USPS.map((usp, i) => (
              <div key={usp.title}>
                <div className="text-xs font-mono text-[#9CA3AF] mb-4">0{i + 1}</div>
                <h3 className="text-base font-semibold text-[#0A1628] mb-2 leading-snug">{usp.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEISTUNGEN ────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Left header */}
            <div className="lg:sticky lg:top-24">
              <span className="rule-blue" />
              <h2 className="text-3xl font-bold text-[#0A1628] leading-tight mb-5">
                Beratung, Umsetzung<br />und Stabilisierung
              </h2>
              <p className="text-[#374151] text-sm leading-relaxed mb-8">
                Von der Analyse bestehender Systemlandschaften bis zur langfristigen
                Stabilisierung im laufenden Betrieb.
              </p>
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E6FD9] hover:underline"
              >
                Alle Leistungen ansehen
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Service list */}
            <div className="lg:col-span-2">
              {LEISTUNGEN.map((l, i) => (
                <div
                  key={l.number}
                  className={`flex gap-6 py-6 ${i < LEISTUNGEN.length - 1 ? "border-b border-[#E5E7EB]" : ""}`}
                >
                  <div className="shrink-0 w-8">
                    <span className="text-xs font-mono text-[#9CA3AF]">{l.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="text-base font-semibold text-[#0A1628]">{l.title}</h3>
                      <span className="text-[10px] font-mono bg-[#EEF4FF] text-[#1E6FD9] border border-[#BFDBFE] px-1.5 py-0.5 rounded">{l.tag}</span>
                    </div>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── REFERENZKUNDEN ────────────────────────────────────────── */}
      <section className="relative bg-[#0A1628] section overflow-hidden">
        {/* Subtle photo background */}
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
                43 Referenzkunden
              </h2>
              <p className="text-[#64748B] mt-3 max-w-md text-sm leading-relaxed">
                Namhafte Unternehmen des deutschen Maschinen- und Anlagenbaus
                — von Mittelstand bis Konzern.
              </p>
            </div>
            <Link
              href="/projekte#referenzkunden"
              className="text-[#64748B] hover:text-white text-sm font-medium transition-colors inline-flex items-center gap-1.5 shrink-0"
            >
              Alle 43 ansehen
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/5 border border-white/8 overflow-hidden">
            {featuredRefs.map((name) => (
              <div
                key={name}
                className="bg-[#0D1F3C]/70 hover:bg-[#122040] px-4 py-5 flex items-center justify-center transition-colors"
              >
                <span className="text-[#64748B] hover:text-[#94A3B8] text-xs font-medium text-center leading-tight transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────── */}
      <section className="bg-[#0A1628] border-t border-white/8 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Wie sieht Ihre Aufgabenstellung aus?
            </h2>
            <p className="text-[#64748B] text-sm">
              Ein direktes Gespräch klärt meist schnell, ob und wie vf solutions helfen kann.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href={`tel:${CONTACT.telHref}`}
              className="flex items-center gap-2 border border-white/20 text-[#94A3B8] hover:text-white hover:border-white/40 px-5 py-2.5 text-sm transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.04 11.04 0 005.105 5.105l.773-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V13a1 1 0 01-1 1h-1C7.82 14 2 8.18 2 4V3z" fill="currentColor"/>
              </svg>
              {CONTACT.tel}
            </a>
            <Link
              href="/kontakt"
              className="bg-[#1E6FD9] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#1a5fc4] transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
